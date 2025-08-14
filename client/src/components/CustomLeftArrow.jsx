import { HiArrowLeft } from 'react-icons/hi2'

export default function CustomLeftArrow({onClick}) {
  return (
    <button
      onClick={onClick}
      className=" absolute mx-1 md:mx-0 top-5 left-0 m-auto h-10 w-10 bg-green-900 text-white font-bold text-2xl flex justify-center items-center rounded-full"
      aria-label="Next"
    >
      <HiArrowLeft className=" text-2xl" />
    </button>
  );
}