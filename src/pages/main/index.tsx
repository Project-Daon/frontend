import { MainCharacterComponent, MainDateComponent, MainDiaryComponent, MainHeaderComponent, MainTagsComponent } from "./components";
import { useEffect } from "react"
import { getCookie } from "../../utils/cookies"
import axios from "axios"
import { apihost } from "../../utils/host"

const MainPage = () => {

    useEffect(() => {
        const token = getCookie("access_token");

        axios.get(apihost + "/users/@me", {
            headers: {
                "Authorization Bearer": token
            },
            withCredentials: true
        }).catch(() => {
            location.replace("/login") // 200이 아니라면 로그인 페이지로 이동
        }).then(() => {

        })

    }, [])

    return (
        <div>
            <MainHeaderComponent />
            <MainTagsComponent />
            <MainCharacterComponent />
            <MainDateComponent />
            <MainDiaryComponent />
        </div>
    )
}

export default MainPage;