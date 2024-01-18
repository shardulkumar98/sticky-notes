import { motion } from "framer-motion";
import NoteSvg from "../assets/svg/notes";
import AddMore from "../assets/svg/add";
import { Input, Modal } from "antd";
import { useState } from "react";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const addStickyNotes = () => {
    //Do Something here...
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex justify-between p-10 bg-[#EEC759] w-full text-center">
        <div>
          <NoteSvg />
        </div>
        <div>Sticky Notes</div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer"
          onClick={addStickyNotes}
        >
          <AddMore />
        </motion.div>
      </div>
      <Modal
        title="Add Notes"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true }}
      >
        <Input.TextArea rows={15} placeholder="write here..." />
        <button>submit</button>
      </Modal>
    </>
  );
};

export default Navbar;
