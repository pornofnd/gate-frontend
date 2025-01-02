import React from "react";
export const handleFileChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.DragEvent<HTMLLabelElement>,
    setHook: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    let file;
    if ("dataTransfer" in event) {
      file = event.dataTransfer.files?.[0];
    } else {
      file = event.target.files?.[0];
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setHook(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
};