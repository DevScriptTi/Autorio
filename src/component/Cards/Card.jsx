import React, { useEffect, useState } from "react";
import { CardContext } from "./CardContext";
import { ImageOff, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  return (
    <Link to={`order/${item.id}`} className="flex flex-col  bg-light-surface-container-low dark:bg-dark-surface-container-low rounded-xl cursor-pointer overflow-hidden">
      <Card.Upp>
        <Card.Head item={item}></Card.Head>
        <Card.Info item={item} />
        <Card.Pricing item={item} />
      </Card.Upp>
      <Card.Image items={item.product.pictures} />
    </Link>
  );
};

Card.Upp = ({ children }) => {
  return <div className="flex flex-col gap-4 py-2 px-4">{children}</div>;
};

Card.Head = ({ children, item }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <span className="size-12 rounded-full overflow-hidden ">
          <img className="h-full" src="/public/vendor3.jpg" alt="profile" />
        </span>
        <div className="flex flex-col justify-between text-light-on-surface dark:text-dark-on-surface ">
          <h2 className="text-title-large">
            {item.vendor.name} {item.vendor.last}
          </h2>
          <h4 className="text-lable-large">
            {item.vendor.city.wilaya.name} - {item.vendor.city.name}
          </h4>
        </div>
      </div>
    </div>
  );
};

Card.Info = ({ item }) => {
  return (
    <div className="flex flex-col gap-3 text-light-on-surface dark:text-dark-on-surface">
      <h2 title="AIL AR LH CRETA" className="text-title-large line-clamp-1">
        {item.product.name}
      </h2>
      <span className="text-title-small">{item.product.reference}</span>
    </div>
  );
};

Card.Pricing = ({ item }) => {
  return (
    <div className="flex  gap-3  text-lable-large">
      <span className="text-light-on-surface dark:text-dark-on-surface">
        {item.price}دينار \ للقطعة
      </span>
    </div>
  );
};

Card.Image = ({ items = [] }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered && items.length > 0) {
      interval = setInterval(() => {
        setImageIndex((prevIndex) =>
          prevIndex < items.length - 1 ? prevIndex + 1 : 0
        );
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, items.length]);

  return (
    <div
      className="group size-96 relative overflow-hidden bg-light-surface-container-highest dark:bg-dark-surface-container-highest"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setImageIndex(0); 
      }}
    >
      {items.length > 0 ? (
        <img
          className="w-full"
          src={`${import.meta.env.VITE_BACK_BASE_URL}/storage/${
            items[imageIndex].path
          }`}
          alt={`${items[imageIndex].path}`}
        />
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center size-full text-light-on-surface-variant dark:text-dark-on-surface-variant">
          <span>لا توجد صورة لهذا المرجع</span>
          <ImageOff />
        </div>
      )}
    </div>
  );
};
