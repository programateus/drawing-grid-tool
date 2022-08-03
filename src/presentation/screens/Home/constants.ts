import * as yup from "yup";

export const TOOLBAR_FORM_SCHEMA = yup.object().shape({
  paperType: yup.string().required("Campo obrigatório"),
  paperWidth: yup.number().required("Campo obrigatório"),
  paperHeight: yup.number().required("Campo obrigatório"),
  gap: yup.number().required("Campo obrigatório"),
});
