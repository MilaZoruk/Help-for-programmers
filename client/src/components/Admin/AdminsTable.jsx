/* eslint-disable react/prop-types */
import { Button, Table } from 'flowbite-react';
import { React } from 'react';

export default function AdminsTable({ onOpen, admins }) {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Полное имя</Table.HeadCell>
        <Table.HeadCell>Имя пользователя</Table.HeadCell>
        <Table.HeadCell>Email</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {admins.length !== 0 &&
          admins.map((admin) => (
            <Table.Row
              key={admin.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {admin.first_name && admin.last_name
                  ? `${admin.first_name} ${admin.last_name}`
                  : '-'}
              </Table.Cell>
              <Table.Cell>{admin.user_name ? admin.user_name : '-'}</Table.Cell>
              <Table.Cell>{admin.email}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => onOpen(admin.id)} color="failure">
                  Удалить
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  );
}
