import "./headerModal.scss"
import trust from '/img/Modal/trust.svg'
import vector  from '/img/Modal/Vector.svg'
export default function HeaderModal() {
  return (
    <header className="HeaderModal">
        <section className="HeaderModalContainer">
        <article className="HeaderModalContainerTitle">
        <img src={trust} alt="" />
        <h1 >Select a wallet</h1>
        </article>
        <article className="HeaderModalContainerImg">
        <img src={vector} alt="" /></article>
        </section>
    </header>
  )
}
