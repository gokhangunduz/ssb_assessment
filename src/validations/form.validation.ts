import { IDataKeys } from "../interfaces/data.interface";

const codeValidation = {
  required: "This field is required.",
  pattern: {
    value: /^(?=[a-zA-Z]{2}\d{3}$)[a-zA-Z\d]{5}$/,
    message: "Must be in XX123 format.",
  },
  maxLength: {
    value: 5,
    message: "Cannot exceed 5 characters.",
  },
};

const nameValidation = {
  required: "This field is required.",
  maxLength: {
    value: 12,
    message: "Cannot exceed 12 characters.",
  },
};

const dateValidation = {
  required: "This field is required.",
  pattern: {
    value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
    message: "Must be in DD/MM/YYYY format.",
  },
};

export const formValidations = {
  code: codeValidation,
  name: nameValidation,
  date: dateValidation,
  isUpdatable: {},
};

export function handleGetInputValidation(name: IDataKeys) {
  return formValidations[name] || {};
}
