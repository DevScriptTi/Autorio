import React from "react";
import { Table } from "../../../../DevScript/Table/Table";
import { Delete } from "./Delete";
import { View } from "../view/View";
import { isAdmin } from "../../../../helpers/Algo/Auth";
import {Edite} from "../edit/Edite"
export const ItemsTable = ({ data }) => {
  const isadmin = isAdmin() 
  return (
    <Table>
      <thead>
        <tr>
          <Table.Th>المعرف</Table.Th>
          <Table.Th>القب</Table.Th>
          <Table.Th>الإسم</Table.Th>
          <Table.Th>نوع التوصيل</Table.Th>
          <Table.Th>البريد الإلكتروني</Table.Th>
          <Table.Th>رقم الهاتف</Table.Th>
          <Table.Th>الحالة</Table.Th>
          <Table.Th>الإقامة</Table.Th>
          <Table.Th>إسم المنتج</Table.Th>
          <Table.Th>مرجع</Table.Th>
          <Table.Th>السعر الكلي</Table.Th>
          <Table.Th>العدد</Table.Th>
          <Table.Th>الإعدادات</Table.Th>
        </tr>
      </thead>
      <tbody>
        {data.data?.map((item) => (
          <tr key={item.id}>
            <Table.Th>{item.id}</Table.Th>
            <Table.Td>{item.order_details.name}</Table.Td>
            <Table.Td>{item.order_details.last}</Table.Td>
            <Table.Td>{item.order_details.deliveryType}</Table.Td>
            <Table.Td>{item.order_details.email}</Table.Td>
            <Table.Td>{item.order_details.phone}</Table.Td>
            <Table.Td>{item.order_details.status}</Table.Td>
            <Table.Td>{item.city.wilaya.name} - {item.city.name}</Table.Td>
            <Table.Td>{item.item.product.name}</Table.Td>
            <Table.Td>{item.item.product.reference}</Table.Td>
            <Table.Td>{item.price}</Table.Td>
            <Table.Td>{item.number}</Table.Td>
            <Table.Td>
              <div className="flex justify-center gap-2">
                {isadmin && (
                  <>
                    {/* <Delete id={item.id} /> */}
                    {/* <Edite item={item}/> */}
                    {/* <AddPicture item={item}/> */}
                  </>
                )}
                {/* <View  item={item}/> */}
              </div>
            </Table.Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
