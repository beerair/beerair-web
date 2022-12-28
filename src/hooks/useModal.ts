import { useCallback, useState } from 'react';

const useModal = (defaultOpen = false): [boolean, () => void, () => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return [isOpen, openModal, closeModal];
};

export default useModal;
