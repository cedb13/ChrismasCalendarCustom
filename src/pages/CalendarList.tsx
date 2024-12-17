import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Share } from 'lucide-react';
import { Calendar as CalendarType } from '../types/calendar';

function CalendarList() {
  const navigate = useNavigate();
  const [calendars] = useState<CalendarType[]>([
    {
      id: '1',
      title: 'Calendrier Famille 2024',
      days: {},
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Calendrier Amis 2024',
      days: {},
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);

  const handleCalendarClick = (calendarId: string) => {
    navigate(`/calendars/${calendarId}`);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Mes calendriers
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calendars.map((calendar) => (
          <div
            key={calendar.id}
            onClick={() => handleCalendarClick(calendar.id)}
            className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <Calendar className="h-8 w-8 text-red-600" />
              <Share className="h-5 w-5 text-gray-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{calendar.title}</h2>
            <p className="text-sm text-gray-600">
              Créé le {new Date(calendar.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarList;