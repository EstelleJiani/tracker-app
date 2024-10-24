import { createContext, useContext, useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { database } from '../firebase/firebaseConfig';
import { writeToDatabase } from '../firebase/firebaseHelper';

const DataContext = createContext();

// Data Provider
export const DataProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    const unsubscribeActivities = onSnapshot(
      collection(database, 'activities'),
      (snapshot) => {
        const activityDocs = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          date: doc.data().date.toDate()
        }));
        setActivities(activityDocs);
      }
    );

    // const unsubscribeDiets = onSnapshot(
    //   collection(database, 'diets'),
    //   (snapshot) => {
    //     const dietDocs = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    //     setDiets(dietDocs);
    //   }
    // );

    return () => {
      unsubscribeActivities();
      // unsubscribeDiets();
    };
  }, []);

  // Add Activity
  const addActivity = async (newActivity) => {
    try {
      await writeToDatabase('activities', newActivity);
    } catch (error) {
      console.error('Error adding activity: ', error);
    }
  };

  // Add Diet
  const addDiet = (newDiet) => {
    setDiets((prevDiets) => {
      const updatedDiets = [...prevDiets, newDiet];
      // Sort by date
      updatedDiets.sort((a, b) => b.date - a.date);
      return updatedDiets;
    });
  };

  return (
    <DataContext.Provider value={{ activities, diets, addActivity, addDiet }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);