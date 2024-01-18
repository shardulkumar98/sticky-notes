import React from "react";
import NoteSvg from "../assets/svg/notes";

const Navbar = () => {
  const addStickyNotes = () => {
    //Do Something here...
  };

  return (
    <div className="flex justify-between p-10 bg-[#EEC759] w-full text-center">
      <div>
        <NoteSvg />
      </div>
      <div>Sticky Notes</div>
      <div onClick={addStickyNotes}>Add More</div>
    </div>
  );
};

export default Navbar;
