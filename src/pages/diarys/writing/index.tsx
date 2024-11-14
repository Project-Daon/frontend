import { SaveComponent, WritingHeaderComponent, WritingSelectMood } from "./components";

const DiaryWritingPage = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <SaveComponent />
            <WritingHeaderComponent />
            <WritingSelectMood />
        </div>
    )
}

export default DiaryWritingPage;