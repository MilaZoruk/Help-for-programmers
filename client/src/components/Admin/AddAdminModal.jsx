/* eslint-disable react/prop-types */
import { Alert, Button, Label, Modal, TextInput } from 'flowbite-react';
import { SignalIcon } from '@heroicons/react/24/solid';
import { React, useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';

export default function AddAdminModal({
  onClose,
  onAdd,
  isAddAdminModalShown,
  admins,
}) {
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [isAddingNewAdmin, setIsAddingNewAdmin] = useState(false);
  const [successfullyAdded, setSuccessfullyAdded] = useState(false);
  const [addingNewAdminError, setAddingNewAdminError] = useState(null);

  const newAdminEmailHandler = (e) => {
    setNewAdminEmail(e.target.value);
  };

  const addNewAdmin = async () => {
    setIsAddingNewAdmin(true);
    setAddingNewAdminError(null);

    try {
      if (admins.findIndex((admin) => admin.email === newAdminEmail) !== -1) {
        throw new Error('Admin already exists');
      }

      const { data, error } = await supabase
        .from('users')
        .update({ role: 'admin' })
        .eq('email', newAdminEmail)
        .single()
        .select();

      if (error) throw new Error('Cannot find user with such email address');

      setSuccessfullyAdded(true);
      onAdd((prev) => [...prev, data]);
    } catch (error) {
      setIsAddingNewAdmin(false);
      setAddingNewAdminError(error.message);
    } finally {
      setIsAddingNewAdmin(false);
      setNewAdminEmail('');
    }
  };

  return (
    <Modal
      show={isAddAdminModalShown}
      size="md"
      popup
      onClose={() => onClose(setSuccessfullyAdded, setAddingNewAdminError)}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Add new admin
          </h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email address" />
            </div>
            <TextInput
              id="email"
              placeholder="name@company.com"
              value={newAdminEmail}
              onChange={newAdminEmailHandler}
              required
            />
          </div>
          <div className="w-full space-y-4">
            {!successfullyAdded && (
              <Button onClick={addNewAdmin} disabled={isAddingNewAdmin}>
                {isAddingNewAdmin ? 'Adding...' : 'Add new admin'}
              </Button>
            )}
            {successfullyAdded && (
              <Alert color="success" icon={SignalIcon}>
                <span className="font-bold">
                  New admin has been added successfully
                </span>
              </Alert>
            )}
            {addingNewAdminError && (
              <Alert color="failure" icon={SignalIcon}>
                <span className="font-bold">{addingNewAdminError}</span>
              </Alert>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
