import { useState } from 'react';
import EventCalendar from "src/app/components/EventCalendar/EventCalendar";
import "./AdminHome.css";
import CreateEventForm from "src/app/components/CreateEventForm/CreateEventForm";
import { FormProvider, useForm } from 'react-hook-form';
import Navbar from 'src/app/components/Navbar/Navbar';


const AdminHome = () => {
  const method = useForm();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <FormProvider {...method}>
        <div id="admin-home" className="primary-bg">
          <div id="form-section">
            <CreateEventForm isEditing={isEditing} setIsEditing={setIsEditing}  />
          </div>
          <EventCalendar setIsEditing={setIsEditing} />
        </div>
      </FormProvider>
    </>
  )
}

export default AdminHome