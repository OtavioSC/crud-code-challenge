export default function Modal() {
  return (
    <div className="w-[450px] h-[170px] flex flex-col bg-white border rounded-xl p-4 gap-2 justify-center">
      <h1 className="text-xl font-bold mb-2">Welcome to CodeLeap network!</h1>
      <form className="flex flex-col gap-3">
        <label>Please enter your username</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full border border-black rounded-md py-0.5 pl-2 pr-3"
        />
        <button
          className="w-[111px] h-[28px] bg-[#7695EC] text-white font-bold rounded-md self-end  disabled:bg-gray-300 "
          disabled={true}
        >
          ENTER
        </button>
      </form>
    </div>
  );
}
