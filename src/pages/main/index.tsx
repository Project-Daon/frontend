import { MainCharacterComponent, MainDateComponent, MainDiaryComponent, MainHeaderComponent, MainTagsComponent } from "./components";
import style from "./style.module.css"

const MainPage = () => {
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