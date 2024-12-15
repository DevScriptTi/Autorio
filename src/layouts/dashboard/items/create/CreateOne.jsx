import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { axiosClient } from "../../../../Http/axiosClient";
import { Input } from "../../../../DevScript/FormElements/Inputs/Input";
import { Select } from "../../../../DevScript/FormElements/Select/Select";
import { FilledButton } from "../../../../DevScript/Buttons/FilledButton";
import { Modal } from "../../../../DevScript/Modal/Modal";
import { CheckCircle } from "lucide-react";
import { showModal } from "../../../../helpers/Dom/modal";
import { addProduct, setProducts } from "../../../../StateManagement/Slices/ProductsSlices/ProductsSlices";
import { setReferences } from "../../../../StateManagement/Slices/ReferencesSlices/ReferencesSlices";

export const CreateOne = () => {
  const references = useSelector((state) => state.references);
  const dispatch = useDispatch();
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

 
  const onSubmit = async (data) => {
    try {
      const response = await axiosClient.post(
        `api/items/${data.reference_id}`,
        {
          price: data.price,
          description: data.description,
          stock: data.stock,
        }
      );
      console.log( response.data.data)
      dispatch(addProduct(response.data.data))
      showModal("thankmessage");
    } catch (error) {
      console.log(error);
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
            إنشاء منتج مصدري
          </h1>
          <form
            className="min-w-[350px] max-w-[700px] max-sm:px-4 m-auto flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              label="price"
              title="السعر بالدينار"
              placeholder="أدخل السعر  المنتج بالدينار"
              register={register}
              error={errors.price}
            />
            <Input
              label="stock"
              title="الكمية"
              placeholder="أدخل الكمية"
              register={register}
              error={errors.stock}
            />

            <Input
              label="description"
              title="الوصف"
              placeholder="أكتب الوصف"
              register={register}
              error={errors.description}
            />

            <div className="flex gap-4">
              <Select
                title="مراجع"
                label="reference_id"
                placeholder=" إختر مرجع "
                register={register}
                error={errors.reference_id}
              >
                {references.data?.map((item) => {
                  return (
                    <Select.Option
                      key={item.id}
                      option={`${item.name} || ${item.reference}`}
                      value={item.id}
                      label={"reference_id"}
                      setValue={setValue}
                    />
                  );
                })}
              </Select>
            </div>

            <div className="flex items-end h-20 ">
              <FilledButton>إضافة</FilledButton>
            </div>
            <Modal id="thankmessage">
              <div className="flex flex-col gap-6 bg-light-surface dark:bg-dark-surface py-6 px-4 rounded-lg">
                <div className="flex flex-col gap-3 items-center">
                  <h1 className="text-title-large text-light-primary dark:text-dark-primary font-bold">
                    تمت عملية الإضافة بنجاح
                  </h1>
                </div>
                <div className="flex justify-center text-green-700 dark:text-green-400">
                  <CheckCircle size={80} />
                </div>
              </div>
            </Modal>
          </form>
        </div>
      </div>
    </>
  );
};
