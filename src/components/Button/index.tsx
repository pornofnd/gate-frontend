import "./button.scss";
export default function Button({
  text,
  sizeClass,
  func,
}: {
  text: string;
  sizeClass: string;
  func?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return <button onClick={func } className={` Button  ${sizeClass}`}>{text}</button>;
}
