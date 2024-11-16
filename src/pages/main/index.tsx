import { MainCharacterComponent, MainDateComponent, MainDiaryComponent, MainHeaderComponent, MainTagsComponent } from "./components";
import { useEffect, useState } from "react";
import { getCookie } from "../../utils/cookies";
import { get_userdata } from "../../utils/http";

interface DataType {
    cash: number,
    disable: boolean,
    email: string,
    id: string,
    nickname: string,
    provider: string,
    username: string
}

const MainPage = () => {
    const [data, setData] = useState<DataType>();

    useEffect(() => {
        const access_token = getCookie("access_token");
        get_userdata(access_token)
            .then((result) => {
                setData(result);
            })
            //@ts-ignore
            .catch((error) => {
                location.replace("/login")
            })

    }, [])

    return (
        data === undefined ? null : <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
            <MainHeaderComponent cash={data.cash} />
            <MainTagsComponent />
            <MainCharacterComponent nickname={data.nickname} />
            <MainDateComponent />
            <MainDiaryComponent />
        </div>
    )
}

export default MainPage;