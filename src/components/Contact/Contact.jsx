import React, { useState } from "react";
import style from "./Contact.module.css";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";

Modal.setAppElement("#root");

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };

  const confirmDelete = async () => {
    try {
      await dispatch(deleteContact(id));
      setShowModal(false);
      toast.success("Contact deleted successfully!");
    } catch (error) {
      console.error("Failed to delete contact", error);
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div className={style.contactContainer}>
      <div>
        <div className={style.contactItem}>
          <IoMdPerson className={style.iconPerson} />
          <span>{name}</span>
        </div>
        <div className={style.contactItem}>
          <FaPhoneAlt className={style.iconPhone} />
          <span>{number}</span>
        </div>
      </div>
      <button className={style.btn} onClick={handleDelete} disabled={loading}>
        {loading ? "Deleting..." : "Delete"}
      </button>
      {error && <div className={style.error}>Error: {error}</div>}

      <Modal
        isOpen={showModal}
        onRequestClose={cancelDelete}
        className={style.modal}
        overlayClassName={style.overlay}
      >
        <div className={style.modalContent}>
          <p>Are you sure you want to delete this contact?</p>
          <div className={style.modalButtons}>
            <button className={style.confirmButton} onClick={confirmDelete}>
              Confirm
            </button>
            <button className={style.cancelButton} onClick={cancelDelete}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;


