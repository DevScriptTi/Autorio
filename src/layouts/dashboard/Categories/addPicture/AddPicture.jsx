import React from "react";
import { IconButton } from "../../../../DevScript/Buttons/IconButton";
import { ImagePlus } from "lucide-react";

export const AddPicture = () => {
  return (
    <div>
      <IconButton className={'text-indigo-700 dark:text-indigo-400'}>
        <ImagePlus />
      </IconButton>
    </div>
  );
};
