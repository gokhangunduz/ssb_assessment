import { ReactElement } from "react";
import Card from "../Card/Card";
import { useForm } from "react-hook-form";
import { IData } from "../../interfaces/data.interface";
import InputText from "../InputText/InputText";
import { handleGetInputValidation } from "../../validations/form.validation";
import { formInitialValues } from "../../constant/form.constant";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import InputDate from "../InputDate/InputDate";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hook";
import {
  reducerAddData,
  reducerRemoveStageDataIndex,
  reducerUpdateData,
} from "../../features/dataSlice";

export default function Form(): ReactElement {
  const { datas, stageDataIndex } = useAppSelector((state) => state.data);

  const {
    register,
    formState,
    handleSubmit: formSubmit,
    reset: formReset,
  } = useForm<IData>({
    defaultValues: formInitialValues,
    values: stageDataIndex !== null ? datas[stageDataIndex] : formInitialValues,
  });

  const dispatch = useAppDispatch();

  function handleOnSubmitForm(data: IData) {
    if (stageDataIndex !== null) {
      dispatch(reducerUpdateData({ index: stageDataIndex, data }));
      dispatch(reducerRemoveStageDataIndex());
    } else {
      dispatch(reducerAddData(data));
    }
    formReset();
  }

  function handleOnResetForm() {
    formReset();
    dispatch(reducerRemoveStageDataIndex());
  }

  return (
    <Card title="Form">
      <form
        className="flex flex-col gap-4 items-center justify-between"
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

        <div className="flex items-center gap-4">
          <Button
            onClick={handleOnResetForm}
            label="Clean"
            type="reset"
            icon="pi pi-refresh"
          />
          <Button
            label={stageDataIndex !== null ? "Update" : "Submit"}
            type="submit"
            icon={stageDataIndex !== null ? "pi pi-check" : "pi pi-save"}
          />
        </div>
      </form>
    </Card>
  );
}
