import React from "react";
import { IconButton } from "../../../../DevScript/Buttons/IconButton";
import { ViewIcon } from "lucide-react";
import { Modal } from "../../../../DevScript/Modal/Modal";
import { showModal } from "../../../../helpers/Dom/modal";
import { Info } from "./Info";
import { Picture } from "./Picture";

export const View = ({ item }) => {
  return (
    <div>
      <IconButton
        className={"text-green-700 dark:text-green-400"}
        onClick={() => {
          showModal(`view-${item.id}`);
        }}
      >
        <ViewIcon />
      </IconButton>
      <Modal id={`view-${item.id}`}>
        <div className="flex flex-col lg:flex-row item-start gap-5 bg-light-surface-container dark:bg-dark-surface-container py-4 px-6 rounded-xl">
          <Info item={item}/>
          <Picture item={item}/>
        </div>
      </Modal>
    </div>
  );
};
