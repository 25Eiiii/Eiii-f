import * as W from "../styles/pages/styledWrite"
import { PageContainer } from "../styles/common/styledConainer"
import { useNavigate } from "react-router-dom"

const Write = () => {
    const navigate = useNavigate()

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
            <W.Regist onClick={() => navigate("/community")}>등록</W.Regist>
        </W.Header>
            <W.Box>
                <W.Category>
                    <p>카테고리를 선택해주세요.</p>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/open.svg`}
                    />
                </W.Category>
                <W.Line></W.Line>
                <W.Title placeholder="제목을 입력해주세요."></W.Title>
                <W.Line></W.Line>
                <W.Content placeholder="내용을 입력해주세요."></W.Content>
            </W.Box>
            <W.Cam>
                <img 
                    src={`${process.env.PUBLIC_URL}/images/cam.svg`}
                />
            </W.Cam>
        </PageContainer>
    )
}

export default Write;