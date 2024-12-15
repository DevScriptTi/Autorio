import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { axiosClient } from "../../../../Http/axiosClient";
import { Input } from "../../../../DevScript/FormElements/Inputs/Input";
import { FilledButton } from "../../../../DevScript/Buttons/FilledButton";
import { updateProductCategories } from "../../../../StateManagement/Slices/Extras/ProductCategoriesSlices";

export const EditeItem = ({ item }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: { name: item.name },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axiosClient.put(
        `api/referenceCategories/${item.id}`,
        {
          name: data.name,
        }
      );
      console.log("data receved : " , response.data.data)

      dispatch(updateProductCategories(response.data.data))
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.log(error.response.data.message); //رقم سجل التجاري موجود مسبقا
        setError("nrc", {
          type: "server",
          message: error.response.data.message,
        });
      } else {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div
        className={`${
          isSubmitting && "animate-pulse"
        } w-[400px] px-6 py-4 rounded-xl h-fit flex items-center overflow-auto bg-light-surface-container dark:bg-dark-surface-container-high`}
      >
        <div className="w-full flex flex-col gap-8 ">
          <h1 className="w-fit m-auto  text-headline-large font-bold text-light-primary dark:text-dark-primary">
            تعديل صنف مصدر
          </h1>
          <form
            className="min-w-[350px] max-w-[700px] max-sm:px-4 m-auto flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              label="name"
              title="الإسم"
              placeholder="أدخل إسم صنف المصدر"
              register={register}
              error={errors.name}
            />
            {isSubmitSuccessful && (
              <h1 className="text-title-large text-green-700 dark:text-green-400 font-bold">
                تمت عملية التعديل بنجاح
              </h1>
            )}
            <div className="flex items-end h-20 ">
              <FilledButton>التعديل</FilledButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
