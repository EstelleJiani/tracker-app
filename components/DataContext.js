import { createContext, useState } from 'react';

export const DataContext = createContext();

// Data Provider
export const DataProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [diets, setDiets] = useState([]);

  // Add Activity
  const addActivity = (newActivity) => {
    setActivities((prevActivities) => {
      const updatedActivities = [...prevActivities, newActivity];
      // Sort by date
      updatedActivities.sort((a, b) => b.date - a.date);
      return updatedActivities;
  });
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