import arrowDown from "/img/Dashboard/arrow-path.svg";
import arrow1 from "/img/Dashboard/arrow-up-right.svg";
import arrow2 from "/img/Dashboard/arrow-up-right@2x.svg";
import plusImg from "/img/Dashboard/Plus-smoll.svg";
export const FirstData: IDataDashboardCradBalance[] = [
  { img: arrow1 },
  { img: arrow2 },
  { img: arrowDown },
];
export const SecondData: IDataDashboardCradBalance[] = [
  { img: arrow1 },
  { img: arrow2 },
  { img: arrowDown },
  { img: plusImg,title:"New Jar" },
];
export interface IDataDashboardCradBalance {
  img: string;
  title?: string;
}
