import { format } from 'date-fns'; // Assurez-vous d'installer date-fns

export const generateDateRangeObjects = (start, end) => {
  let currentDate = new Date(start);
  const dateArray = [];

  // Boucle pour générer chaque jour entre startDate et endDate
  while (currentDate <= new Date(end)) {
    // Formater la date dans l'objet désiré
    const dateObject = {
      day: format(currentDate, 'EEEE'), // Ex: "Monday"
      month: format(currentDate, 'MMMM'), // Ex: "September"
      ordinal: format(currentDate, 'do'), // Ex: "9th"
      dateFormatted: format(currentDate, 'yyyy-MM-dd'),
    };

    // Ajouter l'objet dans le tableau
    dateArray.push(dateObject);

    // Passer au jour suivant
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateArray;
};

// Exemple d'utilisation
const startDate = '2024-09-18';
const endDate = '2024-09-20';

const dateRangeObjects = generateDateRangeObjects(startDate, endDate);

export const groupActivitiesByDate = activities => {
  return activities.reduce((acc, activity) => {
    const date = activity.date.split('T')[0]; // Extraire la date sans l'heure
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(activity);
    return acc;
  }, {});
};

export const addActivitiesToDateList = (dateList, activities) => {
  // Regrouper les activités par date
  const groupedActivities = groupActivitiesByDate(activities);

  // Mettre à jour chaque date dans dateList avec les activités correspondantes
  return dateList.map(dateObj => ({
    ...dateObj,
    activities: groupedActivities[dateObj.dateFormatted] || [], // Ajouter les activités ou un tableau vide s'il n'y en a pas
  }));
};
