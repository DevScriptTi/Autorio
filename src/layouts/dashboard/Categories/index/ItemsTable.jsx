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
          <Table.Th>الإسم</Table.Th>
          <Table.Th>الإعدادات</Table.Th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item.id}>
            <Table.Th>{item.id}</Table.Th>
            <Table.Td>{item.name}</Table.Td>

            <Table.Td>
              <div className="flex justify-center gap-2">
                <Delete id={item.id} />
                <Edit item={item}/>
              </div>
            </Table.Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
