import React, { useState } from "react";
import { RgbaStringColorPicker } from "react-colorful";
import { Box, Popper as MuiPopper } from "@mui/material";

import { ColorPickerButton } from "./styles";

type ColorPickerProps = {
  color: string;
  onChange: (newColor: string) => void;
};

const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  return (
    <Box>
      <ColorPickerButton
        aria-describedby="color-picker"
        type="button"
        onClick={handleClick}
        variant="contained"
        sx={{
          backgroundColor: color,
          ":hover": {
            backgroundColor: color,
          },
        }}
      >
        ⠀
      </ColorPickerButton>
      <MuiPopper
        sx={{ zIndex: 1 }}
        id="color-picker"
        open={open}
        anchorEl={anchorEl}
      >
        <RgbaStringColorPicker color={color} onChange={onChange} />
      </MuiPopper>
    </Box>
  );
};

export default ColorPicker;
