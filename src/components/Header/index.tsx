import img from "/public/img/Logo.svg";
import "./header.scss";
import TelegramAuth from "components/TelegramAuth";
// import telegramAIcon from "public/img/Telegram_2019_Logo.svg"
export default function Header() {
  return (
    <header className="header">
      <section className="logoContainer">
        <img className="headerLogo" src={img} alt="" />
        <h1 className="headerTitle">
          P<p className="headerDot">.</p>Gate
        </h1>
      </section>
      <section>
        {/* <article className="logoTg">
          <h1>log in</h1>
          <img src={telegramAIcon} alt="" />
        </article> */}
        <TelegramAuth />
      </section>
    </header>
  );
}
