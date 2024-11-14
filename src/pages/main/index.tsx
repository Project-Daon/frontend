import { MainCharacterComponent, MainDateComponent, MainDiaryComponent, MainHeaderComponent, MainTagsComponent } from "./components";

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