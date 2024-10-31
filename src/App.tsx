import { useEffect } from "react";
import "./App.css";
import { Layout } from "./layout";
import { Router } from "./Router";
import { miniApp, postEvent, retrieveLaunchParams } from "@telegram-apps/sdk";
import { tmaAuth } from "components/TmaAuth";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {

  useEffect(() => {
    // Вызываем функцию для инициализации TMA авторизации если вход через TMA
    if (typeof window !== 'undefined' && window.location.href.includes('tgWebAppData')) {
      const launchParams = retrieveLaunchParams();
      if (launchParams?.initDataRaw) {
        miniApp.ready();
        postEvent('web_app_expand');
        tmaAuth(launchParams.initDataRaw);
      }
    }
}, []);  
  return (
    <Provider store={store}>
    <Layout>
      <Router />
    </Layout></Provider>
  );
}

export default App;

