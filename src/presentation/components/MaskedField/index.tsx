import { TextField, TextFieldProps } from "@mui/material";
import { IMaskMixin } from "react-imask";

export const MaskedTextField = IMaskMixin<any, false, string, any>(
  ({ inputRef, ...otherProps }: any) => (
    <TextField {...otherProps} inputRef={inputRef} />
  )
);

export const MaskedField = ({
  ...otherProps
}: TextFieldProps & IMask.AnyMaskedOptions) => (
  <MaskedTextField
    {...otherProps}
    InputLabelProps={{ shrink: Boolean(otherProps.value) || undefined }}
  />
);
