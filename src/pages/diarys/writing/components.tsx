import React, { useState } from "react";
import style from "./style.module.css"
import { LuChevronLeft } from "react-icons/lu";
import { LuCamera } from "react-icons/lu";
import { AiFillAudio } from "react-icons/ai";
import { writing_diary } from "../../../utils/http";
import { getCookie } from "../../../utils/cookies";

export const WritingHeaderComponent = ({ title, setTitle }: { title: string, setTitle: React.Dispatch<React.SetStateAction<string>> }) => {
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

export const WritingSelectMood = ({ feel, setFeel, text, setText }: { feel: number, setFeel: React.Dispatch<React.SetStateAction<number>>, text: string, setText: React.Dispatch<React.SetStateAction<string>> }) => {
    const arr = Array.from({ length: 8 }, () => null);
    return (
        <div className={style.mood}>
            <p>오늘의 기분을 골라주세요.</p>
            <div>
                { // @ts-ignore
                    arr.map((a, i) => {
                        return (
                            <img src={`/mood/${i + 1}.png`} onClick={() => setFeel(i + 1)} style={(i + 1) === feel ? { opacity: 1 } : {}} />
                        )
                    })
                }
            </div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="일기를 작성해 주세요." />
        </div>
    )
}

export const SaveComponent = ({ title, text, feel, weather }: { title: string, text: string, feel: number, weather: number }) => {
    const token = getCookie("access_token");
    const [is_save, setIsSave] = useState(false);
    return (
        <div className={style.save}>
            <div style={{ display: "flex" }}>
                <h2>< LuCamera /></h2>
                <h2><AiFillAudio /></h2>
                <h2 onClick={() => {
                    setIsSave(!is_save)
                    writing_diary(token, title, text, feel, weather).then(() => {
                        alert("저장이 완료되었습니다.");
                        location.replace("/")

                    }).catch(() => { setIsSave(false); alert("오류가 발생했습니다. 다시 시도해주세요."); })
                }}>{is_save ? <>저장중...</> : <>저장하기</>}</h2>
            </div>
        </div >
    )
}