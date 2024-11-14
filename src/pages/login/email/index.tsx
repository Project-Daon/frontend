import { useState } from "react";
import style from "./style.module.css"

const LoginEmailPage = () => {
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");


    return (
        <div className={style.email}>
            <h2>로그인을 완료해주세요</h2>
            <p>처음이신가요? <span style={{ color: "#CBBEFF", fontWeight: "600" }} onClick={() => location.replace("/register")}>회원가입 하기</span></p>

            <div className={style.form}>
                <label>아이디</label>
                <input value={name} onChange={(t) => setName(t.target.value)} placeholder="webmaster@example.com" />
            </div>
            <div className={style.form}>
                <label>비밀번호</label>
                <input type="password" value={pwd} onChange={(t) => setPwd(t.target.value)} placeholder="*************" />
            </div>

            <div className={style.btn} onClick={() => {
                alert("여기서 로그인 로직 연결하셈")
            }}>가입하고 시작하기</div>
        </div>
    )
}

export default LoginEmailPage;