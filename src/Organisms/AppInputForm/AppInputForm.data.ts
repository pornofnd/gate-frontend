export const dataInput: IDataInputApp[] = [
  {
    name: "name",
    rules: {
      required: "Name required",
      minLength: { value: 2, message: "Minimum 2 characters" },
    },
    inputClass: "smallInputJar",
    placholderText: "Name store",
  },
  {
    name: "links",
    rules: {
      required: "Description required",
      minLength: { value: 5, message: "Minimum 5 characters" },
    },
    inputClass: "smallInputJar",
    placholderText: "Nickname in Telegram",
  },
  {
    name: "short_description",
    rules: {
      required: "Description required",
      minLength: { value: 5, message: "Minimum 5 characters" },
    },
    inputClass: "mediumInputJar",
    placholderText: "Short description",
  },
];
export interface IDataInputApp {
  name: "name" | "description" | "short_description" | "links";
  rules: any;
  inputClass: "smallInputJar" | "bigInputJar" | "mediumInputJar";
  placholderText: string;
}
export const dataInputAppTextArea: IDataInputApp = {
  name: "description",
  rules: {
    required: "Description required",
    minLength: { value: 5, message: "Minimum 5 characters" },
  },
  inputClass: "bigInputJar",
  placholderText: "Description 220 symbols",
};
