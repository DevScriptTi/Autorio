import React, { useState } from "react";
import { Modal } from "../../../../DevScript/Modal/Modal";
import { IconButton } from "../../../../DevScript/Buttons/IconButton";
import { CheckCheckIcon, Key } from "lucide-react";
import { showModal } from "../../../../helpers/Dom/modal";
import { useForm } from "react-hook-form";
import { FilledButton } from "../../../../DevScript/Buttons/FilledButton";
import { axiosClient } from "../../../../Http/axiosClient";

export const CreateKey = ({ id }) => {
  const {
    setError,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async () => {
    try {
      const response = await axiosClient(`api/vendors/createKey/${id}`);
      setValue("key", response.data.data.value);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <IconButton
        className={"text-green-600 dark:text-green-400"}
        onClick={() => {
          showModal(`joinRequest${id}`);
        }}
      >
        <Key />
      </IconButton>
      <Modal id={`joinRequest${id}`}>
        <div
          className={`bg-light-surface dark:bg-dark-surface px-8 py-6 rounded-xl  `}
        >
          <form
            className={`${isSubmitting && "animate-pulse"} flex flex-col gap-8`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-6">
              <h1 className="text-title-large text-light-primary dark:text-dark-primary font-semibold text-start ">
                إنشاء مفتاح
              </h1>
              {!isSubmitSuccessful && !isSubmitting && (
                <div>
                  <FilledButton type="submit">إنشاء</FilledButton>
                </div>
              )}
              {isSubmitting && (
                <div className="animate-spin size-8 rounded-full border-4 border-light-surface-container-high dark:border-dark-surface-container-high border-t-light-primary dark:border-t-dark-primary"></div>
              )}
            </div>
            {isSubmitSuccessful && (
              <div className="flex flex-col gap-4 items-center">
                <div className="flex gap-4">
                  <span className="text-body-large">تم إنشاء مفتاح بنجاح</span>
                  <span className="text-green-600 dark:text-green-400">
                    <CheckCheckIcon size={34} />
                  </span>
                </div>
                {watch("key") && (
                  <span className="text-title-large text-light-secondary dark:text-dark-secondary">
                    {watch("key")}
                  </span>
                )}
              </div>
            )}
          </form>
        </div>
      </Modal>
    </>
  );
};
