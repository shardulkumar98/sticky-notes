import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import NoteSvg from "../assets/svg/notes";
import AddMore from "../assets/svg/add";

const Navbar = ({ setData }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, reset, handleSubmit } = useForm();

  const onhandleSubmit = (data: any) => {
    setData((pre: any) => [...pre, data]);
    reset()
    setIsModalOpen(false)
  };

  const titleVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <div className="flex justify-between p-10 bg-[#EEC759] w-full text-center sticky top-0">
        <div>
          <NoteSvg />
        </div>
        <motion.div
          variants={titleVariant}
          initial="hidden"
          animate="visible"
          className="font-dancing-script text-4xl"
        >
          Sticky Notes
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <AddMore />
        </motion.div>
      </div>
      {isModalOpen && (
        <div className="w-[100%] fixed h-[100vh] flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onhandleSubmit)}
            className="flex flex-col gap-5 w-2/4 p-5 rounded-[8px] bg-white "
          >
            <div className="font-dancing-script font-semibold text-2xl">
              Add Note
            </div>
            <div>
              <input
                placeholder="Title"
                {...register("title")}
                className=" w-full border-2  p-2"
              />
            </div>
            <textarea
              placeholder="write here..."
              {...register("note")}
              className=" border-2 p-2"
              rows={8}
            />
            <div className="flex justify-center gap-5 w-full">
              <button
                className="bg-lime-600 py-2 px-5 rounded text-white w-full"
                type="submit"
              >
                Save
              </button>
              <button
                className="bg-red-800 py-2 px-5 rounded text-white w-full"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;
