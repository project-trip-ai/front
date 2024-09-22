import Image from 'next/image';
import Button from '../../Button';
import TrashIcon from '@/../../public/icons/trash.svg';
import DotsIcon from '@/../../public/icons/dots-vertical.svg';
import { useUser } from '@/context/UserContext';
import { useState } from 'react';
import { updateActivity } from '@/api';

const ActivityCard = ({
  activity,
  adress,
  onHover,
  handleDelete,
  itineraryUserId,
}) => {
  const { user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour extraire l'heure au format HH:MM de la date ISO
  const getTimeFromISO = isoString => {
    if (isoString) {
      const date = new Date(isoString);
      return date.toISOString().substring(11, 16);
    }
    return ''; // Retourne une chaîne vide si aucune heure n'est fournie
  };

  const [formattedStarttime, setFormattedStarttime] = useState(
    getTimeFromISO(activity.startTime),
  );
  const [formattedEndtime, setFormattedEndtime] = useState(
    getTimeFromISO(activity.endTime),
  );

  const [tempStartTime, setTempStartTime] = useState(formattedStarttime);
  const [tempEndTime, setTempEndTime] = useState(formattedEndtime);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'startTime') {
      setTempStartTime(value);
    } else if (name === 'endTime') {
      setTempEndTime(value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Créez les nouvelles heures au format long
    const newStartTime = tempStartTime
      ? new Date(
          `${activity.date.split('T')[0]}T${tempStartTime}:00Z`,
        ).toISOString()
      : null;

    const newEndTime = tempEndTime
      ? new Date(
          `${activity.date.split('T')[0]}T${tempEndTime}:00Z`,
        ).toISOString()
      : null;

    // Mettez à jour les états de format court
    setFormattedStarttime(tempStartTime);
    setFormattedEndtime(tempEndTime);

    try {
      // Mettez à jour formData avec les nouvelles valeurs au format long
      const dataToSend = {
        ...activity,
        startTime: newStartTime,
        endTime: newEndTime,
        token: user.token, // Ajoutez le token
      };

      // Appel API pour mettre à jour l'activité
      const data = await updateActivity(dataToSend);

      if (data.error) {
        console.error('Erreur API : ', data.error);
      } else {
        console.log('Activité mise à jour avec succès:', data);
      }
    } catch (err) {
      console.error("Erreur lors de la mise à jour de l'activité :", err);
    }

    closeModal();
  };

  return (
    <>
      <div className="flex w-full h-24">
        <div
          className="flex w-full p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-300"
          onMouseOver={onHover}>
          {activity.image ? (
            <Image
              priority
              src={activity.image}
              height={70}
              width={70}
              className="rounded-lg shadow-sm"
              alt={activity.name}
            />
          ) : (
            <div className="w-[70px] h-[70px] rounded-lg bg-gray-300 shadow-sm"></div>
          )}

          <div className="ml-3">
            <p>{activity.name}</p>
            <div className="flex mt-2 items-center">
              {formattedStarttime && formattedEndtime ? (
                <Button
                  buttonStyle={
                    'border border-gray-300 text-gray-500 text-xs rounded-xl bg-white'
                  }
                  onClick={openModal}>
                  {formattedStarttime} - {formattedEndtime}
                </Button>
              ) : (
                <Button
                  buttonStyle={
                    'border border-gray-300 text-gray-500 text-xs rounded-xl bg-white'
                  }
                  onClick={openModal}>
                  Set Time
                </Button>
              )}
            </div>
          </div>
        </div>
        {user && user.id === itineraryUserId ? (
          <div className="pl-1">
            <Button
              buttonStyle={
                'rounded-lg bg-white hover:bg-gray-100 active:bg-gray-200'
              }
              padding="p-2">
              <Image
                priority
                src={DotsIcon}
                alt="Drag and drop"
                height={16}
                width={16}
              />
            </Button>
            <Button
              buttonStyle={
                'rounded-lg bg-white hover:bg-red-100 active:bg-red-200'
              }
              padding="p-2">
              <Image
                priority
                src={TrashIcon}
                alt="Delete"
                height={16}
                width={16}
                onClick={handleDelete}
              />
            </Button>
          </div>
        ) : null}
      </div>
      {isModalOpen && user.id === itineraryUserId?(
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal}></div>
          <div className="bg-white p-6 rounded-lg w-full max-w-md z-50">
            <h2 className="text-xl font-light text-gray-900 mb-4">
              Edit Time for {activity.name}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex mb-4 space-x-2 items-center justify-center">
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  value={tempStartTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <p>:</p>
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  value={tempEndTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>,
      ):<></>}
    </>
  );
};

export default ActivityCard;
