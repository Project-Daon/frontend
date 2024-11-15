import { useState } from "react";
import style from "./style.module.css"
import { LuChevronLeft } from "react-icons/lu";
import { LuCamera } from "react-icons/lu";
import { AiFillAudio } from "react-icons/ai";

export const WritingHeaderComponent = () => {
    const [title, setTitle] = useState("");

    return (
        <div className={style.header}>
            <h2 onClick={() => location.replace("/diarys")}><LuChevronLeft /></h2>
            <div>
                <p className={style.title}>제목</p>
                <input placeholder="제목을 작성해주세요." value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
            </div>
            <h2 style={{ opacity: 0 }}><LuChevronLeft /></h2>
        </div>
    )
}

export const WritingSelectMood = () => {
    const arr = Array.from({ length: 8 }, () => null);
    const [click, setClick] = useState(0);
    return (
        <div className={style.mood}>
            <p>오늘의 기분을 골라주세요.</p>
            <div>
                { // @ts-ignore
                    arr.map((a, i) => {
                        return (
                            <img src={`/mood/${i + 1}.png`} onClick={() => setClick(i + 1)} style={(i + 1) === click ? { opacity: 1 } : {}} />
                        )
                    })
                }
            </div>
            <textarea placeholder="일기를 작성해 주세요." />
        </div>
    )
}

export const SaveComponent = () => {
    return (
        <div className={style.save}>
            <div style={{ display: "flex" }}>
                <h2>< LuCamera /></h2>
                <h2><AiFillAudio /></h2>
                <h2>저장하기</h2>
            </div>
        </div>
    )
}