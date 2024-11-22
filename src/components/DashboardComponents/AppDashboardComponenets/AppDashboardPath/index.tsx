
import "./appDashboardPath.scss";
import { useNavHook } from "utils/navHook";
export default function AppDashboardPath() {
  const navigation = useNavHook();

  return (
    <section className="AppDashboardPath">
      <h1 onClick={() => navigation("/dashboard")} className="AppDashboardPathViolet">
        Steps
      </h1>{" "}
      <h1> / </h1>
      <h1>name</h1>
    </section>
  );
}
