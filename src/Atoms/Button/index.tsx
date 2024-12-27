import "./button.scss";
export default function Button({
  text,
  sizeClass,
  colorClass="ButtonDefaultColor",
  func,
  type = "button",
}: {
  text: string;
  sizeClass: string;
  colorClass?: string;
  func?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <button onClick={func} className={` Button  ${sizeClass} ${colorClass}`} type={type}>
      {text}
    </button>
  );
}
