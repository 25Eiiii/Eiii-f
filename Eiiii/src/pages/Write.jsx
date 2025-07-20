import * as W from "../styles/pages/styledWrite"
import { PageContainer } from "../styles/common/styledConainer"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

const Write = () => {
    const navigate = useNavigate()
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [photo, setPhoto] = useState(null);

    const accessToken = localStorage.getItem("accessToken");

    const handleSubmit = async () => {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            alert("로그인이 필요합니다.");
            navigate("/login");
            return;
        }
    
        try {
            const body = {
                category,
                title,
                content,
                photo: null, // 우선 비워두거나 백엔드 요구 방식에 맞게 처리
            };
    
            const res = await axios.post("/api/communities/create/", body, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
            });
    
            alert("게시글이 등록되었습니다.");
            navigate("/community");
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
            <W.Category>
                <p>
                    {category
                    ? category === "regular"
                        ? "일반"
                        : category === "notice"
                        ? "공지"
                        : "자유"
                    : "카테고리를 선택해주세요."}
                </p>
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="regular">일반</option>
                    <option value="notice">공지</option>
                    <option value="free">자유</option>
                </select>
            </W.Category>

                <W.Line></W.Line>
                <W.Title 
                    placeholder="제목을 입력해주세요."
                    value={title}    
                    onChange={(e) => setTitle(e.target.value)}
                >
                </W.Title>
                <W.Line></W.Line>
                <W.Content 
                    placeholder="내용을 입력해주세요."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                >
                </W.Content>
            </W.Box>
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
    )
}

export default Write;