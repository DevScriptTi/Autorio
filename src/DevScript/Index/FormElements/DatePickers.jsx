import React from "react";
import { SubHead } from "../Framwork";
import { DatePicker } from "../../FormElements/DatePicker/DatePicker";
import { useForm } from "react-hook-form";
import { FilledButton } from "../../Buttons/FilledButton";

export const DatePickers = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex flex-col gap-4 items-start max-w-[250px]">
      <SubHead>Data Picker</SubHead>
      <form
        className="flex flex-col items-start gap-4"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <DatePicker
          title="تاريخ الميلاد"
          label="dateOfBirth"
          register={register}
          setValue={setValue}
          watch={watch}
          error={errors.dateOfBirth}
        />
        <div className="flex items-center gap-4 ">
          <FilledButton type="submit">Submit</FilledButton>
          <span className="text-light-on-surface dark:text-dark-on-surface" >{watch("dateOfBirth")}</span>
        </div>
      </form>
      <DatePicker error={{ message: "There are a mistake here" }} />
    </div>
  );
};
