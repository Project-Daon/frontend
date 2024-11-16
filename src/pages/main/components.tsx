import style from "./style.module.css"
import { LuSettings, LuPencil } from "react-icons/lu";

export const MainHeaderComponent = ({ cash }: { cash: number }) => {
    return (
        <div className={style.header}>
            <div className={style.coin}  >
                <img src="/icon/coin.png" />
                <p>{cash}</p>
            </div>
            <div className={style.setting_icon}>
                <h2><LuSettings /></h2>
            </div>
        </div>
    )
}

export const MainTagsComponent = () => {
    const data = [
        {
            e: "diarys",
            k: "일기보기"
        },
        {
            e: "char",
            k: "캐릭터"
        },
        {
            e: "shop",
            k: "상점"
        },
        {
            e: "mission",
            k: "미션"
        },
        {
            e: "batge",
            k: "뱃지"
        },
        {
            e: "oto",
            k: "상담"
        },

    ]
    return (
        <div className={style.tags}>
            <div></div>
            {
                data.map((item, i) => {
                    return (
                        <div key={i} onClick={() => location.replace(`/${item.e}`)}>
                            <img src={`/icon/${item.e}.png`} />
                            <p>{item.k}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export const MainCharacterComponent = ({ nickname }: { nickname: string | null }) => {
    return (
        <div className={style.character}>
            <img className={style.c_img} src="/char/char1.png" />
            <div className={style.char_desc}>
                <h2>{nickname}</h2>
                <p className={style.lvl}>Lv. 1</p>
                <h2 className={style.nick_edit}><LuPencil /></h2>
            </div>
        </div>
    )
}


const number_day_to_string_day = (num: number) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"]
    return days[num];
}

const getDate = (): [number[][], number] => {
    let result = [];
    let today = new Date();

    for (let i = 3; i > 0; i--) {
        const d_today = new Date();
        d_today.setDate(today.getDate() - i);
        let date = d_today.getDate();
        let day = d_today.getDay();

        let data = [date, day];
        result.push(data);
    }
    for (let i = 0; i < 4; i++) {
        const d_today = new Date();
        d_today.setDate(today.getDate() + i);
        let date = d_today.getDate();
        let day = d_today.getDay();

        let data = [date, day];
        result.push(data);
    }
    return [result, today.getDate()];
}
export const MainDateComponent = () => {
    const [data, today] = getDate();
    return (
        <div className={style.date}>
            {
                data.map((item, i) => {
                    return (
                        <div key={i} className={today === item[0] ? `${style.date_item} ${style.select}` : style.date_item}>
                            <h3>{number_day_to_string_day(item[1])}</h3>
                            <h2>{item[0]}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}
const TextToDiv = ({ text }: { text: string }) => {
    const chars = text.split('');

    // 총 글자 수가 9의 배수가 되도록 공백 문자 추가
    while (chars.length % 9 !== 0) {
        chars.push('‎');
    }
    return (
        <div className={style.text_wrap}>
            {chars.map((char, index) => (
                <div key={index}>{char}</div>
            ))}
        </div>
    );
};

export const MainDiaryComponent = () => {
    return (
        <div className={style.diary} onClick={() => location.replace("/diarys/writing")}>
            <TextToDiv text="10월 12일." />
            <TextToDiv text="날씨: 맑음" />
            <TextToDiv text=" " />
            <TextToDiv text="일기를 써주세요." />
        </div>
    )
}