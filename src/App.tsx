// import { useEffect } from "react";
import "./App.css";
import { Router } from "./Pages/Router";
// import { miniApp, postEvent, retrieveLaunchParams } from "@telegram-apps/sdk";
// import { tmaAuth } from "components/TmaAuth";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  //   useEffect(() => {
  //     // Вызываем функцию для инициализации TMA авторизации если вход через TMA
  //     if (typeof window !== 'undefined' && window.location.href.includes('tgWebAppData')) {
  //       const launchParams = retrieveLaunchParams();
  //       if (launchParams?.initDataRaw) {
  //         miniApp.ready();
  //         postEvent('web_app_expand');
  //         tmaAuth(launchParams.initDataRaw);
  //       }
  //     }
  // }, []);
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
