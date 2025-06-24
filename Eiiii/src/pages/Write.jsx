import * as W from "../styles/pages/styledWrite"
import Header from "../components/Header"

const Write = () => {

    return (
        <W.Container>
        <W.Header>
            <W.Cancle>
                <img 
                    id="cancle"
                    src={`${process.env.PUBLIC_URL}/images/cancle.svg`}
                    alt="cancle"
                />
            </W.Cancle>
            <W.Name>글 쓰기</W.Name>
            <W.Regist>등록</W.Regist>
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
        </W.Container>
    )
}

export default Write;