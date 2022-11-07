import { React, useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { supabase } from "../../supabase/supabaseClient";
import AdminsTable from "./AdminsTable";
import AreYouSureModal from "./AreYouSureModal";
import AddAdminModal from "./AddAdminModal";

import SyncLoader from "react-spinners/SyncLoader";

export default function AdminDashboard() {
  const [isModalShown, setIsModalShown] = useState(false);
  const [isAddAdminModalShown, setIsAddAdminModalShown] = useState(false);
  const [showAdmins, setShowAdmins] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [deletingAdmin, setDeletingAdmin] = useState(false);
  const [loadingAdmins, setLoadingAdmins] = useState(true);

  const override = {
    display: "block",
    marginTop: "30px",
    borderColor: "red",
  };

  const getAdmins = async () => {
    const { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("role", "admin");
    return users;
  };

  useEffect(() => {
    getAdmins().then((usersAdmins) => {
      setShowAdmins(usersAdmins);
      setLoadingAdmins(false);
    });
  }, []);

  const showAreYouSureModalHandler = (id) => {
    setIsModalShown(true);
    setSelectedAdmin(id);
  };

  const hideAreYouSureModalHandler = () => {
    setIsModalShown(false);
  };

  const deleteAdminHandler = async () => {
    setDeletingAdmin(true);

    await supabase
      .from("users")
      .update({ role: "user" })
      .eq("id", selectedAdmin)
      .single()
      .select();

    setShowAdmins((prev) => prev.filter((admin) => admin.id !== selectedAdmin));

    setDeletingAdmin(false);

    hideAreYouSureModalHandler();
  };

  const showAddNewAdminModal = () => {
    setIsAddAdminModalShown(true);
  };

  const hideAddNewAdmimModal = (
    setSuccessfullyAdded,
    setAddingNewAdminError
  ) => {
    setSuccessfullyAdded(false);
    setAddingNewAdminError(false);
    setIsAddAdminModalShown(false);
  };

  return (
    <section className="flex flex-col justify-center items-center space-y-10">
      <h2 className="text-3xl font-bold">Панель управления администраторами</h2>
      <AddAdminModal
        isAddAdminModalShown={isAddAdminModalShown}
        onClose={hideAddNewAdmimModal}
        onAdd={setShowAdmins}
        admins={showAdmins}
      />
      <AreYouSureModal
        isModalShown={isModalShown}
        onClose={hideAreYouSureModalHandler}
        onDelete={deleteAdminHandler}
        deletingAdmin={deletingAdmin}
      />
      {loadingAdmins ? (
        <SyncLoader
          color="red"
          loading={loadingAdmins}
          cssOverride={override}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <AdminsTable
            admins={showAdmins}
            onOpen={showAreYouSureModalHandler}
          />
          <button
            type="button"
            onClick={showAddNewAdminModal}
            className="text-white bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Добавить нового админа
          </button>
        </>
      )}
    </section>
  );
}
