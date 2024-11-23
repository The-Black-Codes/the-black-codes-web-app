import { useEffect, useState } from 'react';
import EventCalendar from "src/app/components/EventCalendar/EventCalendar";
import "./AdminHome.css";
import CreateEventForm from "src/app/components/CreateEventForm/CreateEventForm";
import { CalendarEvent } from 'src/app/types/types';


const AdminHome = () => {
  const [events, setEvents] = useState<CalendarEvent[]>();

  

  return (
    <div id="admin-home" className="primary-bg">
      <div id="form-section">
        <CreateEventForm  setEvents={setEvents} />
      </div>
      <EventCalendar />
    </div>
  )
}

export default AdminHome