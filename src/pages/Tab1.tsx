import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonCard, IonList, IonItem, IonLabel, IonSearchbar } from '@ionic/react';
import './Tab1.css'; // Import external CSS

const Tab1 = () => { 
  return (
    <div className="tab1-container">
      <IonHeader className="ion-header">
        <IonToolbar>
          <IonTitle>Search</IonTitle>
          <div className="header-notifications"></div> {/* Notification Icon */}
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {/* Search Bar */}
        <IonSearchbar 
          debounce={0} 
          placeholder="Search for Medications" 
          className="search-bar" 
        />

        {/* User and Medication Details */}
        <IonCard className="user-medication-card">
          <IonItem>
            <IonLabel className="ion-label">User: Tiao</IonLabel> 
          </IonItem>
          <IonItem>
            <IonLabel className="ion-label">Medication: Le</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel className="ion-label">Count:</IonLabel>
            <IonLabel>Lenvima, Lenvatinib, Levalidomide, Letrozale</IonLabel>
          </IonItem>
        </IonCard>

        {/* Medication List */}
        <IonCard className="medication-list-card">
          <IonItem>
            <IonLabel className="ion-label">List of meds / amounts</IonLabel>
          </IonItem>
          <IonList>
            <IonItem>
              <IonLabel>Lexapro 2x</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Protamine 4x</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Zavciefa 10x</IonLabel>
            </IonItem>
          </IonList>
        </IonCard>

        {/* Submit Button */}
        <IonButton expand="full" className="submit-button">
          Submit
        </IonButton>
      </IonContent>
    </div>
  );
};

export default Tab1;
