import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import './EventCalendar.scss';

const localizer = dayjsLocalizer(dayjs);

const myEventsList = [
  {
    title: 'Hackathon',
    allDay: false,
    start: new Date(2024, 4, 4, 10, 0),
    end: new Date(2024, 4, 4, 11, 0),
  },
  {
    title: 'Panel Discussion',
    allDay: false,
    start: new Date(2024, 4, 11, 11, 0),
    end: new Date(2024, 4, 11, 13, 0),
  },
  {
    title: 'Tech Brunch',
    allDay: false,
    start: new Date(2024, 4, 15, 10, 0),
    end: new Date(2024, 4, 15, 12, 0),
  },
  {
    title: 'Dinner',
    allDay: false,
    start: new Date(2024, 4, 23, 17, 0),
    end: new Date(2024, 4, 23, 20, 0),
  },
];

const EventCalendar = () => (
  <div className="event-calendar-container">
    <h1 className="text-white primary-header-font">Event Calendar</h1>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
);

export default EventCalendar;
