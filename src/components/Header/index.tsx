import React from "react";
import img from "/public/img/Logo.svg";
import "./header.scss";
import TelegramAuth from "components/TelegramAuth";
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
        \
        <TelegramAuth />
      </section>
    </header>
  );
}
