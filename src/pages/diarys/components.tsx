import style from "./style.module.css";
import { LuChevronLeft } from "react-icons/lu";
import { LuBookmark } from "react-icons/lu";
import { LuCoins } from "react-icons/lu";


interface DataType {
    content: string,
    date: string,
    feel: number,
    title: string,
    weather: number
}

export const DiaryHeaderComponent = () => {
    return (
        <div className={style.header}>
            <h2 onClick={() => location.replace("/")}><LuChevronLeft /></h2>
            <h2>일기 모아보기</h2>
            <h2 style={{ opacity: 0 }}><LuChevronLeft /></h2>
        </div>
    )
}

const generateCalendar = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);

    const startDay = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();
    const lastDayOfPrevMonth = new Date(year, month - 1, 0).getDate();
    const calendar = [];

    for (let i = startDay - 1; i >= 0; i--) {
        calendar.push([lastDayOfPrevMonth - i, false]);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        calendar.push([i, true]);
    }

    let nextMonthDay = 1;
    while (calendar.length < 42) {
        calendar.push([nextMonthDay++, false]);
    }

    return calendar;
}


export const CalendarComponent = () => {
    var today = new Date();
    const data = generateCalendar();
    console.log(data)

    return (
        <div className={style.calendar}>
            <p>{today.getFullYear()}년 {today.getMonth() + 1}월</p>
            <div className={style.items}>
                <p>Su</p><p>Mo</p><p>Tu</p><p>We</p><p>Th</p><p>Fr</p><p>Sa</p>
                {
                    data.map((item, i) => {
                        return (
                            <div key={i} style={item[1] ? { color: "white" } : { color: "#6D6D6D" }}>{item[0]}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export const DiaryItemComponent = ({ item }: { item: DataType }) => {
    return (
        <div className={style.diarys} onClick={() => location.replace(`/diarys/view?date=${item.date}`)}>
            <div className={style.desc}>
                <div className={style.day}>{item.date.slice(6, 8)}일</div>
                <div className={style.title}>{item.title}</div>
                <div className={style.sub}>
                    <span><LuBookmark />보관</span>
                    <span style={{ marginLeft: "10px" }}><LuCoins />100</span>
                </div>
            </div>
            <img src={`/mood/${item.feel}.png`} style={{ height: "60px" }} />
        </div>
    )
}