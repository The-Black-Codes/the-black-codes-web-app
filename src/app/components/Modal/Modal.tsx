import { useState } from 'react';
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
import './Modal.css';

const tbcLogoPic = require('../../../images/tbc_logo_white_background.png');

const BasicModal: React.FC<ModalProps> = ({
  event,
  open,
  setOpen,
  setIsEditing = null,
}) => {
  const { events, setEvents, setSelectedEvent } = useContext(MyContext);
  const formContext = useFormContext();

  const [deleteConfimation, setDeleteConfirmation] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    deleteEvent(event.id);
    setDeleteConfirmation(false);
    handleClose();
    const updatedEvents = events.filter((e) => e.id !== event.id);
    setEvents(updatedEvents);
  };
  const closeIcon = require('../../../icons/icons8-close-48.png')

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
            formContext.setValue(key, dateString);
            inputs[i].value = dateString;
          } else {
            formContext.setValue(
              key,
              event[key as keyof CalendarEvent] as string
            );
            inputs[i].value = event[key as keyof CalendarEvent] as string;
          }
        }
      }
      const textArea = document.getElementsByTagName('textarea');
      formContext.setValue('description', event.description);
      textArea[0].value = event.description;
    });
  };
  /**
   * Formats link string if it's missing the http or https at the beginning.
   * This will ensure the link goes to the intended site and 
   * doesn't get appended onto the current url.
   * @param link 
   * @returns Properly formatted link string.
   */
  const formatLink = (link: string) => {
    if (!link.includes('http')) {
      return `https://${link}`;
    } else {
      return link;
    }
  }

  /**
   * Formats the given date to have a Day, MM/DD/YYYY, time format.
   * Example: Thursday, 1/23/2025 at 8:00 AM
   * @param date 
   * @returns Properly formatted date
   */
  const dateFormatter = (date: Date) => {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' }); // Day of the week
    const dateString = date.toLocaleDateString('en-US'); // MM/DD/YYYY format
    const timeString = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    
    return `${dayName}, ${dateString} at ${timeString}`;
  };

  const formattedStartDate = dateFormatter(event.start);
  const formattedEndDate = dateFormatter(event.end);


  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="style">
          {!deleteConfimation ? (
            <>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <Typography style={{width: '100%'}} variant="h6" component="h2">
                  {event.title}
                </Typography>
                <div onClick={handleClose} style={{display: 'flex', justifyContent: 'flex-end', width: '100%', cursor: 'pointer'}}>
                  <img id="close_icon" src={closeIcon} alt="close icon" />
                </div>
              </div>
              <div id="pic-background">
                <img src={tbcLogoPic} alt="default pic" />
              </div>
              <Typography>{`Location: ${event.location}`}</Typography>
              <Typography>{`Start: ${formattedStartDate}`}</Typography>
              <Typography>{`End: ${formattedEndDate}`}</Typography>
              {event.eventLink ? (
                <Typography>
                  {'Eventbrite link: '} <a style={{color: '#5b2c87'}} href={formatLink(event.eventLink)} target="_blank">{event.eventLink}</a>
                </Typography>
              ) : null}
              <Typography id="modal-modal-description">
              Description: {event.description}
              </Typography>
              {setIsEditing === null ? null : (
                <div className="edit-section">
                  <Button color={'primary'} onClick={handleEdit}>
                    Edit
                  </Button>
                  <Button
                    color={'error'}
                    onClick={() => setDeleteConfirmation(true)}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </>
          ) : (
            <>
              <Typography>
                Are you sure you want to delete this event?
              </Typography>
              <Button color={'primary'} onClick={handleDelete}>
                Yes
              </Button>
              <Button
                color={'error'}
                onClick={() => setDeleteConfirmation(false)}
              >
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
