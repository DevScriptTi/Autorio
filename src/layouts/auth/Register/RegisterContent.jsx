import { useForm } from "react-hook-form";
import { Input } from "../../../DevScript/FormElements/Inputs/Input";
import { DatePicker } from "../../../DevScript/FormElements/DatePicker/DatePicker";
import { Select } from "../../../DevScript/FormElements/Select/Select";
import { FilledButton } from "../../../DevScript/Buttons/FilledButton";
import { axiosClient } from "../../../Http/axiosClient";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setWilayas } from "../../../StateManagement/Slices/Extras/WilayasSlice";
import { Modal } from "../../../DevScript/Modal/Modal";
import { CheckCircle, Link } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { showModal } from "../../../helpers/Dom/modal";
import { setUser } from "../../../StateManagement/Slices/UsersSlices/UserSlices";

export const RegisterForm = ({ children }) => {
  const wilayas = useSelector((state) => state.wilayas);
  // const [ redirect , setRedirect ] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

 
  const onSubmit = async (data) => {
    try {
      const response = await axiosClient.post("api/register", {
        email: data.email,
        password: data.password,
        key: data.key,
      });
      localStorage.setItem('token' , response.data.token);
      localStorage.setItem('userType' , response.data.type);
      dispatch(setUser(response.data))
      showModal("thankmessage");
      setTimeout(() => {
        navigate('/')
      }, 1200);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const errors =  error.response.data
        console.log(errors)
        errors?.key && setError("key", {
          type: "server", 
          message: errors.key, 
        }); 
        errors?.errors?.email && setError("email", {
          type: "server", 
          message: errors?.errors?.email, 
        }); 
      } else {
        console.log(error);
      }
    }
  };

  // useEffect(()=>{
  //   navigate('/')
  // },[redirect])

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

            <Input
              title="البريد الإلكتروني"
              label="email"
              placeholder=" أدخل البريد الإلكتروني"
              register={register}
              error={errors.email}
            />
            <Input
              title="كلمة السر"
              label="password"
              placeholder=" أدخل كلمة السر"
              register={register}
              error={errors.password}
            />
            <Input
              title="تأكيد كلمة السر"
              label="passwordConfirmation"
              placeholder=" أدخل تأكيد كلمة السر"
              register={register}
              error={errors.passwordConfirmation}
            />
            <Input
              title=" الرمز السري"
              label="key"
              placeholder=" أدخل  الرمز السري"
              register={register}
              error={errors.key}
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
