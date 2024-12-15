import React from "react";
import { SubHead } from "../Framwork";
import { Select } from "../../FormElements/Select/Select";
import { useForm } from "react-hook-form";
import { FilledButton } from "../../Buttons/FilledButton";

const Wilayas = [
  { id: 1, name: "Oum El Bouaghi" },
  { id: 2, name: "Tebesa" },
  { id: 3, name: "Khenchla" },
  { id: 4, name: "Betna" },
];
export const Selects = () => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex flex-col gap-4 items-start max-w-[250px]">
      <SubHead>Select</SubHead>
      <form
        className="flex flex-col items-start gap-4 "
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Select register={register} label="wilaya">
          {Wilayas.map((item) => {
            return (
              <Select.Option
                label={'wilaya'}
                key={item.id}
                option={item.name}
                value={item.id}
                setValue={setValue}
              />
            );
          })}
        </Select>
        <div className="flex items-center gap-3">
          <FilledButton type="submit">Submit</FilledButton>
          <span>{watch("wilaya-helper")}</span>
        </div>
      </form>
      <Select error={{ message: "There are an error here" }}>
        {/* {Wilayas.map((item) => {
          return <Select.Option key={item.id} option={item.name} value={item.id} />;
        })} */}
      </Select>
    </div>
  );
};
