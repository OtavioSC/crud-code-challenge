import React from "react";
import Button from "@/components/Button/Button";

export default function Modal() {
  const [username, setUsername] = React.useState("");

  return (
    <div className="w-[450px] h-[170px] flex flex-col bg-white border rounded-xl p-4 gap-2 justify-center">
      <h1 className="text-xl font-bold mb-2">Welcome to CodeLeap network!</h1>
      <form className="flex flex-col gap-3">
        <label>Please enter your username</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full border border-black rounded-md py-0.5 pl-2 pr-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button title="enter" disable={!username}/>
      </form>
    </div>
  );
}
