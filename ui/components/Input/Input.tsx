interface InputProps {
	type: string;
	placeholder: string;
}

export default function Input(props: InputProps) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="w-full border border-black rounded-md py-0.5 pl-2 pr-3"
    />
  );
}
