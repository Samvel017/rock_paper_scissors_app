import React from 'react';
import Button from '@mui/material/Button';

export default function PlayerVariant({ currentVariantHandler }) {
  return (
    <div className="player">
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          currentVariantHandler('rock');
        }}
      >
        Rock
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          currentVariantHandler('paper');
        }}
      >
        Paper
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          currentVariantHandler('scissors');
        }}
      >
        Scissors
      </Button>
    </div>
  );
}
