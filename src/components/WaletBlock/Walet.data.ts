interface IDataWallet {
  title: string;
  payMethod: string;
  raiting: number;
  platform: string[];
  img: string;
}

export const data: IDataWallet[] = [
  {
    title: "Ton Wallet Pro",
    payMethod: "Free",
    raiting: 5,
    platform: ["iOS", "Android", "Telegram", " Web"],
    img: "",
  },
];
