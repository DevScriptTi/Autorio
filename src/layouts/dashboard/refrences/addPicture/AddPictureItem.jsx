import React, { useState, useEffect } from "react";
import { FilledButton } from "../../../../DevScript/Buttons/FilledButton";
import { useForm } from "react-hook-form";
import { CheckCircle, ImageUp } from "lucide-react";
import { showModal } from "../../../../helpers/Dom/modal";
import { Modal } from "../../../../DevScript/Modal/Modal";
import { axiosClient } from "../../../../Http/axiosClient";
import { useDispatch } from "react-redux";
import { addReferencePictures } from "../../../../StateManagement/Slices/ReferencesSlices/ReferencesSlices";

export const AddPictureItem = ({ item }) => {
  const { register, handleSubmit, watch } = useForm();
  const dispatch = useDispatch()
  const [imagePreviews, setImagePreviews] = useState([]);
  const image = `image${item.id}`;
  const selectedFiles = watch(image);

  useEffect(() => {
    if (selectedFiles && selectedFiles.length > 0) {
      const fileArray = Array.from(selectedFiles).map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviews(fileArray);
      return () => {
        fileArray.forEach((file) => URL.revokeObjectURL(file));
      };
    }
  }, [selectedFiles]);

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append files to the FormData object using a proper name
    Array.from(selectedFiles).forEach((file) => {
      formData.append('image[]', file); // Note the 'image[]' to indicate multiple files
    });

    try {
      console.log(formData)
      const response = await axiosClient.post(
        `api/references/${item.id}/storePictures`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(addReferencePictures({id:item.id , paths:response.data.filePaths}))
      console.log("Submitted data: ", response);
      showModal(`thankmessage${item.id}`);
    } catch (error) {
      console.log(error);
    }
};

  return (
    <div className="flex flex-col gap-5 bg-light-surface-container dark:bg-dark-surface-container text-light-on-surface dark:text-dark-on-surface rounded-xl py-6 px-8">
      <h1 className="text-headline-medium text-light-primary dark:text-dark-primary font-semibold">
        أضف صور
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            className="hover:opacity-55 cursor-pointer flex items-center justify-center border-4 border-dashed border-light-outline-variant dark:border-dark-outline-variant bg-light-surface-container-highest dark:bg-dark-surface-container-highest size-96"
            htmlFor="img-file"
          >
            {imagePreviews.length === 0 ? (
              <div className="size-full flex flex-col gap-4 items-center justify-center text-light-on-surface-variant dark:text-dark-on-surface-variant">
                <ImageUp size={40} />
                <p className="text-title-large">قم بتحميل صور</p>
              </div>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fit_,_minmax(6.25rem_,_1fr)_)] h-full">
                {imagePreviews.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Preview ${index}`}
                    className="block h-full"
                  />
                ))}
              </div>
            )}
            <input
              multiple
              type="file"
              id="img-file"
              className="hidden"
              {...register(image)}
            />
          </label>
        </div>
        <FilledButton type="submit">إضافة</FilledButton>
        <Modal id={`thankmessage${item.id}`}>
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
  );
};
