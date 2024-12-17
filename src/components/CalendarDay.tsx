import React from 'react';

interface CalendarDayProps {
  day: number;
  isOpen: boolean;
  onToggle: () => void;
  content: {
    image: string;
    title: string;
    text: string;
  };
}

function CalendarDay({ day, isOpen, onToggle, content }: CalendarDayProps) {
  return (
    <div
      className={`calendar-day ${
        isOpen ? 'transform rotate-y-180' : ''
      }`}
      onClick={onToggle}
    >
      {!isOpen ? (
        <div className="h-full flex items-center justify-center">
          <span className="text-3xl font-bold text-red-600">{day}</span>
        </div>
      ) : (
        <div className="p-2 h-full flex flex-col">
          <img
            src={content.image}
            alt={content.title}
            className="w-full h-24 object-cover rounded-md"
          />
          <h3 className="text-sm font-semibold mt-2">{content.title}</h3>
          <p className="text-xs text-gray-600 mt-1">{content.text}</p>
        </div>
      )}
    </div>
  );
}

export default CalendarDay;