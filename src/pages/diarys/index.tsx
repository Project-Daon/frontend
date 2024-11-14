import { CalendarComponent, DiaryHeaderComponent, DiaryItemComponent } from "./components";

const DiaryPage = () => {
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