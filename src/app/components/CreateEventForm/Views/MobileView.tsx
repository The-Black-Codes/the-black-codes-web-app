import React from 'react'
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { EventFormInputs, EventFormProps } from 'src/app/types/types.ts';
import './MobileView.css';

const MobileView: React.FC<EventFormProps & {createOrUpdate: (data: EventFormInputs) => void}> = ({isEditing, setIsEditing, createOrUpdate}) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<EventFormInputs>();

  return (
    <div id="mobile-form-container">
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
          <div className="mobile-times">
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
              {...register('location', { required: 'Location is required' })}
              label="Location"
              variant="outlined"
              fullWidth
              error={!!errors.location}
              helperText={errors.location?.message}
              name='location'
            />
          </div>
          <div className="text-input">
            <TextField
              {...register('eventLink')}
              label="Eventbrite Link"
              variant="outlined"
              fullWidth
              error={!!errors.eventLink}
              helperText={errors.eventLink?.message}
              name='eventLink'
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

export default MobileView