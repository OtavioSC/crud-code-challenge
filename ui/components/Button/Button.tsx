import { JSXElementConstructor } from "react";

interface ButtonProps {
  title: string;
  disable: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="w-[111px] h-[28px] bg-[#7695EC] text-white font-bold rounded-md self-end disabled:bg-gray-300 uppercase"
      disabled={props.disable}
    >
      {props.title}
    </button>
  );
}
