import { ReactElement } from "react";
import Card from "../Card/Card";
import { useForm } from "react-hook-form";
import { IData } from "../../interfaces/data.interface";
import { DevTool } from "@hookform/devtools";
import InputText from "../InputText/InputText";
import { handleGetInputValidation } from "../../validations/form.validation";
import { formInitialValues } from "../../constant/form.constant";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import InputDate from "../InputDate/InputDate";
import Button from "../Button/Button";
import { useAppDispatch } from "../../hooks/redux.hook";
import { reducerAddData } from "../../features/dataSlice";

export default function Form(): ReactElement {
  const {
    register,
    formState,
    control,
    handleSubmit: formSubmit,
  } = useForm<IData>({
    defaultValues: formInitialValues,
  });

  const dispatch = useAppDispatch();

  function handleOnSubmitForm(data: IData) {
    console.log(data);

    dispatch(reducerAddData(data));
  }

  return (
    <Card title="Form">
      <form
        className="flex items-center gap-4"
        onSubmit={formSubmit(handleOnSubmitForm)}
      >
        <InputText
          label="Code"
          {...register("code", handleGetInputValidation("code"))}
          error={formState.errors.code?.message}
        />

        <InputText
          label="Name"
          {...register("name", handleGetInputValidation("name"))}
          error={formState.errors.name?.message}
        />

        <InputDate
          label="Date"
          {...register("date", handleGetInputValidation("date"))}
          error={formState.errors.date?.message}
        />

        <InputCheckbox
          label="Updatable"
          {...register("isUpdatable", handleGetInputValidation("isUpdatable"))}
          error={formState.errors.isUpdatable?.message}
        />

        <Button label="Reset" type="reset" />
        <Button label="Submit" type="submit" />
      </form>
      <DevTool control={control} />
    </Card>
  );
}
