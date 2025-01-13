import React, { useEffect, useState } from "react";
import axios from "axios";
import 'dotenv/config';

const EVENTBRITE_API_TOKEN = process.env.NX_PUBLIC_EVENT_BRITE_API_KEY;
const BASE_URL = "https://www.eventbriteapi.com/v3/";

interface Event {
  id: string;
  name: {
    text: string;
  };
  start: {
    local: string;
  };
  end: {
    local: string;
  };
}

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${BASE_URL}users/me/events/`, {
          headers: {
            Authorization: `Bearer ${EVENTBRITE_API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        setEvents(response.data.events || []);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Event List</h1>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h2>{event.name.text}</h2>
              <p>
                Start: {new Date(event.start.local).toLocaleString()} <br />
                End: {new Date(event.end.local).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};

export default EventList;
