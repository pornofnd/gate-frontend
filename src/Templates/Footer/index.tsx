import FooterSection from "Organisms/FooterSection";
import "./footer.scss";
import { data } from "./footer.data";
import img from "/public/img/Logo.svg";

export default function Footer() {
  return (
    <footer className="Footer">
      <section className="FooterLink">
        {data.map((elem) => (
          <FooterSection
            title={elem.title}
            firstRow={elem.firstRow}
            secondRow={elem.secondRow}
          />
        ))}
      </section>
      <section className="FooterContainer">
        <article className="FooterContainerlogoContainer">
          <img className="FooterContainerLogo" src={img} alt="" />
          <h1 className="FooterContainerTitle">
            P<p className="FooterContainerDot">.</p>Gate
          </h1>
        </article>
        <article className="FooterContainerDate">© 2024 P.Gate</article>
      </section>
    </footer>
  );
}
