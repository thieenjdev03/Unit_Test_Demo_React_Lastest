import React, { useState, useEffect } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';

const CallComponent = () => {
  const [isCalling, setIsCalling] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let timer;
    if (isCalling && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0 && isCalling) {
      setIsCalling(false);
      alert('Time out! No response.');
    }

    return () => clearTimeout(timer);
  }, [isCalling, countdown]);

  const handleCallClick = () => {
    setIsCalling(true);
    setCountdown(15);
  };

  const handleClose = () => {
    setIsCalling(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleCallClick} disabled={isCalling}>
        Call
      </Button>
      <Modal
        open={isCalling}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Waiting for response...
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {countdown}s remaining
          </Typography>
          <Button onClick={handleClose} variant="contained" color="secondary" sx={{ mt: 2 }}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CallComponent;
