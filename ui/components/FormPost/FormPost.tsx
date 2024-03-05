import Button from "../Button/Button";
import Input from "../Input/Input";

export default function FormPost() {
  return (
    <div className="w-[750px] h-[300px] p-6 border border-black rounded-lg">
      <h2 className="text-2xl font-bold">What's on your mind?</h2>
      <form className="flex flex-col gap-2 pt-4">
        <label>Title</label>
				<Input type="text" placeholder="Hello world"/>
        <label>Content</label>
        <textarea className="border border-black rounded-md mb-2 p-4" />
        <Button title="create" disable={false} />
      </form>
    </div>
  );
}
