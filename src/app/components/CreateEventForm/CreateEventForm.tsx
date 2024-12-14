import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import './CreateEventForm.scss';
import { EventFormInputs, EventFormProps } from 'src/app/types/types.ts';
import MobileView from './Views/MobileView';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from 'src/app/database/firebaseConfig';
import { getAllEvents } from 'src/app/requests';
import { MyContext } from 'src/app/context/EventsProvider';

const CreateEventForm: React.FC<EventFormProps> = ({isEditing, setIsEditing}) => {
  const [mobileView, setMobileView] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<EventFormInputs>();
  const { setEvents, selectedEvent } = useContext(MyContext);
  const { reset } = useForm<EventFormInputs>();

  const createEvent = async (data: EventFormInputs) => {
    try {
      const docRef = await addDoc(collection(db, 'events'), data);
      console.log('Event created with ID: ', docRef.id);
      getAllEvents().then((events) => {
        if (events) {
          setEvents(events);
          reset();
        } else {
          console.error('Failed to fetch events');
        }
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  
  const updateEvent = async (data: EventFormInputs) => {
    getAllEvents().then(async (events) => {
      if (events) {
        const updatedEventId = events.find((event) => event.title === selectedEvent?.title)?.id;
        if (updatedEventId) {
          await updateDoc(doc(db, 'events', updatedEventId), { ...data });
          getAllEvents().then((events) => {
            if (events) {
              setEvents(events);
              reset();
            } else {
              console.error('Failed to fetch events to update');
            }
          });
          if (isEditing && setIsEditing) {
            setIsEditing(false);
          }
        } else {
          console.error('No event found with the given title');
        }
      }
    });
  }
  
  const createOrUpdate = (data: EventFormInputs) => {
    if (isEditing) {
      updateEvent(data);
    } else {
      createEvent(data);
    }
  }

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 768
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  
  return (
    <>
    { mobileView ? 
      (<MobileView isEditing={isEditing} setIsEditing={setIsEditing} createOrUpdate={createOrUpdate} />) 
      : (
        <div id="form-container">
        <h1 className="secondary-header-font">Add a New Event to the Calendar</h1>
        <form onSubmit={handleSubmit(createOrUpdate)}>
          <div className="text-input">
            <TextField
              {...register('title', { required: 'Title is required' })}
              label="Event Title"
              variant="outlined"
              fullWidth
              error={!!errors.title}
              helperText={errors.title?.message}
              name='title'
            />
          </div>
            <div className="times">
              <TextField
                {...register('start', { required: 'Start time is required' })}
                label="Start Time"
                type="datetime-local"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                error={!!errors.start}
                helperText={errors.start?.message}
                className="time"
                name='start'
              />
              <TextField
                {...register('end', { required: 'End time is required' })}
                label="End Time"
                type="datetime-local"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                error={!!errors.end}
                helperText={errors.end?.message}
                className="time"
                name='end'
              />
            </div>
          <div className="text-input">
            <TextField
              {...register('description')}
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name='description'
            />
          </div>
          {isEditing ? (
            <Button type="submit" variant="contained" color="primary">
              Update Event
            </Button>
          ) : (
          <Button type="submit" variant="contained" color="primary">
            Create Event
          </Button>
          )}
        </form>
        </div>
      )
    }
    </>
  );
};

export default CreateEventForm;
