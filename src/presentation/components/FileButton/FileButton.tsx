import { Button, ButtonProps, styled } from "@mui/material";

const Input = styled("input")({
  display: "none",
});

type FileButtonProps = {
  title: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  buttonProps?: ButtonProps;
};

const FileButton = ({ title, inputProps, buttonProps }: FileButtonProps) => {
  return (
    <label htmlFor="contained-button-file">
      <Input {...inputProps} id="contained-button-file" type="file" />
      <Button {...buttonProps} component="span">
        {title}
      </Button>
    </label>
  );
};

export default FileButton;
