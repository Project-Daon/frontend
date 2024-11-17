import { useState } from "react";
import { SaveComponent, WritingHeaderComponent, WritingSelectMood } from "./components";

const DiaryWritingPage = () => {
    const [title, setTitle] = useState("");
    const [feel, setFeel] = useState(0);
    const [text, setText] = useState("");
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <SaveComponent title={title} text={text} feel={feel} weather={1} />
            <WritingHeaderComponent title={title} setTitle={setTitle} />
            <WritingSelectMood feel={feel} setFeel={setFeel} text={text} setText={setText} />
        </div>
    )
}

export default DiaryWritingPage;