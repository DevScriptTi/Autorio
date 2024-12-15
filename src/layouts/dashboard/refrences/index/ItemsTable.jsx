import React from "react";
import { Table } from "../../../../DevScript/Table/Table";
import { Delete } from "./Delete";
import { View } from "../view/View";
import { AddPicture } from "../addPicture/AddPicture";
import { isAdmin } from "../../../../helpers/Algo/Auth";
import {Edite} from "../edit/Edite"
export const ItemsTable = ({ data }) => {
  const isadmin = isAdmin() 
  return (
    <Table>
      <thead>
        <tr>
          <Table.Th>المعرف</Table.Th>
          <Table.Th>المرجع</Table.Th>
          <Table.Th>إسم المرجع</Table.Th>
          <Table.Th>إسم صنف المرجع</Table.Th>
          <Table.Th>الإعدادات</Table.Th>
        </tr>
      </thead>
      <tbody>
        {data.data?.map((item) => (
          <tr key={item.id}>
            <Table.Th>{item.id}</Table.Th>
            <Table.Td>{item.reference}</Table.Td>
            <Table.Td>{item.name}</Table.Td>
            <Table.Td>{item.product_category.name}</Table.Td>
            <Table.Td>
              <div className="flex justify-center gap-2">
                {isadmin && (
                  <>
                    <Delete id={item.id} />
                    <Edite item={item}/>
                    <AddPicture item={item}/>
                  </>
                )}
                <View  item={item}/>
              </div>
            </Table.Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
