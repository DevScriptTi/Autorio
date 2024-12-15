import React from "react";
import { Table } from "../../../../DevScript/Table/Table";
import { Delete } from "./Delete";
import { Edit } from "../edit/Edite";
import { View } from "../view/View";
import { AddPicture } from "../addPicture/AddPicture";
import { isAdmin } from "../../../../helpers/Algo/Auth";

export const ItemsTable = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Table.Th>المعرف</Table.Th>
          <Table.Th>المرجع </Table.Th>
          <Table.Th>إسم المرجع</Table.Th>
          <Table.Th>صنف المرجع</Table.Th>
          <Table.Th>السعر</Table.Th>
          <Table.Th>الكمية</Table.Th>
          <Table.Th>الإعدادات</Table.Th>
        </tr>
      </thead>
      <tbody>
        {data.data?.map((item) => (
          <tr key={item.id}>
            <Table.Th>{item.id}</Table.Th>
            <Table.Td>{item.product.reference}</Table.Td>
            <Table.Td>{item.product.name}</Table.Td>
            <Table.Td>{item.product.product_category.name}</Table.Td>
            <Table.Td>{item.price}</Table.Td>
            <Table.Td>{item.stock}</Table.Td>
            <Table.Td>
              <div className="flex justify-center gap-2">
                <Delete id={item.id} />
                <Edit item={item}/>
                <View item={item}/>
              </div>
            </Table.Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
