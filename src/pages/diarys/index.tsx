// import { useEffect, useState } from "react";
import { CalendarComponent, DiaryHeaderComponent, DiaryItemComponent } from "./components";
// import { get_diary } from "../../utils/http";
// import { getCookie } from "../../utils/cookies";

const DiaryPage = () => {
    // const [data, setData] = useState();

    // useEffect(() => {
    //     const access_token = getCookie("access_token");
    //     const today = new Date();
    //     const year = today.getFullYear();
    //     const month = String(today.getMonth() + 1).padStart(2, '0');
    //     const day = String(today.getDate()).padStart(2, '0');

    //     get_diary(access_token, `${year}${month}${day}`)
    //         .then((result) => {

    //         })
    // }, [])
    return (
        <div>
            <DiaryHeaderComponent />
            <CalendarComponent />
            <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
                <DiaryItemComponent />
                <DiaryItemComponent />
                <DiaryItemComponent />
            </div>
        </div>
    )
}
export default DiaryPage;