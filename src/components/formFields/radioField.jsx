import React from 'react';
import { Controller } from 'react-hook-form';
import { FormControlLabel, FormHelperText, Radio, RadioGroup, Typography } from '@mui/material';
const CustomRadioField = ({ controller, label, radioArray, required = true, ...props }) => {
  return (
    <div>
      {label && (
        <>
          <Typography variant="caption">{label}</Typography>
          <br />
        </>
      )}

      {controller ? (
        <>
          <Controller
            control={controller.control}
            name={controller.name}
            rules={{ required }}
            render={({ field: { onChange, value } }) => (
              <RadioGroup row value={value ? value : 0} onChange={onChange}>
                {radioArray.map(({ value, label }, index) => (
                  <FormControlLabel key={index} value={value} control={<Radio />} label={label} />
                ))}
              </RadioGroup>
            )}
          />
          {controller.errors && (
            <FormHelperText sx={{ color: 'error.main' }}>{controller.errors.message}</FormHelperText>
          )}
        </>
      ) : (
        <RadioGroup row {...props}>
          {radioArray.map(({ value, label }, index) => (
            <FormControlLabel key={index} value={value} control={<Radio />} label={label} />
          ))}
        </RadioGroup>
      )}
    </div>
  );
};

export default CustomRadioField;
