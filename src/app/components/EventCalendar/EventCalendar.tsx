import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import './EventCalendar.scss';
import { CalendarEvent, CalendarProps } from 'src/app/types/types';
import { useContext, useState } from 'react';
import { MyContext } from 'src/app/context/EventsProvider.tsx';
import BasicModal from '../Modal/Modal';
import React from 'react';

const localizer = dayjsLocalizer(dayjs);

const EventCalendar: React.FC<CalendarProps> = ({setIsEditing}) => {
  const { events, selectedEvent, setSelectedEvent } = useContext(MyContext);
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => setOpen(!open);
  const handleSelectEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
    toggleOpen();
  };

  return (
    <div className="event-calendar-container">
      <h1 className="text-white primary-header-font">Event Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
      />
      {selectedEvent && <BasicModal event={selectedEvent} open={open} setOpen={setOpen} setIsEditing={setIsEditing} />}
    </div>
  );
};

export default EventCalendar;
