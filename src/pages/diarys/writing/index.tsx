import { SaveComponent, WritingHeaderComponent, WritingSelectMood } from "./components";

const DairyWritingPage = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <SaveComponent />
            <WritingHeaderComponent />
            <WritingSelectMood />
        </div>
    )
}

export default DairyWritingPage;