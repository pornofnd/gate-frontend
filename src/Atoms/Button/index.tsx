import "./button.scss";
export default function Button({
  text,
  sizeClass,
  func,
  type = "button",
}: {
  text: string;
  sizeClass: string;
  func?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <button onClick={func} className={` Button  ${sizeClass}`} type={type}>
      {text}
    </button>
  );
}
