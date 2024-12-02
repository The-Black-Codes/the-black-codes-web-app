import { useEffect, useState } from 'react';
import EventCalendar from "src/app/components/EventCalendar/EventCalendar";
import "./AdminHome.css";
import CreateEventForm from "src/app/components/CreateEventForm/CreateEventForm";
import { CalendarEvent } from 'src/app/types/types';
import { FormProvider, useForm } from 'react-hook-form';

const AdminHome = () => {
  const method = useForm();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <FormProvider {...method}>
      <div id="admin-home" className="primary-bg">
        <div id="form-section">
          <CreateEventForm isEditing={isEditing} setIsEditing={setIsEditing}  />
        </div>
        <EventCalendar setIsEditing={setIsEditing} />
      </div>
    </FormProvider>
  )
}

export default AdminHome