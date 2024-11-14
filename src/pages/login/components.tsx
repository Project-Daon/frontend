import React, { SetStateAction, useEffect, useState } from "react";
import style from "./style.module.css";
import { LuPipette } from "react-icons/lu";

const DotIndicator = ({ activeIndex }: { activeIndex: number }) => (
    <div className={style.dot_wrap}>
        {[0, 1, 2].map((i) => (
            <span key={i} className={i === activeIndex ? style.dot : style.dot_not} />
        ))}
    </div>
);

const FadeInComponent = ({ children }: { children: React.ReactNode }) => {
    const [fadein, setFadein] = useState("");

    useEffect(() => {
        setFadein(style.end);
        return () => {
            setTimeout(() => setFadein(""), 2500);
        };
    }, []);

    return <div className={`${style.fade_in} ${fadein}`}>{children}</div>;
};

export const LoginFristComponent = () => (
    <div className={style.container}>
        <DotIndicator activeIndex={0} />
        <FadeInComponent>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px", flexDirection: "column" }}>
                <img src="/login/image1.png" alt="Image 1" />
                <h1 className={style.centered_text}>
                    하루하루를 기록하고,<br />캐릭터를 키워봐요!
                </h1>
            </div>
        </FadeInComponent>
    </div>
);

export const LoginSecondComponent = () => (
    <div className={style.container}>
        <DotIndicator activeIndex={1} />
        <FadeInComponent>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px", flexDirection: "column" }}>
                <img src="/login/image1.png" alt="Image 1" />
                <h1 className={style.centered_text}>
                    쌓인 캐시로 더 다양한<br />캐릭터를 키워봐요!
                </h1>
            </div>
        </FadeInComponent>
    </div>
);

export const LoginThirdPage = () => (
    <div className={style.container} style={{ alignItems: "normal", height: "95vh" }}>
        <DotIndicator activeIndex={2} />
        <h2 className={style.title}>첫 번째 캐릭터를 만들어주세요</h2>
        <p className={style.p_right_gray}>만든 캐릭터는 수정할 수 없어요.</p>
        <img src="/login/char1.png" alt="Character" />
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <h2>엄지척도하니</h2>
            <div className={style.level_tag}>Lv.1</div>
        </div>
        <div style={{ marginTop: "auto" }}>
            <div className={style.email_btn}>이메일로 시작하기</div>
            <div style={{ display: "flex", marginTop: "5px", alignItems: "center" }}>
                <div style={{ borderBottom: "2px dashed #6D6D6D", flex: 1 }}></div>
                <p style={{ color: "#6D6D6D", fontWeight: "600", marginLeft: "10px", marginRight: "10px" }}>Or</p>
                <div style={{ borderBottom: "2px dashed #6D6D6D", flex: 1 }}></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                <div className={style.icons} style={{ backgroundColor: "#03C75A" }}><img src="/icon/naver.png" /></div>
                <div className={style.icons} style={{ backgroundColor: "#FFCD00" }}><img src="/icon/kakao.png" /></div>
                <div className={style.icons} style={{ backgroundColor: "white" }}><img src="/icon/apple.png" /></div>
                <div className={style.icons} style={{ backgroundColor: "#4285F4" }}><img src="/icon/google.png" /></div>
            </div>
        </div>
    </div>
);

export const SelectMenu = ({ num, setNum }: { num: number, setNum: React.Dispatch<SetStateAction<number>> }) => {
    return (
        <div className={style.select_option}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div className={style.pip}><h2><LuPipette /></h2></div>
                <div style={{ marginLeft: "10px", color: "#2F2E32", marginRight: "10px" }}> | </div>
                <div className={style.tag} ><img src="/login/head0.png" style={{ marginRight: "5px" }} /> 머리스타일</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", marginTop: "20px", justifyContent: "center", gridColumnGap: "15px", gridRowGap: "20px" }}>
                <div className={style.pic}><img src="/login/head1.png" /></div>
                <div className={style.pic}><img src="/login/head2.png" /></div>
                <div className={style.pic}><img src="/login/head3.png" /></div>
                <div className={style.pic}><img src="/login/head4.png" /></div>
                <div className={style.pic}><img src="/login/head5.png" /></div>
                <div className={style.pic}><img src="/login/head6.png" /></div>
            </div>
            <div className={style.next_btn_} onClick={() => setNum(num + 1)}>
                이 캐릭터로 결정하기
            </div>
        </div>
    )
}