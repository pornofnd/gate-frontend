import "./appDashboardPath.scss";
import { useNavHook } from "utils/navHook";
export default function AppDashboardPath({
  domenPath,
  link,
  name,
}: {
  domenPath: string;
  link?: string;
}) {
  const navigation = useNavHook();

  return (
    <section className="AppDashboardPath">
      <p
        onClick={() => navigation(`/${link}`)}
        className="AppDashboardPathViolet"
      >
        {domenPath}
      </p>{" "}
      <p> / </p>
      <p>name</p>
    </section>
  );
}
