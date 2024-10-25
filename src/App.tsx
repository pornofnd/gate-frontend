import { useEffect } from "react";
import "./App.css";
import { Layout } from "./components/layout";
import { Router } from "./components/Router";
import { miniApp, postEvent, retrieveLaunchParams } from "@telegram-apps/sdk";
import { tmaAuth } from "components/TmaAuth";

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
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;

