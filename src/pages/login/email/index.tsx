import { useState } from "react";
import style from "./style.module.css"
import { login } from "../../../utils/http";
import { setCookie } from "../../../utils/cookies";

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
                login(name, pwd)
                    .then((result) => {
                        setCookie("access_token", result.accessToken)
                        setCookie("refresh_token", result.refreshToken);
                        location.replace("/")
                    })
                    //@ts-ignore
                    .catch((error) => {
                        alert("아이디 또는 비밀번호를 다시 확인해주세요.")
                    })
            }}>로그인하기</div>
        </div>
    )
}

export default LoginEmailPage;