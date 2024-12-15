import React from "react";
import { SubHead } from "../Framwork";
import { Table } from "../../Table/Table";

export const Tables = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-start ">
      <SubHead>Tables</SubHead>
      <Table>
        <thead>
          <Table.Th>#id</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Last</Table.Th>
          <Table.Th>Date Of Birth</Table.Th>
          <Table.Th>City</Table.Th>
        </thead>
        <tbody>
          <tr>
            <Table.Th>001</Table.Th>
            <Table.Td>Djaafri</Table.Td>
            <Table.Td>Fouzi</Table.Td>
            <Table.Td>30:04:1999</Table.Td>
            <Table.Td>Oum El Bouaghi</Table.Td>
          </tr>
          <tr>
            <Table.Th>001</Table.Th>
            <Table.Td>Djaafri</Table.Td>
            <Table.Td>Fouzi</Table.Td>
            <Table.Td>30:04:1999</Table.Td>
            <Table.Td>Oum El Bouaghi</Table.Td>
          </tr>
          <tr>
            <Table.Th>001</Table.Th>
            <Table.Td>Djaafri</Table.Td>
            <Table.Td>Fouzi</Table.Td>
            <Table.Td>30:04:1999</Table.Td>
            <Table.Td>Oum El Bouaghi</Table.Td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
