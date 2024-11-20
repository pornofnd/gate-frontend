import "./button.scss";
export default function Button({
  text,
  sizeClass,
}: {
  text: string;
  sizeClass: string;
}) {
  return <button className={` Button  ${sizeClass}`}>{text}</button>;
}
