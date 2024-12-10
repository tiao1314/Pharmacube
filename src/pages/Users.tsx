import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


const Users: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Users</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <p>List f users will go here.</p>
    </IonContent>
  </IonPage>
);

export default Users;
