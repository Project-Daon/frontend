import { useState } from "react";
import style from "./style.module.css";

const EditPage = () => {
    const dummydata = "엄지척도하니"
    const [name, setName] = useState(dummydata);

    return (
        <div className={style.edit}>
            <h2>캐릭터의 이름을 수정해주세요.</h2>
            <p>캐릭터의 이름은 언제든지 변경이 가능해요.</p>

            <input value={name} onChange={(t) => setName(t.target.value)} placeholder="닉네임을 설정해주세요!" />
            <div className={style.btn}>변경 완료</div>
        </div>
    )
}

export default EditPage;