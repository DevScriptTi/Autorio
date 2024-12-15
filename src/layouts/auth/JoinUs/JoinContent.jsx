import { useForm } from "react-hook-form";
import { Input } from "../../../DevScript/FormElements/Inputs/Input";
import { DatePicker } from "../../../DevScript/FormElements/DatePicker/DatePicker";
import { Select } from "../../../DevScript/FormElements/Select/Select";
import { FilledButton } from "../../../DevScript/Buttons/FilledButton";
import { axiosClient } from "../../../Http/axiosClient";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setWilayas } from "../../../StateManagement/Slices/Extras/WilayasSlice";
import { Modal } from "../../../DevScript/Modal/Modal";
import { CheckCircle, Link } from "lucide-react";
import { NavLink } from "react-router-dom";
import { showModal } from "../../../helpers/Dom/modal";

export const JoinForm = ({ children }) => {
  const wilayas = useSelector((state) => state.wilayas);
  const dispatch = useDispatch();
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const getWilayas = async () => {
    try {
      const { data } = await axiosClient("api/wilayas");
      dispatch(setWilayas(data.data));
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (data) => {
    try {
      const response = await axiosClient.post("api/vendors", {
        name: data.name,
        last: data.last,
        dateOfBirth: data.dateOfBirth,
        address: data.address,
        nrc: data.nrc,
        phone: data.phone,
        city_id: data.city_id,
      });
      showModal("thankmessage");
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
  useEffect(() => {
    getWilayas();
  }, []);
  return (
    <>
      <div
        className={`${
          isSubmitting && "animate-pulse"
        } w-full h-content flex items-center overflow-auto`}
      >
        <div className="w-full flex flex-col gap-8 ">
          <h1 className="w-fit m-auto  text-headline-large font-bold text-light-primary dark:text-dark-primary">
            كن واحدا منا !
          </h1>
          <form
            className="min-w-[350px] max-w-[700px] max-sm:px-4 m-auto flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-4 ">
              <Input
                label="last"
                title="الإسم"
                placeholder="أدخل إسمك"
                register={register}
                error={errors.last}
              />
              <Input
                label="name"
                title="القب"
                placeholder="أدخل لقبك"
                register={register}
                error={errors.name}
              />
            </div>
            <DatePicker
              label="dateOfBirth"
              title="تاريخ الميلاد"
              register={register}
              error={errors.dateOfBirth}
              setValue={setValue}
              watch={watch}
            />
            <div className="flex gap-4">
              <Select
                title="الولاية"
                label="wilaya_id"
                placeholder=" إختر الولاية"
                register={register}
                error={errors.wilaya_id}
              >
                {wilayas?.map((item) => {
                  return (
                    <Select.Option
                      key={item.id}
                      option={item.name}
                      value={item.id}
                      label={"wilaya_id"}
                      setValue={setValue}
                    />
                  );
                })}
              </Select>
              {watch("wilaya_id") && (
                <Select
                  title="البلدية"
                  label="city_id"
                  placeholder=" إختر البلدية"
                  register={register}
                  error={errors.city_id}
                >
                  {wilayas[watch("wilaya_id") - 1].cities?.map((item) => {
                    return (
                      <Select.Option
                        key={item.id}
                        option={item.name}
                        value={item.id}
                        label={"city_id"}
                        setValue={setValue}
                      />
                    );
                  })}
                </Select>
              )}
            </div>
            <Input
              title="رقم الهاتف"
              label="phone"
              placeholder=" أدخل رقم الهاتف"
              register={register}
              error={errors.phone}
            />
            <Input
              title="العنوان"
              label="address"
              placeholder=" أدخل العنوان"
              register={register}
              error={errors.address}
            />
            <Input
              title="رقم السجل التجاري"
              label="nrc"
              placeholder=" أدخل رقم السجل التجاري"
              register={register}
              error={errors.nrc}
            />
            <div className="flex items-end h-20 ">
              <FilledButton>إنضم إلينا</FilledButton>
            </div>
            <Modal id="thankmessage">
              <div className="flex flex-col gap-6 bg-light-surface dark:bg-dark-surface py-6 px-4 rounded-lg">
                <div className="flex flex-col gap-3 items-center">
                  <h1 className="text-title-large text-light-primary dark:text-dark-primary font-bold">
                    شكرا على إنضمامكم
                  </h1>
                  <p className="text-body-large text-light-on-surface-variant dark:text-dark-on-surface-variant">
                    سنراجع طلبكم و نتصل بكم في أقرب الأجال
                  </p>
                </div>
                <div className="flex justify-center text-green-700 dark:text-green-400">
                  <CheckCircle size={80} />
                </div>
                <NavLink
                  to={"/"}
                  className={
                    "m-auto text-light-primary dark:text-dark-primary hover:opacity-70"
                  }
                >
                  عودة لصفحة الرئيسية ؟
                </NavLink>
              </div>
            </Modal>
          </form>
        </div>
      </div>
    </>
  );
};
