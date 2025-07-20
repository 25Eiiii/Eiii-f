import * as D from "../styles/pages/styledCmDetail";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import styled from "styled-components";
import { PageContainer } from "../styles/common/styledConainer";
import { BackgroundOverlay } from "../styles/common/styledBackground";
import axios from "axios";

// Apply 버튼 컴포넌트
const Apply = ({ user, onClick }) => {
  return <Ex onClick={() => onClick(user)}>대화 신청</Ex>;
};

export const Ex = styled.div`
  display: inline-flex;
  padding: 6px 12px;
  align-items: center;
  border-radius: 999px;
  background: #f99505;
  color: var(--Font-White, #ffffff);
  text-align: center;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.12px;
  position: absolute;
  right: 27px;
  cursor: pointer;
`;

// Header Component
const Header = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Back onClick={() => navigate(-1)}>
        <img src={`${process.env.PUBLIC_URL}/images/back.svg`} alt="back" />
      </Back>
      <Search>
        <img src={`${process.env.PUBLIC_URL}/images/search.svg`} alt="search" />
      </Search>
      <Title>
        선후배 밥약
        <img src={`${process.env.PUBLIC_URL}/images/meal.svg`} alt="meal" />
      </Title>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 60px 27px 17px;
  width: 100%;
`;

export const Back = styled.div`
  width: 32px;
  height: 31px;
  flex-shrink: 0;
  background: #f8b621;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-left: 23px;
`;

export const Search = styled.div`
  margin-left: 10px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  height: 32px;
  flex-shrink: 0;
  color: #f8b621;
  text-align: center;
  font-family: Inter;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  gap: 5px;
  align-items: center;
  margin-left: 69px;
`;

const Detail = () => {
  const { pk } = useParams(); // 게시글 id 추출 
  const accessToken = localStorage.getItem("accessToken");
  const [post, setPost] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null); // 프로필 상세 카드 유저 정보
  const [loading, setLoading] = useState(true);
  const [isDetailLoading, setIsDetailLoading] = useState(false); // 프로필 상세 카드 모달 로딩
  const [content, setContent] = useState(""); // 댓글 내용

  // 상세 게시글, 댓글 목록 조회 
  const fetchPostDetail = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/communities/post/${pk}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setPost(res.data);
    } catch (err) {
      console.error("상세 게시글 불러오기 실패", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostDetail();
  }, [pk]);

  // 좋아요 요청 
  const handleLike = async () => {
    try {
      await axios.post(
        `/api/communities/post/${pk}/like/`,
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      fetchPostDetail(); // 최신 좋아요 개수 반영
    } catch (err) {
      console.error("좋아요 실패", err);
    }
  };

  // 대화 요청 버튼
  const handleApplyClick = async (user) => {
    try {
      setIsDetailLoading(true);
      const res = await axios.get(`/api/accounts/profile/${user.id}/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setSelectedUser(res.data);
    } catch (err) {
      console.error("상세 카드 불러오기 실패", err);
    } finally {
      setIsDetailLoading(false);
    }
  };

  // 대화 요청 나가기
  const handleCloseApply = () => {
    setSelectedUser(null);
  };

  if (loading) return <p>불러오는 중</p>;
  if (!post) return <p>게시글 불러오기 실패</p>;

  // 댓글 작성 
  const handleSubmit = async () => {
    if (!content.trim()) {
      alert("댓글을 입력해주세요.");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:8000/api/communities/${pk}/comments/`,
        { post: pk, content },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      await fetchPostDetail();

      const newComment = res.data;

      // 댓글 추가
      setPost(prev => ({
        ...prev, // 이전 상태 복사 
        comments: [...(prev.comments || []), newComment] // 새  댓글 추가
      }));

      setContent("");
    } catch (err) {
      console.error("댓글 등록 실패", err);
    }
  };

  return (
    <PageContainer>
      <Header />
      <D.Detail>
        <D.Profile>
          <D.Pic onClick={() => handleApplyClick({ id: post.user-1 })}>
            <img src={`${process.env.PUBLIC_URL}/images/avatar.svg`} alt="img" />
          </D.Pic>
          <D.Infos>
            <D.Info1>
              <D.Name>{post.nickname}</D.Name>
              <D.Time>{post.created_at}</D.Time>
            </D.Info1>
            <D.Info2>{post.major} {post.year}학번</D.Info2>
          </D.Infos>
          <Apply user={post} onClick={() => handleApplyClick({ id: post.user-1 })} />
        </D.Profile>

        <D.Big>{post.title}</D.Big>

        <D.Content>
          <p>{post.content}</p>
          {post.image && (
            <D.Food>
              <img src={post.image} alt="food" />
            </D.Food>
          )}
        </D.Content>

        <D.Bottom>
          <D.Like onClick={handleLike} style={{ cursor: "pointer" }}>
            <D.IconImg src={`${process.env.PUBLIC_URL}/images/heart.svg`} alt="heart" />
            좋아요 {post.likes ?? 0}개
          </D.Like>
          <D.Comment>
            <D.IconImg src={`${process.env.PUBLIC_URL}/images/comment.svg`} />
            댓글 {post.comments?.length ?? 0}개
          </D.Comment>
          <D.Share>
            <D.IconImg src={`${process.env.PUBLIC_URL}/images/share.svg`} />
            공유
          </D.Share>
        </D.Bottom>
      </D.Detail>

      <D.Line />

      {/* 댓글 목록 */}
      <D.Comments>
        {post.comments?.map((cmt) => (
          <D.CmtProfile>
            <D.Profile>
            <D.Pic onClick={() => handleApplyClick({ id: cmt.user-1 })}>
              <img src={`${process.env.PUBLIC_URL}/images/avatar.svg`} alt="img" />
            </D.Pic>
            <D.Infos>
              <D.Info1 variant="cmt">
                <D.Name>{cmt.nickname}</D.Name>
                <D.Time>{cmt.created_at}</D.Time>
              </D.Info1>
              <D.Info2>{cmt.major} {cmt.year}학번</D.Info2>
            </D.Infos>
            <Apply user={cmt} onClick={() => handleApplyClick({ id: cmt.user-1 })} />
            </D.Profile>
            
            <D.Content variant="cmt">
              <p>{cmt.content}</p>
              <D.CBtm>
                <D.Good>
                  <img src={`${process.env.PUBLIC_URL}/images/good.svg`} alt="good" />
                  좋아요 {cmt.likes ?? 0}개
                </D.Good>
                <D.Comment>
                  <img src={`${process.env.PUBLIC_URL}/images/comment.svg`} alt="comment" />
                  답글 달기
                </D.Comment>
              </D.CBtm>
            </D.Content>
          </D.CmtProfile>
        ))}
      </D.Comments>

      <D.Line2 />

      {/* ✅ 댓글 입력창 */}
      <D.Write>
        <D.Cam>
          <img src={`${process.env.PUBLIC_URL}/images/cam.svg`} alt="cam" />
        </D.Cam>
        <D.Here
          placeholder="댓글을 입력해 주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <D.Btn onClick={handleSubmit}>등록</D.Btn>
      </D.Write>

      {/* ✅ 상세 카드 모달 */}
      {selectedUser && (
        <>
          <BackgroundOverlay />
          <DetailCard user={selectedUser} />
          <D.BtnGroup>
            <D.Send>대화 신청</D.Send>
            <D.Cancle onClick={handleCloseApply}>나가기</D.Cancle>
          </D.BtnGroup>
        </>
      )}

      {isDetailLoading && <p>불러오는 중...</p>}
    </PageContainer>
  );
};

export default Detail;
