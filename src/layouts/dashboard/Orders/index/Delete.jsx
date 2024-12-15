import React, { useState } from "react";
import { IconButton } from "../../../../DevScript/Buttons/IconButton";
import { CheckCheckIcon, Trash2 } from "lucide-react";
import { axiosClient } from "../../../../Http/axiosClient";
import { Modal } from "../../../../DevScript/Modal/Modal";
import { showModal } from "../../../../helpers/Dom/modal";
import { deleteReference } from "../../../../StateManagement/Slices/ReferencesSlices/ReferencesSlices";
import { useDispatch } from "react-redux";

export const Delete = ({ id }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch()
  const DeleteItem = async () => {
    try {
      setIsSubmitting(true);
      const response = await axiosClient.delete(`api/references/${id}`);
      dispatch(deleteReference(id))
      showModal(`deleteRequest${id}`);
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <IconButton
        className={`${
          isSubmitting && "animate-spin"
        } text-red-700 dark:text-red-400`}
        onClick={() => {
          DeleteItem();
        }}
      >
        <Trash2 size={24} />
      </IconButton>
      <Modal id={`deleteRequest${id}`}>
        <div className="flex flex-col gap-4 items-center bg-light-surface dark:bg-dark-surface px-8 py-6 rounded-xl  ">
          <div className="flex gap-4">
            <span className="text-body-large">تم حذف البائع</span>
            <span className="text-green-600 dark:text-green-400">
              <CheckCheckIcon size={34} />
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
};
