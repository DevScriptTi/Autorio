import React from "react";
import { IconButton } from "../../../../DevScript/Buttons/IconButton";
import { ImagePlus } from "lucide-react";
import { Modal } from "../../../../DevScript/Modal/Modal";
import { showModal } from "../../../../helpers/Dom/modal";
import { AddPictureItem } from "./AddPictureItem";

export const AddPicture = ({item}) => {
  return (
    <div>
      <IconButton className={'text-indigo-700 dark:text-indigo-400'} onClick={()=>{showModal(`AddPictureToReference${item.id}`)}}>
        <ImagePlus />
      </IconButton>
      <Modal id={`AddPictureToReference${item.id}`}>
        <AddPictureItem item={item}/>
      </Modal>
    </div>
  );
};
