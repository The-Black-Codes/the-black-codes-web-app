import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import './EventCalendar.scss';

const localizer = dayjsLocalizer(dayjs);

const myEventsList = [
  {
    title: 'Hackathon',
    allDay: false,
    start: new Date(2024, 10, 11, 10, 0),
    end: new Date(2024, 10, 11, 11, 0),
  },
  {
    title: 'Panel Discussion',
    allDay: false,
    start: new Date(2024, 10, 14, 10, 0),
    end: new Date(2024, 10, 14, 11, 0),
  },
  {
    title: 'Tech Brunch',
    allDay: false,
    start: new Date(2024, 10, 15, 10, 0),
    end: new Date(2024, 10, 15, 11, 0),
  },
  {
    title: 'Dinner',
    allDay: false,
    start: new Date(2024, 10, 16, 10, 0),
    end: new Date(2024, 10, 16, 11, 0),
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
      onSelectEvent={(event) => console.log(event)}
    />
  </div>
);

export default EventCalendar;
