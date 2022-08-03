import { FormikContextType, Form, FormikProvider } from "formik";
import {
  Box,
  Stack,
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";

import { ToolbarForm } from "@presentation/screens/Home/types";

import FileButton from "../FileButton/FileButton";
import { MaskedField } from "../MaskedField";
import ColorPicker from "../ColorPicker";

import { PAPER_SIZES } from "./constants";
import { RootStyle } from "./styles";

type ToolbarProps = {
  formik: FormikContextType<ToolbarForm>;
  setImageFile: (file: File) => void;
  handleDownload: () => void;
  canvasUrl: string;
};

const Toolbar = ({
  formik,
  setImageFile,
  handleDownload,
  canvasUrl,
}: ToolbarProps) => {
  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (!files) {
      return;
    }
    const [file] = files;
    if (!file) {
      return;
    }
    setImageFile(file);
  };

  const {
    values,
    errors,
    touched,
    getFieldProps,
    handleSubmit,
    setFieldValue,
  } = formik;

  return (
    <RootStyle>
      <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Stack spacing={2}>
              <FileButton
                title="Carregar Imagem"
                buttonProps={{ variant: "contained", fullWidth: true }}
                inputProps={{
                  multiple: false,
                  accept: "image/jpeg,image/png",
                  onChange: handleImage,
                }}
              />
            </Stack>
            <Stack spacing={2}>
              <MaskedField
                mask={Number}
                label="Largura das linhas (Pixel)"
                {...getFieldProps("lineWidth")}
                error={Boolean(touched.lineWidth && errors.lineWidth)}
                helperText={touched.lineWidth && errors.lineWidth}
              />
              <Stack direction="row" spacing={2} alignItems="center">
                <InputLabel sx={{ position: "relative" }}>
                  Cor da Grid
                </InputLabel>
                <ColorPicker
                  color={values.lineColor}
                  onChange={(color) => setFieldValue("lineColor", color)}
                />
              </Stack>
            </Stack>
            <Stack spacing={2}>
              <MaskedField
                mask={Number}
                label="Intervalo (CM)"
                {...getFieldProps("gap")}
                error={Boolean(touched.gap && errors.gap)}
                helperText={touched.gap && errors.gap}
              />
            </Stack>
            <Stack spacing={2}>
              <TextField
                select
                label="Tamanho da Folha"
                {...getFieldProps("paperType")}
                error={Boolean(touched.paperType && errors.paperType)}
                helperText={touched.paperType && errors.paperType}
                defaultValue="A4"
              >
                {PAPER_SIZES.map((size) => (
                  <MenuItem key={size.value} value={size.value}>
                    {size.name}
                  </MenuItem>
                ))}
                <MenuItem value="custom">Customizar</MenuItem>
              </TextField>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <MaskedField
                mask={Number}
                label="Largura da Folha (CM)"
                disabled={values.paperType !== "custom"}
                {...getFieldProps("paperWidth")}
                error={Boolean(touched.paperWidth && errors.paperWidth)}
                helperText={touched.paperWidth && errors.paperWidth}
              />
              <MaskedField
                mask={Number}
                label="Altura da Folha (CM)"
                disabled={values.paperType !== "custom"}
                {...getFieldProps("paperHeight")}
                error={Boolean(touched.paperHeight && errors.paperHeight)}
                helperText={touched.paperHeight && errors.paperHeight}
              />
            </Stack>
            <Stack spacing={2} alignItems="center">
              <Button
                disabled={!canvasUrl}
                type="submit"
                variant="contained"
                color="success"
                fullWidth
              >
                Aplicar Grid
              </Button>
              <Button
                disabled={!canvasUrl}
                variant="contained"
                fullWidth
                onClick={handleDownload}
              >
                Baixar Imagem
              </Button>
            </Stack>
          </Stack>
        </Form>
      </FormikProvider>
    </RootStyle>
  );
};

export default Toolbar;
