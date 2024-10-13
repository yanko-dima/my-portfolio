import { useCallback, useMemo, useState } from 'react';

export const useOpen = (init: boolean = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(init);
  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  const onToggle = useCallback(() => {
    setIsOpen((prev) => {
      return !prev;
    });
  }, []);

  return useMemo(() => {
    return {
      isOpen,
      setIsOpen,
      onOpen,
      onClose,
      onToggle,
    };
  }, [isOpen, setIsOpen, onOpen, onClose, onToggle]);
};
