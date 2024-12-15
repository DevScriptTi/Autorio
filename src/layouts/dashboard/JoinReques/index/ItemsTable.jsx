import React from "react";
import { Table } from "../../../../DevScript/Table/Table";
import { IconButton } from "../../../../DevScript/Buttons/IconButton";
import { Key, Plus, Trash2 } from "lucide-react";
import { CreateKey } from "./CreateKey";
import { Delete } from "./Delete";

export const ItemsTable = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Table.Th>المعرف</Table.Th>
          <Table.Th>رقم السجل التجاري</Table.Th>
          <Table.Th>القب</Table.Th>
          <Table.Th>الإسم</Table.Th>
          <Table.Th>تاريخ الميلاد</Table.Th>
          <Table.Th>العنوان</Table.Th>
          <Table.Th>الإقامة</Table.Th>
          <Table.Th> رقم الهاتف</Table.Th>
          <Table.Th> الإعدادات</Table.Th>
        </tr>
      </thead>
      <tbody>
        {data.data?.map((item) => (
          <tr key={item.id}>
            <Table.Th>{item.id}</Table.Th>
            <Table.Td>{item.nrc}</Table.Td>
            <Table.Td>{item.name}</Table.Td>
            <Table.Td>{item.last}</Table.Td>
            <Table.Td>{item.dateOfBirth}</Table.Td>
            <Table.Td>{item.address}</Table.Td>
            <Table.Td>
              {item.city.wilaya.name} - {item.city.name}
            </Table.Td>
            <Table.Td>{item.phone}</Table.Td>
            <Table.Td>
              <div className="flex gap-2">
                <Delete id={item.id} />
                <CreateKey id={item.id}/>
              </div>
            </Table.Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
