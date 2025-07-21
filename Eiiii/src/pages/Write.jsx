import * as W from "../styles/pages/styledWrite";
import { PageContainer } from "../styles/common/styledConainer";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Write = () => {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState(null);

  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const [category, setCategory] = useState("");

  const accessToken = localStorage.getItem("accessToken");

  // 카테고리 값 
  const categoryLabel = {
    mentoring: "선후배 밥약",
    regular: "정기 밥약",
    classmate: "같은 수업 밥약",
  };

  const handleSubmit = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
  
    try {
      if (!category) {
        alert("카테고리를 선택해주세요.");
        return;
      }
  
      const apiUrl = "http://localhost:8000/api/communities/create/";
  
      const body = {
        category,   // "mentoring", "regular", "classmate" 등
        title,
        content,
        photo: null,
      };
  
      const res = await axios.post(apiUrl, body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
  
      alert("게시글이 등록되었습니다.");
      navigate(`/community/${category}`);
    } catch (error) {
      console.error("게시글 등록 실패:", error);
      alert("게시글 등록 실패");
    }
  };
  

  return (
    <PageContainer>
      <W.Header>
        <W.Cancle onClick={() => navigate(-1)}>
          <img
            id="cancle"
            src={`${process.env.PUBLIC_URL}/images/cancle.svg`}
            alt="cancle"
          />
        </W.Cancle>
        <W.Name>글 쓰기</W.Name>
        <W.Regist onClick={handleSubmit}>등록</W.Regist>
      </W.Header>

      <W.Box>
        {/* 카테고리 선택 */}
        <W.Category>
          <W.SelectedCategory onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {category ? categoryLabel[category] : "카테고리를 선택해 주세요"}
            <img src="/images/open.svg" alt="open" />
          </W.SelectedCategory>

          {isDropdownOpen && (
            <W.Dropdown>
              <li onClick={() => { setCategory("mentoring"); setIsDropdownOpen(false); }}>선후배 밥약</li>
              <li onClick={() => { setCategory("regular"); setIsDropdownOpen(false); }}>정기 밥약</li>
              <li onClick={() => { setCategory("classmate"); setIsDropdownOpen(false); }}>같은 수업 밥약</li>
            </W.Dropdown>
          )}
        </W.Category>

        <W.Line />

        {/* 제목 */}
        <W.Title
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <W.Line />

        {/* 내용 */}
        <W.Content
          placeholder="내용을 입력해주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </W.Box>

      {/* 이미지 첨부 */}
      <W.Cam>
        <label htmlFor="fileInput">
          <img src={`${process.env.PUBLIC_URL}/images/cam.svg`} alt="upload" />
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => setPhoto(e.target.files[0])}
        />
      </W.Cam>
    </PageContainer>
  );
};

export default Write;
