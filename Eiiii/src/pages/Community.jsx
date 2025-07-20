import * as M from "../styles/pages/styledCommunity"
import NavBar from "../components/NavBar"
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect, useMemo } from "react"
import axios from "axios"
import styled from "styled-components"
import { PageContainer } from "../styles/common/styledConainer"
import DetailCard from "../components/DetailCard"
import { BackgroundOverlay } from "../styles/common/styledBackground"

// Header Component
const Header = () => {
  const navigate = useNavigate()

  return (
      <Wrapper>
          <Back onClick={() => navigate(-1)}>
              <img
                  src={`${process.env.PUBLIC_URL}/images/back.svg`}
                  alt="back"
              />
          </Back>
          <Search>
              <img
                  src={`${process.env.PUBLIC_URL}/images/search.svg`}
                  alt="search"
              />
          </Search>
          <Title>선후배 밥약
                  <img
                  src={`${process.env.PUBLIC_URL}/images/meal.svg`}
                  alt="meal"
              />
          </Title>
      </Wrapper>
    )
  }
  
  export const Wrapper = styled.div`
      display: flex;
      align-items: center;
      padding: 60px 27px 17px;
      width: 100%;
  `
  
  export const Back = styled.div`
      width: 32px;
      height: 31px;
      flex-shrink: 0;
      background: #F8B621;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      margin-left: 23px;
  `
  
  export const Search = styled.div`
      margin-left: 10px;
  `
  export const Title = styled.div`
      display: flex;
      justify-content: center;
      height: 32px;
      flex-shrink: 0;
      color: #F8B621;
      text-align: center;
      font-family: Inter;
      font-size: 21px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      gap: 5px;
      align-items: center;
      margin-left: 69px;
  `

// Community Page
const Community = ({user, onClick}) => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([]);
    const { category } = useParams();
    const accessToken = localStorage.getItem("accessToken")
    const [selectedUser, setSelectedUser] = useState(null);
    const [isDetailLoading, setIsDetailLoading] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(() => {
      const fetchPosts = async () => {
          try {
              const res = await axios.get(`http://localhost:8000/api/communities/${category}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
              });
              console.log("📦 게시글 응답:", res.data);
              setPosts(res.data);
          } catch (err) {
              console.error("게시글 불러오기 실패", err);
          }
      };

      if (category) {
        fetchPosts();
      }
    }, [category]);

    // 매칭 상세 카드 불러오기 
    const handleCardClick = async (user, image) => {
        try {
        // debugging code
        console.log("user:", user);
        setIsDetailLoading(true);
        const res = await axios.get(`/api/accounts/profile/${user.id}/`, {
            headers: {
            Authorization: `Bearer ${accessToken}`,
            },
        });
        setSelectedUser(res.data)
        setSelectedImg(image)
        } catch(err) {
        console.error("상세 카드 불러오기 실패", err);
        } finally {
        setIsDetailLoading(false);
        }
    };

    // 프로필을 랜덤 이미지로 설정
      const randomImg = useMemo(() => {
        const imgList = [
          "/images/profile1.svg",
          "/images/profile2.svg"
        ];
        const randomIndex = Math.floor(Math.random()*imgList.length);
        return imgList[randomIndex];
      }, []);

    // 모달 창 닫기
    const handleCloseDetail = () => {
        setSelectedUser(null);
      };

    // Scrap
    const handleScrap = async (postId) => {
        try {
          const res = await axios.post(`/api/communities/post/${postId}/scrap/`, 
            {},
            {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
          });

          setPosts((prevPosts) => 
            prevPosts.map((post) =>
                post.id === postId
                    ? { ...post, scraps: (post.scraps ?? 0) +1}
                    : post
            )
        )
        } catch (err) {
            console.error("스크랩 실패", err);
        }
    };
    // Like
    const handleLike = async (postId) => {
        try {
          const res = await axios.post(`/api/communities/post/${postId}/like/`, 
            {},
            {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
          });

          setPosts((prevPosts) => 
            prevPosts.map((post) =>
                post.id === postId
                    ? { ...post, likes: (post.likes ?? 0) +1}
                    : post
            )
        )
        } catch (err) {
            console.error("스크랩 실패", err);
        }
    };

    return (
        <PageContainer>
            <Header />
            {/* 게시글 목록 */}
            <M.Wrapper>
                {posts.length > 0 ? (
                posts.map((post) => (
                    <M.Post>
                    <M.Item key={post.id}>
                    <M.Profile>
                        <M.Pic onClick={() => handleCardClick({id: post.user}, randomImg)}>
                        <img src={randomImg} alt="profile" />
                        </M.Pic>
                        <M.Infos>
                        <M.Info1>
                            <M.Name>{post.nickname}</M.Name>
                            <M.Time>{post.created_at || "방금"}</M.Time>
                        </M.Info1>
                        <M.Info2>
                            {post.major} {post.year}학번
                        </M.Info2>
                        </M.Infos>
                    </M.Profile>

                    <M.Content onClick={() => navigate(`/community-detail/${post.id}`)}>
                        <M.Big>{post.title}</M.Big>
                        <p>{post.content.slice(0, 50)}...</p>
                        <M.Etc>더보기</M.Etc>
                    </M.Content>

                    <M.Bottom>
                        <M.Like  onClick={() => handleLike(post.id)}>
                        <M.IconImg src={`${process.env.PUBLIC_URL}/images/heart.svg`} />
                        {post.likes ?? 0}
                        </M.Like>
                        <M.Comment>
                        <M.IconImg src={`${process.env.PUBLIC_URL}/images/comment.svg`} />
                        {post.comments ?? 0}
                        </M.Comment>
                        <M.Scrap onClick={() => handleScrap(post.id)}>
                            <M.IconImg src={`${process.env.PUBLIC_URL}/images/scrap.svg`} />
                            {post.scraps ?? 0}
                        </M.Scrap>
                        <M.More>
                        <M.IconImg src={`${process.env.PUBLIC_URL}/images/more.svg`} />
                        </M.More>
                    </M.Bottom>
                    </M.Item>
                    </M.Post>
                ))
                ) : (
                <M.EmptyText>등록된 글이 없습니다.</M.EmptyText>
                )}
            </M.Wrapper>

      {/* 글쓰기 버튼 (카테고리 유지) */}
        <M.WriteBtn onClick={() => navigate(`/community-write?category=${category}`)}>
            글쓰기
        </M.WriteBtn>        
        <NavBar></NavBar>

        {/* 배경 흐리게 */}
        {selectedUser && <BackgroundOverlay></BackgroundOverlay>}
        {/* 프로필 클릭 시 상세 카드 창 */}
        {selectedUser && !isDetailLoading && (
            <DetailCard user={selectedUser} img={selectedImg}/>
        )}

        {selectedUser && (
        <M.ButtonGroup>
            <M.ApplyBtn onClick={handleCloseDetail}>대화 신청</M.ApplyBtn>
            <M.ExtBtn onClick={handleCloseDetail}>나가기</M.ExtBtn>
        </M.ButtonGroup>
        )}

        {isDetailLoading && <p>불러오는 중</p>}
        </PageContainer>
    )
}

export default Community