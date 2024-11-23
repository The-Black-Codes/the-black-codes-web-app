// src/contexts/MyContext.js
import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { CalendarEvent } from '../types/types';
import { getAllEvents } from '../requests';

// Define the context type
interface MyContextType {
  events: CalendarEvent[];
  setEvents: React.Dispatch<React.SetStateAction<CalendarEvent[]>>;
}

// Create the context with a default value
const MyContext = createContext<MyContextType>(null!);

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    getAllEvents().then((data) => {
      if (data) {
        setEvents(data);
      }
    })
  }, []);
  
  return (
    <MyContext.Provider value={{ events, setEvents }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };