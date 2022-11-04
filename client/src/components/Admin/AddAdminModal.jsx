/* eslint-disable react/prop-types */
import { Alert, Button, Label, Modal, TextInput } from "flowbite-react";
import { SignalIcon } from "@heroicons/react/24/solid";
import { React, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

export default function AddAdminModal({
  onClose,
  onAdd,
  isAddAdminModalShown,
  admins,
}) {
  const [newAdminEmail, setNewAdminEmail] = useState("");
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
        throw new Error("Такой админ уже есть");
      }

      const { data, error } = await supabase
        .from("users")
        .update({ role: "admin" })
        .eq("email", newAdminEmail)
        .single()
        .select();

      if (error) throw new Error("Не смогли найти пользователя с таким email адресом");

      setSuccessfullyAdded(true);
      onAdd((prev) => [...prev, data]);
    } catch (error) {
      setIsAddingNewAdmin(false);
      setAddingNewAdminError(error.message);
    } finally {
      setIsAddingNewAdmin(false);
      setNewAdminEmail("");
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
        {!successfullyAdded ? (
          <>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Добавить нового админа
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email адрес" />
                </div>
                <TextInput
                  id="email"
                  placeholder="example@example.com"
                  value={newAdminEmail}
                  onChange={newAdminEmailHandler}
                  required
                />
              </div>
              <div className="w-full space-y-4">
                {!successfullyAdded && (
                  <Button onClick={addNewAdmin} disabled={isAddingNewAdmin}>
                    {isAddingNewAdmin ? "Добавляем..." : "Добавить"}
                  </Button>
                )}
                {addingNewAdminError && (
                  <Alert color="failure" icon={SignalIcon}>
                    <span className="font-bold">{addingNewAdminError}</span>
                  </Alert>
                )}
              </div>
            </div>
          </>
        ) : (
          <Alert color="success" icon={SignalIcon}>
            <span className="font-bold">
              Новый админ был успешно добавлен
            </span>
          </Alert>
        )}
      </Modal.Body>
    </Modal>
  );
}
