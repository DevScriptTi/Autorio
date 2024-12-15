import React from "react";

export const Info = ({ item }) => {
  return (
    <div className="flex flex-col w-[350px]">
      <div>
        <Info.Subhead>معلومات المرجع</Info.Subhead>
        <Info.Items>
          <Info.Title>المرجع</Info.Title>
          <Info.Body>{item.product.reference}</Info.Body>
        </Info.Items>
        <Info.Items>
          <Info.Title>إسم النرجع</Info.Title>
          <Info.Body>{item.product.name}</Info.Body>
        </Info.Items>
        <Info.Items>
          <Info.Title>نوع المرجع</Info.Title>
          <Info.Body>{item.product.product_category.name}</Info.Body>
        </Info.Items>
        <Info.Subhead>معلومات المنتج </Info.Subhead>
        <Info.Items>
          <Info.Title>سعر المنتج</Info.Title>
          <Info.Body>{item.price}</Info.Body>
        </Info.Items>
        <Info.Items>
          <Info.Title>وصف المنتج</Info.Title>
          <Info.Body>{item.description}</Info.Body>
        </Info.Items>
        <Info.Items>
          <Info.Title>كمية المنتج</Info.Title>
          <Info.Body>{item.stock}</Info.Body>
        </Info.Items>
      </div>
    </div>
  );
};

Info.Subhead = ({ children }) => {
  return <h2 className="text-title-large text-light-primary dark:text-dark-primary mb-2">{children}</h2>;
};

Info.Items = ({ children }) => {
  return <div className="flex flex-col gap-2 mb-4">{children}</div>;
};
Info.Title = ({ children }) => {
  return <h3 className="text-lable-large text-light-on-surface-variant dark:text-dark-on-surface-variant">{children}</h3>;
};
Info.Body = ({ children }) => {
  return <span className="text-body-large font-semibold text-light-on-surface dark:text-dark-on-surface">{children}</span>;
};
