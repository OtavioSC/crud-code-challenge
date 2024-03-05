export default function Post() {
  return (
    <div className="w-[750px] h-[300px] border border-black rounded-lg mt-8">
      <div className="w-full h-[70px] bg-[#7695EC] flex">
        <h2 className="text-2xl p-6 font-bold text-white">
          My First Post at CodeLeap Network!
        </h2>
      </div>
      <div className="flex flex-col">
        <span>
          <a>@user</a>
        </span>
        <span>time</span>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
      </div>
    </div>
  );
}
