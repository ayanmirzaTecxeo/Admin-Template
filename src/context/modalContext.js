import { createContext, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Grid } from '@mui/material';

const ModalContext = createContext({});

const initialState = {
  title: '',
  description: '',
  showModal: false,
  onConfirm: () => {},
  child: undefined,
};

const ModalProvider = ({ children }) => {
  const [dialogData, setDialogData] = useState(initialState);
  const handleModalClose = () => {
    setDialogData(initialState);
  };

  return (
    <ModalContext.Provider value={{ setDialogData, handleModalClose }}>
      <Dialog
        open={dialogData?.showModal}
        onClose={handleModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid
          mr={2}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          onClick={handleModalClose}
          sx={{ cursor: 'pointer' }}
        >
          <DialogTitle id="alert-dialog-title">{dialogData?.title}</DialogTitle>
          <img
            width={20}
            height={20}
            src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
            alt={'closeicon'}
          />
        </Grid>

        <DialogContent sx={{ m: 0 }}>
          {dialogData?.description}
          {dialogData?.child}
        </DialogContent>
        {!dialogData?.child && (
          <DialogActions>
            <Button size="small" variant="contained" onClick={dialogData?.onConfirm}>
              Confirm
            </Button>
          </DialogActions>
        )}
      </Dialog>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
