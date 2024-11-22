import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { db } from '../../database/firebaseConfig.ts';
import { collection, addDoc, deleteDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import './CreateEventForm.scss';
import { EventFormProps, EventFormInputs } from 'src/app/types/types.ts';

const CreateEventForm: React.FC<EventFormProps> = ({setEvents}) => {
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm<EventFormInputs>();

  const onSubmit = async (data: EventFormInputs) => {
    try {
      const docRef = await addDoc(collection(db, 'events'), data);
      console.log('Event created with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'events', id));
      console.log('Event deleted with ID: ', id);
    } catch (e) {
      console.error('Error deleting document: ', e);
    }
  };

  const editEvent = async (id: string, updatedData: Partial<EventFormInputs>) => {
    try {
      const eventRef = doc(db, 'events', id);
      await updateDoc(eventRef, updatedData);
      console.log('Event updated with ID: ', id);
    } catch (e) {
      console.error('Error updating document: ', e);
    }
  };

  return (
    <div id="form-container">
      <h1 className="secondary-header-font">Add a New Event to the Calendar</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-input">
          <TextField
            {...register('title', { required: 'Title is required' })}
            label="Event Title"
            variant="outlined"
            fullWidth
            error={!!errors.title}
            helperText={errors.title?.message}
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
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Create Event
        </Button>
      </form>
    </div>
  );
};

export default CreateEventForm;
