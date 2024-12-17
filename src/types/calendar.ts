export interface CalendarContent {
  image: string;
  title: string;
  text: string;
}

export interface Calendar {
  id: string;
  title: string;
  days: Record<number, CalendarContent>;
  createdAt: string;
  updatedAt: string;
}

export type CalendarFormData = Omit<Calendar, 'id' | 'createdAt' | 'updatedAt'>;