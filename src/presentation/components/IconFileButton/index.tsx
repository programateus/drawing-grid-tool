import { IconButton, IconButtonProps, styled } from "@mui/material";

const Input = styled("input")({
  display: "none",
});

type IconFileButtonProps = {
  icon: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  buttonProps?: IconButtonProps;
};

const IconFileButton = ({
  icon,
  inputProps,
  buttonProps,
}: IconFileButtonProps) => {
  return (
    <label htmlFor="icon-button-file">
      <Input {...inputProps} id="icon-button-file" type="file" />
      <IconButton {...buttonProps} component="span">
        {icon}
      </IconButton>
    </label>
  );
};

export default IconFileButton;
