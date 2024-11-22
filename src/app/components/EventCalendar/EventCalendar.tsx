import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import './EventCalendar.scss';
import { CalendarEvent, CalendarProps } from 'src/app/types/types';
import { useEffect, useState } from 'react';

const localizer = dayjsLocalizer(dayjs);

const EventCalendar: React.FC<CalendarProps> = () => {
  const [events, setEvents] = useState<CalendarEvent[]>();
  
  return (
  <div className="event-calendar-container">
    <h1 className="text-white primary-header-font">Event Calendar</h1>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      onSelectEvent={(event: any) => console.log(event)}
    />
  </div>
  )
};

export default EventCalendar;
