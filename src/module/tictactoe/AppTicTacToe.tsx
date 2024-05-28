import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter } from "@ionic/react";
import { AppRoute } from "./routes/AppRoute";
import './index.css'

export const AppTicTacToe = () => {
    return (
        <IonPage>
          <IonHeader class="ion-no-border">
            <IonToolbar color="favorite">
              <IonTitle class="text-3xl text-center font-bold">Tic tac toe</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <AppRoute />
          </IonContent>
          <IonFooter>
            <IonToolbar>
              {/* <NavMenu /> */}
            </IonToolbar>
          </IonFooter>
        </IonPage>
      );
}
