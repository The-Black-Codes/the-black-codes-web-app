export interface EventFormInputs {
  title: string;
  start: Date;
  end: Date;
  description: string;
}

export interface EventFormProps {
  setEvents: React.Dispatch<React.SetStateAction<CalendarEvent[] | undefined>>;
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description: string;
}

export interface CalendarProps {
    events?: CalendarEvent[] | undefined
}