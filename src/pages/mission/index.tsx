import { MissionHeaderComponent, MissionTagComponent } from "./components"
import style from "./style.module.css"
const MissionPage = () => {
    return (
        <div>
            <MissionHeaderComponent />
            <MissionTagComponent />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "15px", padding: "20px" }}>
                <div className={style.item}>
                    <img src="/icon/book.png" style={{ opacity: "0.8", width: "70%" }} />
                    <div className={style.desc}>
                        <h4>매일 일기 쓰기</h4>
                        <h3>1000캐시 적립</h3>
                    </div>

                </div>
                <div className={style.item} style={{ backgroundColor: "#9BFFAD" }}>
                    <img src="/icon/cc.png" style={{ width: "70%" }} />
                    <div className={style.desc}>
                        <h4>서비스 가입하기</h4>
                        <h3>500캐시 적립</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MissionPage;