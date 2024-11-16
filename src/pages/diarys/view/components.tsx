import { LuChevronLeft } from "react-icons/lu";
import style from "./style.module.css"

export const ViewHeaderComponent = ({ title, feel }: { title: string, feel: number }) => {
    return (
        <div className={style.header}>
            <h2 onClick={() => location.replace("/diarys")}><LuChevronLeft /></h2>
            <div>
                <p className={style.title}>제목</p>
                <h2>{title}</h2>
            </div>
            <img src={`/mood/${feel}.png`} />
        </div>
    )
}