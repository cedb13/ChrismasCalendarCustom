import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Share2 } from 'lucide-react';
import CalendarDay from '../components/CalendarDay';

function CalendarView() {
  const { id } = useParams();
  const navigate = useNavigate();

  // TODO: Fetch calendar data based on id
  const calendar = {
    id,
    title: 'Calendrier Famille 2024',
    days: {},
  };

  const handleShare = () => {
    navigate(`/share/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <Calendar className="h-8 w-8 text-red-600" />
          <h1 className="text-3xl font-bold text-gray-800">{calendar.title}</h1>
        </div>
        <button
          onClick={handleShare}
          className="btn-primary flex items-center space-x-2"
        >
          <Share2 className="h-5 w-5" />
          <span>Partager</span>
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="calendar-grid">
          {Array.from({ length: 24 }, (_, i) => i + 1).map((day) => (
            <CalendarDay
              key={day}
              day={day}
              isOpen={false}
              onToggle={() => {}}
              content={{
                image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543',
                title: 'Surprise !',
                text: 'Contenu secret'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarView;