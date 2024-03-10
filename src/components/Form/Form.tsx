import { handleGetInputValidation } from "../../validations/form.validation";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hook";
import { formInitialValues } from "../../constant/form.constant";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import { IData } from "../../interfaces/data.interface";
import InputText from "../InputText/InputText";
// import InputDate from "../InputDate/InputDate";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { ReactElement } from "react";
import Card from "../Card/Card";
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
    getValues: formValues,
    setValue: formSetValue,
    handleSubmit: formSubmit,
    reset: formReset,
  } = useForm<IData>({
    defaultValues: formInitialValues,
    values: stageDataIndex !== null ? datas[stageDataIndex] : formInitialValues,
    reValidateMode: "onChange",
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
        className="flex flex-col gap-14 items-center justify-between"
        onSubmit={formSubmit(handleOnSubmitForm)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-10">
          <div className="col-span-1">
            <InputText
              label="Code"
              {...register("code", handleGetInputValidation("code"))}
              tip="This field required and must be in XX123 format. (e.g. AB123 or zy456)"
              error={formState.errors.code?.message}
            />
          </div>

          <div className="col-span-1">
            <InputText
              label="Name"
              {...register("name", handleGetInputValidation("name"))}
              tip="This field required and cannot exceed 12 characters."
              error={formState.errors.name?.message}
            />
          </div>

          <div className="col-span-1">
            <InputText
              label="Date"
              {...register("date", handleGetInputValidation("date"))}
              tip="This field required and must be in DD/MM/YYYY format."
              error={formState.errors.date?.message}
            />
          </div>
          {/* <div className="col-span-1">
            <InputDate
              label="Date"
              {...register("date", handleGetInputValidation("date"))}
              tip="This field required and must be in DD/MM/YYYY format."
              error={formState.errors.date?.message}
            />
          </div> */}

          <div className="col-span-1">
            <InputCheckbox
              label="Is Updatable"
              checked={formValues("isUpdatable")}
              onChange={(e) =>
                formSetValue("isUpdatable", e.value, {
                  shouldTouch: true,
                  shouldValidate: true,
                })
              }
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            onClick={handleOnResetForm}
            outlined
            label="Clean"
            type="reset"
            icon="pi pi-refresh"
          />
          <Button
            label={stageDataIndex !== null ? "Update" : "Save"}
            type="submit"
            icon={stageDataIndex !== null ? "pi pi-check" : "pi pi-save"}
            disabled={formState.isSubmitting}
          />
        </div>
      </form>
    </Card>
  );
}
