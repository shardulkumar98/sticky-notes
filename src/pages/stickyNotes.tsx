import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useState } from "react";

const StickyNotes = () => {
  const [data, setData] = useState([{}])
  // console.log('data', data)
  // const notes = [
  //   {
  //     title: "Test Note",
  //     note: "something in the sticky note....",
  //   },
  //   {
  //     title: "Test Note",
  //     note: "something in the sticky note....",
  //   },
  //   {
  //     title: "Test Note",
  //     note: "something in the sticky note....",
  //   },
  // ];

  const noteVariant = {
    hidden:{
      opacity: 0,
      // x: '-100vw'
    },
    visible:{
      opacity: 1,
      // x: 0,
      transition: {
        // delay: 1.5,
        duration: 2,
        // ease: 'easeInOut'
       
      }

    }
  }



  return (
    <div className="flex flex-col ">
      <Navbar setData={setData} />
      <div className="p-5 flex flex-wrap gap-5 w-full ">
        {data?.slice(1).map((e: any, index: number) => (
          <motion.div variants={noteVariant} drag dragConstraints={{top: 0, bottom:0, left: 0, right:0}} initial='hidden' animate='visible' key={index} className="border-2 border-black w-60 h-80 p-2">
            <div className="text-center text-xl font-semibold">{e?.title}</div>
            <div>{e?.note}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StickyNotes;
