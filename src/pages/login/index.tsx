import { useState } from "react";
import { LoginFristComponent, LoginSecondComponent, LoginThirdPage, SelectMenu } from "./components";
import style from "./style.module.css";



const LoginPage = () => {
    const [n, setN] = useState(0);
    const Pages = [<LoginFristComponent />, <LoginSecondComponent />, <LoginThirdPage />];

    return (
        <div>
            {n == 2 ? <SelectMenu /> : null}
            <div className={style.page_container}>
                {Pages[n]}
                {n < 2 && (
                    <div className={style.next_btn} onClick={() => setN(n + 1)}>
                        다음
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginPage;
