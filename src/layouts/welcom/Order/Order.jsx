import { ArrowBigLeft, ArrowBigRight, CheckCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { axiosClient } from "../../../Http/axiosClient";
import { useForm } from "react-hook-form";
import { Input } from "../../../DevScript/FormElements/Inputs/Input";
import { setWilayas } from "../../../StateManagement/Slices/Extras/WilayasSlice";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "../../../DevScript/FormElements/Select/Select";
import { FilledButton } from "../../../DevScript/Buttons/FilledButton";
import { Modal } from "../../../DevScript/Modal/Modal";
import { showModal } from "../../../helpers/Dom/modal";

export const Order = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [delivery, setDelivery] = useState("home");
  const [number, setNumber] = useState(1);
  const [deliveryPrice, setDeliveryPrice] = useState(1000);
  const getWilayas = async () => {
    try {
      const { data } = await axiosClient("api/wilayas");
      dispatch(setWilayas(data.data));
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    try {
      const response = await axiosClient(`api/items/${id}`);
      setProduct(response.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  console.log(product);
  useEffect(() => {
    getWilayas();
    getData();
  }, []);
  return (
    <div className=" flex items-start gap-12   w-full px-10 py-8 text-dark-on-surface">
      {product !== null && (
        <>
          <Order.Image items={product.product.pictures} />
          <div className="flex-1 flex flex-col gap-10">
            <div className="px-8 py-6 rounded-xl bg-light-surface-container-high dark:bg-dark-surface-container-high">
              <Order.Info title={"المنتج"}>
                <Order.Item title={"إسم المرج "}>
                  {product.product.name}
                </Order.Item>
                <Order.Item title={"المرج"}>
                  {product.product.reference}
                </Order.Item>
                <Order.Item title={"صنف المرجع"}>
                  {product.product.product_category.name}
                </Order.Item>
                <Order.Item title={"السعر"}>{product.price} دينار</Order.Item>
                <Order.Item title={"وصف"}>{product.description}</Order.Item>
              </Order.Info>
            </div>
            <div className="flex-1 px-8 py-6 rounded-xl bg-light-surface-container-high dark:bg-dark-surface-container-high">
              <div className="flex gap-10">
                <Order.Info title="معلومات المستلم">
                  <Order.Form
                    item={product}
                    setDelivery={setDelivery}
                    setNumber={setNumber}
                    setDeliveryPrice={setDeliveryPrice}
                  />
                </Order.Info>
                <Order.Info title="معلومات السعر">
                  <Order.Item title={"سعر المنتج"}>{product.price}</Order.Item>
                  <Order.Item title={"سعر التوصيل"}>{deliveryPrice}</Order.Item>
                  <Order.Item title={"سرع الكلي"}>
                    {+product.price * number + deliveryPrice}
                  </Order.Item>
                </Order.Info>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Order.Form = ({
  item,
  setDelivery = () => {},
  setNumber = () => {},
  setDeliveryPrice = () => {},
}) => {
  const wilayas = useSelector((state) => state.wilayas);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors , isSubmitting },
  } = useForm({
    defaultValues: {
      number: 1,
    },
  });
  const watchDeliveryType = watch("deliveryType");
  const watchNumber = watch("number");
  const onSubmit = async (data) => {
    try {
      const response = await axiosClient.post(`api/order/${item.id}`, {
        name: data.name,
        last: data.last,
        phone: data.phone,
        email: data.email,
        city_id: data.city_id,
        deliveryType: data.deliveryType,
        number: data.number,
      });
      showModal('thankmessage')
      console.log(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    setDelivery(watchDeliveryType);
    setNumber(watchNumber);
    watchDeliveryType == "home"
      ? setDeliveryPrice(1000)
      : setDeliveryPrice(600);
  }, [watchDeliveryType, watchNumber]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${isSubmitting && 'animate-pulse'} min-w-[350px] max-w-[700px] max-sm:px-4 m-auto flex flex-col gap-8`}
    >
      <div className="flex gap-6 ">
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
      <Input
        title="رقم الهاتف"
        label="phone"
        placeholder=" أدخل رقم الهاتف"
        register={register}
        error={errors.phone}
      />
      <Input
        title="البريد الإلكتروني"
        label="email"
        placeholder=" أدخل البريد الإلكتروني"
        register={register}
        error={errors.email}
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
      <Select
        title="طريقة توصيل"
        label="deliveryType"
        placeholder=" إختر طريقة توصيل"
        register={register}
        error={errors.deliveryType}
      >
        <Select.Option
          option={"المنزل"}
          value={"home"}
          label={"deliveryType"}
          setValue={setValue}
        />
        <Select.Option
          option={"المكتب"}
          value={"office"}
          label={"deliveryType"}
          setValue={setValue}
        />
      </Select>
      <Input
        title="العدد"
        label="number"
        placeholder="عدد المنتجات التي تريدها"
        register={register}
        error={errors.number}
      />
      <FilledButton type="submit">إجراء الطلب</FilledButton>
      <Modal id="thankmessage">
        <div className="flex flex-col gap-6 bg-light-surface dark:bg-dark-surface py-6 px-4 rounded-lg">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-title-large text-light-primary dark:text-dark-primary font-bold">
              شكرا على طلبكم
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
  );
};
Order.Info = ({ children, title }) => {
  return (
    <div className="flex flex-col gap-9">
      <h1 className="text-headline-large text-light-primary dark:text-dark-primary font-semibold">
        {title}
      </h1>
      <div className="w-96 grid grid-cols-2 gap-6">{children}</div>
    </div>
  );
};

Order.Item = ({ children, title }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lable-large text-light-on-surface-variant dark:text-dark-on-surface-variant">
        {title}
      </h3>
      <span className="text-title-large text-light-on-surface  dark:text-dark-on-surface ">
        {children}
      </span>
    </div>
  );
};

Order.Image = ({ items = [] }) => {
  const [imageIndex, setImageIndex] = useState(0);
  console.log(items.length);
  return (
    <div className="group h-[600px] w-[400px] relative overflow-hidden bg-light-surface-container-highest dark:bg-dark-surface-container-highest">
      {items.length > 0 && (
        <img
          className="w-full"
          src={`${import.meta.env.VITE_BACK_BASE_URL}/storage/${
            items[imageIndex].path
          }`}
          alt={`${items[imageIndex].path}`}
        />
      )}
      <div className="invisible group-hover:visible grid grid-cols-3 justify-items-center justify-center items-center  h-10 w-full text-light-on-surface dark:text-dark-on-surface bg-light-surface-container/50  dark:bg-dark-surface-container/50 absolute z-10 bottom-0 transition-all duration-200 ease-linear">
        {imageIndex > 0 && (
          <ArrowBigRight
            onClick={() => {
              setImageIndex(imageIndex - 1);
            }}
            className="fill-light-on-surface col-start-1  dark:fill-dark-on-surface"
            size={30}
          />
        )}
        <span className="text-title-large col-start-2 ">
          {imageIndex + 1} / {items.length}
        </span>
        {imageIndex < items.length - 1 && (
          <ArrowBigLeft
            onClick={() => {
              setImageIndex(imageIndex + 1);
            }}
            className="fill-light-on-surface col-start-3  dark:fill-dark-on-surface"
            size={30}
          />
        )}
      </div>
    </div>
  );
};
