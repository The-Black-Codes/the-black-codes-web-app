import { useEffect, useState } from 'react';
import EventCalendar from "src/app/components/EventCalendar/EventCalendar";
import "./AdminHome.css";
import CreateEventForm from "src/app/components/CreateEventForm/CreateEventForm";
import { CalendarEvent } from 'src/app/types/types';
import { collection, addDoc, deleteDoc, doc, updateDoc, getDocs } from 'firebase/firestore';
import { db } from '../../database/firebaseConfig.ts';


const AdminHome = () => {
  const [events, setEvents] = useState<CalendarEvent[]>();

  const convertEventDates = (events: CalendarEvent[]): (Omit<CalendarEvent, 'start' | 'end'> & { start: Date; end: Date })[] => {
    return events.map(event => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end)
    }));
  };

  const getAllEvents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'events'));
      const events: CalendarEvent[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<CalendarEvent, 'id'>)
      }));

      return convertEventDates(events); // or do something else with the data
    } catch (error) {
      console.error('Error getting events:', error);
    }
  };
  useEffect(() => {
    getAllEvents().then((data) => {
      console.log('events: ', data);
      setEvents(data);
    })
  }, []);

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