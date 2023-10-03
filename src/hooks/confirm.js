export const useConfirm = (message, onConfirm, onCancel) => {
  if (typeof onConfirm !== 'function') {
    throw new Error('need confirm function');
  }
  if (onCancel && typeof onCancel !== 'function') {
    throw new Error('third parameter is cancel function');
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else if (onCancel) {
      onCancel();
    }
  };

  return confirmAction;
};
