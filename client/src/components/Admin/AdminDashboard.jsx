import { React, useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import { supabase } from '../../supabase/supabaseClient';
import AdminsTable from './AdminsTable';
import AreYouSureModal from './AreYouSureModal';
import AddAdminModal from './AddAdminModal';

export default function AdminDashboard() {
  const [isModalShown, setIsModalShown] = useState(false);
  const [isAddAdminModalShown, setIsAddAdminModalShown] = useState(false);
  const [showAdmins, setShowAdmins] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const getAdmins = async () => {
    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('role', 'admin');
    return users;
  };

  useEffect(() => {
    getAdmins().then((usersAdmins) => setShowAdmins(usersAdmins));
  }, []);

  const showAreYouSureModalHandler = (id) => {
    setIsModalShown(true);
    setSelectedAdmin(id);
  };

  const hideAreYouSureModalHandler = () => {
    setIsModalShown(false);
  };

  const deleteAdminHandler = () => {
    setShowAdmins((prev) => prev.filter((admin) => admin.id !== selectedAdmin));
    hideAreYouSureModalHandler();
  };

  const showAddNewAdminModal = () => {
    setIsAddAdminModalShown(true);
  };

  const hideAddNewAdmimModal = () => {
    setIsAddAdminModalShown(false);
  };

  return (
    <section className="flex flex-col justify-center items-center space-y-10">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <AddAdminModal
        isAddAdminModalShown={isAddAdminModalShown}
        onClose={hideAddNewAdmimModal}
      />
      <AreYouSureModal
        isModalShown={isModalShown}
        onClose={hideAreYouSureModalHandler}
        onDelete={deleteAdminHandler}
      />
      <AdminsTable admins={showAdmins} onOpen={showAreYouSureModalHandler} />
      <Button onClick={showAddNewAdminModal}>Add new admin</Button>
    </section>
  );
}
