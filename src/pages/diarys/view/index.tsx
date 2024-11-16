import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { get_diary } from "../../../utils/http";
import { getCookie } from "../../../utils/cookies";
import { ViewHeaderComponent } from "./components";
import style from "./style.module.css";


interface DataType {
    content: string,
    date: string,
    feel: number,
    status: number,
    title: string,
    weather: number
}

const DiaryViewPage = () => {
    //@ts-ignore
    const [params, setParams] = useSearchParams();
    const date = params.get("date");
    const [data, setData] = useState<DataType>();

    useEffect(() => {
        const token = getCookie("access_token");
        if (date === null) {
            alert("잘못된 접근");
            location.replace("/");
        } else {
            get_diary(token, date)
                .then((result) => setData(result))
                //@ts-ignore
                .catch((error) => console.log("api 에러"))
        }
    }, [])

    return (
        data === undefined ? null : <div>
            <ViewHeaderComponent title={data.title} feel={data.feel} />
            <div className={style.view}>
                {data.content}
            </div>
        </div>
    )
}
export default DiaryViewPage;