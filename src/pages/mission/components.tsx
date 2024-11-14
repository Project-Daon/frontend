import { useState } from "react";
import style from "./style.module.css"
import { LuChevronLeft } from "react-icons/lu";

export const MissionHeaderComponent = () => {
    return (
        <div className={style.header}>
            <h2 onClick={() => location.replace("/")}><LuChevronLeft /></h2>
            <h2>미션</h2>
            <h2 style={{ opacity: 0 }}><LuChevronLeft /></h2>
        </div>
    )
}


export const MissionTagComponent = () => {
    const [select, setSelect] = useState(1);
    const tags = ["전체", "#스페셜", "#매일참여", "#광고"]
    return (
        <div className={style.mission_tags}>
            {
                tags.map((item, i) => {
                    return (
                        <span onClick={() => setSelect(i + 1)} key={i} style={(i + 1) == select ? { backgroundColor: "#CBBEFF", color: "black" } : {}}>{item}</span>
                    )
                })
            }
        </div>
    )
}

export const MissionItemcomponent = () => {
    return (
        <div className={style.item}>
            <img src="/icon/book.png" style={{ opacity: "0.8", width: "70%" }} />
            <div className={style.desc}>
                <h4>매일 일기 쓰기</h4>
                <h3>1000캐시 적립</h3>
            </div>

        </div>
    )
}