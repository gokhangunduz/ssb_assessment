import { ReactElement, useEffect } from "react";
import Card from "../Card/Card";
import { useForm } from "react-hook-form";
import { IData } from "../../interfaces/data.interface";
import { DevTool } from "@hookform/devtools";
import InputText from "../InputText/InputText";

export default function Form(): ReactElement {
  const { register, formState, control, handleSubmit } = useForm<IData>();

  useEffect(() => {
    console.log(formState.touchedFields);
  }, [formState]);

  return (
    <Card>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <InputText
          type="text"
          label="Code"
          {...register("code", {
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
          })}
          touched={formState.touchedFields.code}
          error={formState.errors.code?.message}
        />
        <input
          type="text"
          {...register("name", {
            required: "This field is required.",
            minLength: {
              value: 3,
              message: "This field must be at least 3 characters.",
            },
            maxLength: {
              value: 12,
              message: "This field cannot be longer than 12 characters.",
            },
          })}
        />
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </Card>
  );
}
