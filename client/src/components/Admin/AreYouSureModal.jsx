/* eslint-disable react/prop-types */
import { Button, Modal } from 'flowbite-react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function AreYouSureModal({ isModalShown, onClose, onDelete, deletingAdmin }) {
  return (
    <Modal show={isModalShown} size="md" popup onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <ExclamationCircleIcon className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Уверены, что хотите удалить этого админа?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={onDelete} disabled={deletingAdmin}>
              { deletingAdmin ? 'Удаляем...' : 'Да, уверен(а)' }
            </Button>
            <Button color="gray" onClick={onClose}>
              Нет, отменить
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
