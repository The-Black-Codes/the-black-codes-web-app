import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CalendarEvent } from 'src/app/types/types';
import { ModalProps } from 'src/app/types/types';
import { deleteEvent } from 'src/app/requests';
import { MyContext } from 'src/app/context/EventsProvider';
import { useFormContext } from 'react-hook-form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal: React.FC<ModalProps> = ({ event, open, setOpen, setIsEditing }) => {
  const { events, setEvents, setSelectedEvent } = useContext(MyContext);
  const { setValue } = useFormContext();
  const [deleteConfimation, setDeleteConfirmation] =
    React.useState<boolean>(false);
  
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    deleteEvent(event.id);
    setDeleteConfirmation(false);
    handleClose();
    const updatedEvents = events.filter((e) => e.id !== event.id);
    setEvents(updatedEvents);
  };

  const handleEdit = () => {
    if (setIsEditing) {
      setIsEditing(true);
    }
    handleClose();
    setSelectedEvent(event);
    // Iterates over the keys of the event object and 
    // sets the value of the input field with the same name as the key
    const inputs = document.getElementsByTagName('input');
    inputs[0].focus();
    Object.keys(event).forEach((key) => {
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name === key) {
          if (inputs[i].name === 'start' || inputs[i].name === 'end') { 
            // The value of the input field should be in the format 'YYYY-MM-DDTHH:MM'
            const date = new Date(event[key as keyof CalendarEvent] as string);
            const dateString = date.toISOString().slice(0, 16);
            setValue(key, dateString);
            inputs[i].value = dateString;
          } else {
            setValue(key, event[key as keyof CalendarEvent] as string);
            inputs[i].value = event[key as keyof CalendarEvent] as string;
          }
        }
      }
      const textArea = document.getElementsByTagName('textarea');
      setValue('description', event.description);
      textArea[0].value = event.description;
    });
  };


  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!deleteConfimation ? (
            <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {event.title}
            </Typography>
            <Typography>{`${event.start} to ${event.end}`}</Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {event.description}
            </Typography>
            <Button color={'primary'} onClick={handleEdit}>
              Edit
            </Button>
            <Button color={'error'} onClick={()=> setDeleteConfirmation(true)}>
              Delete
            </Button>
          </>
          ) : (
            <>
              <Typography>Are you sure you want to delete this event?</Typography>
              <Button color={'primary'} onClick={handleDelete}>
                Yes
              </Button>
              <Button color={'error'} onClick={()=> setDeleteConfirmation(false)}>
                No
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default BasicModal;
