import { windowStateActions } from "store/reducer/stateModal";
import "./headerAuthUser.scss"
import { useDispatch } from "react-redux";

export default function HeaderAuthUser() {
    const dispatch = useDispatch();
    const openHandler=()=>{
        dispatch(windowStateActions.authWindow());
    }
  return (
    <article className="HeaderUser">
        <button></button>
        <section className="HeaderUserProfile" onClick={openHandler}></section>
        <button></button>
    </article>
  )
}
