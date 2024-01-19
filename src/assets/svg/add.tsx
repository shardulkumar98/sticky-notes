import { motion } from "framer-motion";
const AddMore = (props: any) => {
  const svgVariant = {
    hidden: {
      opacity: 0,
      rotate: 180,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const pathVariant = {
    hidden: {
      opacity: 0,
      pathLenth: 0,
    },
    visible: {
      opacity: 1,
      pathLenth: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.svg
      variants={svgVariant}
      initial="hidden"
      animate="visible"
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 512 512"
      {...props}
    >
      <motion.path
        variants={pathVariant}
        d="M247.7 1.4C239.4 4.5 233 11.7 231.1 20c-.7 2.9-1.1 40.8-1.1 107.2v102.7l-105.2.3c-94 .3-105.7.5-108.8 1.9-5.2 2.4-9.7 6.5-12.8 11.8C.9 247.8.5 249.6.5 256c0 6.4.4 8.2 2.7 12.1 3.1 5.3 7.6 9.4 12.8 11.8 3.1 1.4 14.8 1.6 108.8 1.9l105.2.3v102.4c0 70.2.3 104 1.1 107.5 1.4 6.4 6 12.5 12.4 16.5 4.3 2.6 5.7 3 12.4 3 6.5 0 8.3-.4 12.2-2.7 5.3-3.1 9.4-7.6 11.8-12.8 1.4-3.1 1.6-14.8 1.9-108.7l.3-105.2 105.2-.3c93.9-.3 105.6-.5 108.7-1.9 5.2-2.4 9.7-6.5 12.8-11.8 2.3-3.9 2.7-5.7 2.7-12.1 0-6.4-.4-8.2-2.7-12.1-3.1-5.3-7.6-9.4-12.8-11.8-3.1-1.4-14.8-1.6-108.7-1.9l-105.2-.3-.3-105.2c-.3-115.4.1-108-6.3-115.5-6.4-7.6-18.9-11.1-27.8-7.8z"
      />
    </motion.svg>
  );
};
export default AddMore;
