import React, { useState } from 'react';
import { Calendar as CalendarIcon, Image, Type, FileText } from 'lucide-react';
import { Calendar, CalendarContent } from '../types/calendar';
import CalendarDay from './CalendarDay';

interface CalendarEditorProps {
  calendar: Calendar;
  onUpdate: (calendar: Calendar) => void;
}

function CalendarEditor({ calendar, onUpdate }: CalendarEditorProps) {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [title, setTitle] = useState(calendar.title);

  const handleDayUpdate = (day: number, content: CalendarContent) => {
    const updatedCalendar = {
      ...calendar,
      days: {
        ...calendar.days,
        [day]: content
      }
    };
    onUpdate(updatedCalendar);
  };

  const handleTitleUpdate = (newTitle: string) => {
    setTitle(newTitle);
    onUpdate({ ...calendar, title: newTitle });
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center space-x-4 mb-6">
          <CalendarIcon className="h-6 w-6 text-red-600" />
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleUpdate(e.target.value)}
            className="form-input flex-1 text-2xl font-bold"
            placeholder="Titre du calendrier"
          />
        </div>

        <div className="calendar-grid">
          {Array.from({ length: 24 }, (_, i) => i + 1).map((day) => (
            <CalendarDay
              key={day}
              day={day}
              isOpen={selectedDay === day}
              onToggle={() => setSelectedDay(selectedDay === day ? null : day)}
              content={calendar.days[day] || {
                image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543',
                title: 'Surprise !',
                text: 'Ajoutez votre contenu ici'
              }}
            />
          ))}
        </div>
      </div>

      {selectedDay && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Éditer le jour {selectedDay}
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <div className="flex items-center space-x-2">
                  <Image className="h-4 w-4" />
                  <span>Image URL</span>
                </div>
              </label>
              <input
                type="url"
                className="form-input"
                value={calendar.days[selectedDay]?.image || ''}
                onChange={(e) =>
                  handleDayUpdate(selectedDay, {
                    ...calendar.days[selectedDay],
                    image: e.target.value
                  })
                }
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <div className="flex items-center space-x-2">
                  <Type className="h-4 w-4" />
                  <span>Titre</span>
                </div>
              </label>
              <input
                type="text"
                className="form-input"
                value={calendar.days[selectedDay]?.title || ''}
                onChange={(e) =>
                  handleDayUpdate(selectedDay, {
                    ...calendar.days[selectedDay],
                    title: e.target.value
                  })
                }
                placeholder="Titre de la surprise"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Message</span>
                </div>
              </label>
              <textarea
                className="form-input"
                value={calendar.days[selectedDay]?.text || ''}
                onChange={(e) =>
                  handleDayUpdate(selectedDay, {
                    ...calendar.days[selectedDay],
                    text: e.target.value
                  })
                }
                placeholder="Votre message secret..."
                rows={3}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarEditor;