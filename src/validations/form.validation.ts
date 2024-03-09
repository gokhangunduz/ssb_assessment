import { IDataKeys } from "../interfaces/data.interface";

const codeValidation = {
  required: "This field is required.",
  pattern: {
    value: /^(?=[a-zA-Z]{2}\d{3}$)[a-zA-Z\d]{5}$/,
    message: "This field must be in the format XX123.",
  },
  minLength: {
    value: 5,
    message: "This field must be at least 5 characters.",
  },
  maxLength: {
    value: 5,
    message: "This field cannot be longer than 5 characters.",
  },
};

const nameValidation = {
  required: "This field is required.",
  minLength: {
    value: 1,
    message: "This field must be at least 1 characters.",
  },
  maxLength: {
    value: 12,
    message: "This field cannot be longer than 12 characters.",
  },
};

const dateValidation = {
  required: "This field is required.",
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
