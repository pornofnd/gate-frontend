import HistoryImg from 'public/img/FooterModal/History.svg'
import HomeImg from "public/img/FooterModal/Home.svg"
import HistoryActiveImg from "public/img/FooterModal/HistoryActive.svg"
import HomeActiveImg from 'public/img/FooterModal/HomeActive.svg'
import SettingsImg from 'public/img/FooterModal/settings.svg'
import SettingsActiveImg from 'public/img/FooterModal/SettingActive.svg'
import { IItemFooterModal } from 'type/FooterModa'
export const data:IItemFooterModal[] = [
  {
    img: HomeImg,
    imgActive:HomeActiveImg,
    name: "Home",
  },
  {
    img: HistoryImg,
    imgActive:HistoryActiveImg,
    name: "History",
  },
  {
    img: SettingsImg,
    imgActive:SettingsActiveImg,
    name: "Settings",
  },
];
