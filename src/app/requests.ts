import { getDocs, collection, deleteDoc, doc, updateDoc, addDoc } from 'firebase/firestore';
import { db } from './database/firebaseConfig';
import { CalendarEvent, EventFormInputs } from './types/types';

/**
 * 
 * @param events The events to convert
 * @returns 
 */
const convertEventDates = (
  events: CalendarEvent[]
): (Omit<CalendarEvent, 'start' | 'end'> & { start: Date; end: Date })[] => {
  return events.map((event) => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end),
  }));
};

/**
 * 
 * @returns All events from the database
 */
export const getAllEvents = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'events'));
    const events: CalendarEvent[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<CalendarEvent, 'id'>),
    }));

    return convertEventDates(events); // or do something else with the data
  } catch (error) {
    console.error('Error getting events:', error);
  }
};

/**
 * 
 * @param id The ID of the event to delete
 */
export const deleteEvent = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'events', id));
    console.log('Event deleted with ID: ', id);
  } catch (e) {
    console.error('Error deleting document: ', e);
  }
};

/**
 * Deletes all events from the database
 */
export const deleteAllEvents = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'events'));
    const events: CalendarEvent[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<CalendarEvent, 'id'>),
    }));
    events.forEach(async (event) => {
      await deleteDoc(doc(db, 'events', event.id));
    });
    console.log('All events were deleted');
  } catch (e) {
    console.error('Error deleting document: ', e);
  }
};

/**
 * 
 * @param data The event data to create
 */
export const editEvent = async (id: string, updatedData: Partial<EventFormInputs>) => {
  try {
    const eventRef = doc(db, 'events', id);
    await updateDoc(eventRef, updatedData);
    console.log('Event updated with ID: ', id);
  } catch (e) {
    console.error('Error updating document: ', e);
  }
};
