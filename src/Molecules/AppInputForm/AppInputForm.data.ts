export const dataInput: IDataInputApp[] = [
  {
    name: "name",
    rules: {
      required: "Name required",
      minLength: { value: 2, message: "Minimum 2 characters" },
    },
  },
  {
    name: "description",
    
    rules: {
      required: "Description required",
      minLength: { value: 5, message: "Minimum 5 characters" },
    },
  },
  {
    name: "short_description",
    rules: {
      required: "Description required",
      minLength: { value: 5, message: "Minimum 5 characters" },
    },
  },
  {
    name: "links",
    rules: {
      required: "Description required",
      minLength: { value: 5, message: "Minimum 5 characters" },
    },
  },
];
export interface IDataInputApp {
  name: "name" | "description" | "short_description" | "links";
  rules: any;
}