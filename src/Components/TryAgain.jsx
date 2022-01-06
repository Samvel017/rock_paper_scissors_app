import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import Button from '@mui/material/Button';

export default function TryAgain({ gameEnded }) {
  return (
    <div className="play-again">
      <Button onClick={gameEnded} variant="contained" startIcon={<ReplayIcon />}>
        Try Again
      </Button>
    </div>
  );
}
