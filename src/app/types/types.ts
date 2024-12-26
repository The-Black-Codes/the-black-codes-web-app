export interface EventFormInputs {
  title: string;
  start: Date;
  end: Date;
  description: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description: string;
}

export interface CalendarProps {
  events?: CalendarEvent[] | undefined;
  setIsEditing?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalProps {
  event: CalendarEvent;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditing?: React.Dispatch<React.SetStateAction<boolean>> | null;
}

export interface EventFormProps {
  isEditing: boolean;
  setIsEditing?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MobileViewProps {
  isAdminPage: boolean;
}