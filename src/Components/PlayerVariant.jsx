import React from 'react';
import Button from '@mui/material/Button';

export default function PlayerVariant({ currentVariantHandler, gameVariant }) {
  return (
    <div className="player">
      {gameVariant.map((elem) => {
        return (
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              currentVariantHandler(elem);
            }}
          >
            {elem}
          </Button>
        );
      })}
    </div>
  );
}
