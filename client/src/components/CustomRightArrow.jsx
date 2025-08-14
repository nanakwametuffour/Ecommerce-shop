import { HiArrowRight } from "react-icons/hi2";

export default function CustomRightArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className=" absolute mx-1 md:mx-0 top-5 right-0 m-auto h-10 w-10 bg-green-900 text-white font-bold  flex justify-center items-center rounded-full"
      aria-label="Next"
    >
      <HiArrowRight className="text-2xl" />
    </button>
  );
}
