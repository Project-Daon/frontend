import { useState } from "react";
import style from "./style.module.css"

const checkpwd = (a: string, b: string) => {
    return a === b ? true : false;
}

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const [repwd, setRePwd] = useState("");


    return (
        <div className={style.register}>
            <h2>회원 가입을 완료해주세요</h2>
            <p>홈 화면에서 변경할 수 있어요.</p>

            <div className={style.form}>
                <label>아이디</label>
                <input value={name} onChange={(t) => setName(t.target.value)} placeholder="webmaster@example.com" />
            </div>
            <div className={style.form}>
                <label>비밀번호</label>
                <input type="password" value={pwd} onChange={(t) => setPwd(t.target.value)} placeholder="*************" />
            </div>
            <div className={style.form}>
                <label>비밀번호 재입력</label>
                <input type="password" value={repwd} onChange={(t) => setRePwd(t.target.value)} placeholder="*************" />
            </div>

            <div className={style.btn} onClick={() => {
                if (checkpwd(pwd, repwd)) {
                    alert("회원가입 진행합니다.")
                } else {
                    alert("비밀번호가 동일하지 않습니다. 다시 확인해주세요.")
                }
            }}>가입하고 시작하기</div>
        </div>
    )
}

export default RegisterPage;