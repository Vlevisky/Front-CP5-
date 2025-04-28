import { Icon } from "@iconify/react";
import { useState } from "react";

export default function FakeUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    urlPhoto: ""
  });

  async function loadUser() {
    console.log("Botão de refresh clicado");
    
      const resp = await fetch("https://randomuser.me/api/");

      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
      }

      const data = await resp.json();
      const fakeUser = data.results[0];
      setUser({
        name: fakeUser.name.first + " " + fakeUser.name.last,
        email: fakeUser.email,
        username: fakeUser.login.username,
        urlPhoto: fakeUser.picture.medium
      });
  }

  return (
    <div className="flex flex-col justify-between bg-white p-4 shadow-md rounded-lg w-64">
      <div className="flex gap-4 items-center">
        <div>
          <img
            src={user.urlPhoto || undefined}
            alt="Foto do usuário"
            className="w-16 h-16 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-bold text-gray-700">
            {user.name || "Nome"}
          </div>
          <div className="text-sm text-gray-500">
            {user.username ? `@${user.username}` : "@usuario"}
          </div>
          <div className="text-sm text-gray-400">
            {user.email || "email@exemplo.com"}
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button onClick={loadUser}>
          <Icon
            icon="mdi:refresh"
            className="text-blue-500 hover:text-blue-700 cursor-pointer text-2xl"
          />
        </button>
      </div>
    </div>
  );
}