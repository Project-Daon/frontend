import { useEffect, useState } from "react";
import { CalendarComponent, DiaryHeaderComponent, DiaryItemComponent } from "./components";
import { get_diary } from "../../utils/http";
import { getCookie } from "../../utils/cookies";


interface DataType {
    content: string,
    date: string,
    feel: number,
    title: string,
    weather: number
}

const DiaryPage = () => {
    const [data, setData] = useState<DataType[]>();

    useEffect(() => {
        const access_token = getCookie("access_token");
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');

        get_diary(access_token, `${year}${month}`)
            .then((result) => {
                setData(result.results);
            })
    }, [])
    return (
        <div>
            <DiaryHeaderComponent />
            <CalendarComponent />
            <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
                {
                    data?.map((item) => {
                        return (
                            <DiaryItemComponent item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default DiaryPage;