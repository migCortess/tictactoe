import {useEffect } from "react";
import  {AppRoute}  from "./routes/AppRoute";



import {  
  IonApp,setupIonicReact } from "@ionic/react"


import "@ionic/react/css/core.css"

import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"
import { BrowserRouter } from "react-router-dom";
setupIonicReact();
const App = () => {

  useEffect(() => {
    (async () => {

    })();
  }, []);


  return (
    <>
    <IonApp className="full-screen bg-skin-mainBG">
      <BrowserRouter >
        <AppRoute/>
      </BrowserRouter>
    </IonApp>
    </>
  )
}

export default App

