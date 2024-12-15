import { FilterIcon } from "lucide-react";
import React from "react";
import { Modal } from "../../../../DevScript/Modal/Modal";
import { showModal } from "../../../../helpers/Dom/modal";
import { useForm } from "react-hook-form";
import { Select } from "../../../../DevScript/FormElements/Select/Select";
import { FilledButton } from "../../../../DevScript/Buttons/FilledButton";

export const Filter = () => {
  return (
    <div>
      <button
        className="flex gap-2  text-light-on-surface-variant dark:text-dark-on-surface-variant"
        onClick={() => {
          showModal("filterData");
        }}
      >
        <span>
          <FilterIcon />
        </span>
        <span>فلترة</span>
      </button>
      <Modal id="filterData">
        <Filter.Card />
      </Modal>
    </div>
  );
};

Filter.Card = () => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={`bg-light-surface dark:bg-dark-surface px-8 py-6 rounded-xl  `}>
      <form className={`${isSubmitting && 'animate-pulse'} flex flex-col gap-8`} onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-title-large text-light-primary dark:text-dark-primary font-semibold text-start ">
          فلترة
        </h1>
        <div>
          <div className="flex flex-col gap-6">
            <h3 className="text-title-small">الموقع</h3>
            <div className="flex flex-col gap-4">
              <Select></Select>
              <Select></Select>
            </div>
          </div>
        </div>
        <div>
          <FilledButton type="submit">فلترة</FilledButton>
        </div>
      </form>
    </div>
  );
};
