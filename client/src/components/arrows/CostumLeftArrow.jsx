import { HiArrowLeft } from 'react-icons/hi2'

export default function CustomLeftArrow({onClick}) {
  return (
    <button
      onClick={onClick}
      className=" absolute mx-1 md:mx-0 top-[80px] left-0 m-auto w-20 h-44 bg-green-900/80 text-white font-bold text-2xl flex justify-center items-center rounded-md"
      aria-label="Next"
    >
      <HiArrowLeft className=" text-2xl" />
    </button>
  );
}