// src/hooks/useConfirmDialog.js
import { useState } from 'react';

const useConfirmDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [onConfirmAction, setOnConfirmAction] = useState(() => () => {});
  const [payload, setPayload] = useState(null);

  const openDialog = (action, data = null) => {
    setOnConfirmAction(() => () => action(data));
    setPayload(data);
    setIsOpen(true);
  };

  const confirm = () => {
    onConfirmAction();
    closeDialog();
  };

  const closeDialog = () => {
    setIsOpen(false);
    setOnConfirmAction(() => () => {});
    setPayload(null);
  };

  return {
    isOpen,
    openDialog,
    confirm,
    closeDialog,
    payload,
  };
};

export default useConfirmDialog;
