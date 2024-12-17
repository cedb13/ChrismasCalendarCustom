import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from '../types/calendar';
import CalendarEditor from '../components/CalendarEditor';

function CreateCalendar() {
  const navigate = useNavigate();
  const [calendar, setCalendar] = useState<Calendar>({
    id: crypto.randomUUID(),
    title: 'Mon Calendrier de l\'Avent',
    days: {},
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const handleSave = () => {
    // TODO: Implement calendar saving logic
    navigate('/share');
  };

  const handlePreview = () => {
    // TODO: Implement preview logic
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Créer un nouveau calendrier
        </h1>
        <div className="space-x-4">
          <button
            onClick={handlePreview}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Prévisualiser
          </button>
          <button onClick={handleSave} className="btn-primary">
            Enregistrer
          </button>
        </div>
      </div>

      <CalendarEditor calendar={calendar} onUpdate={setCalendar} />
    </div>
  );
}

export default CreateCalendar;