/* eslint-disable react/prop-types */
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { React, useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import { makeRandomString } from '../../utils/serializeUser';

export default function AddAdminModal({ onClose, isAddAdminModalShown }) {
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminPass, setNewAdminPass] = useState('');
  const [isAddingNewAdmin, setIsAddingNewAdmin] = useState(false);
  const [successfullyAdded, setSuccessfullyAdded] = useState(false);
  const [addingNewAdminError, setAddingNewAdminError] = useState(null);

  const newAdminEmailHandler = (e) => {
    setNewAdminEmail(e.target.value);
  };

  const newAdminPassHandler = (e) => {
    setNewAdminPass(e.target.value);
  };

  const addNewAdmin = async () => {
    console.log('Adding new admin');
    setIsAddingNewAdmin(true);

    const { data, error } = await supabase.auth.signUp({
      email: newAdminEmail,
      password: newAdminPass,
    });

    if (error) {
      setIsAddingNewAdmin(false);
      setAddingNewAdminError(error);
    }

    const { data: _user, error: _error } = await supabase
      .from('users')
      .insert([
        {
          id: data.user.id,
          email: data.user.email,
          role: 'admin',
          avatar_url: `https://avatars.dicebear.com/api/croodles/${makeRandomString(
            10
          )}.svg`,
        },
      ])
      .single();

    if (_error) {
      setIsAddingNewAdmin(false);
      setAddingNewAdminError(error);
    }

    setIsAddingNewAdmin(false);
    setNewAdminEmail('');
    setNewAdminPass('');
    setSuccessfullyAdded(true);
  };

  return (
    <Modal show={isAddAdminModalShown} size="md" popup onClose={onClose}>
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
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              placeholder="••••••••"
              type="password"
              value={newAdminPass}
              onChange={newAdminPassHandler}
              required
            />
          </div>
          <div className="w-full">
            {!successfullyAdded && (
              <Button onClick={addNewAdmin} disabled={isAddingNewAdmin}>
                {isAddingNewAdmin ? 'Adding...' : 'Add new admin'}
              </Button>
            )}
            {successfullyAdded && <p>New admin has been added successfully</p>}
            {addingNewAdminError && <p>{addingNewAdminError}</p>}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
