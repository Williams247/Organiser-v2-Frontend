export interface ParamsProps {
  isChecked: boolean;
  id: string;
  todo: string;
  note: string;
}

export interface EditModalProps {
  open: boolean;
  todo: string;
  note: string;
  loading: boolean;
  id: string;
  isChecked: boolean;
  onClose: () => void;
  updateActivties: ({ isChecked, id, todo, note }: ParamsProps) => void;
}
