import { HiArrowRight } from "react-icons/hi2";

export default function CustomRightArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className=" absolute mx-1 md:mx-0 top-[80px] right-0 m-auto w-20 h-44 bg-green-900/90 text-white font-bold  flex justify-center items-center rounded-md"
      aria-label="Next"
    >
      <HiArrowRight className="text-2xl" />
    </button>
  );
}