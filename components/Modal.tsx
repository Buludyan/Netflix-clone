import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Movie } from "../typings";

function ModalWindow() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (!movie) return;

    async function fetch() {
         
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Modal open={showModal} onClose={handleClose}>
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 
          h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XMarkIcon></XMarkIcon>
        </button>
      </>
    </Modal>
  );
}

export default ModalWindow;
