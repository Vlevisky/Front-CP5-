import { Icon } from "@iconify/react";
import FakeUser from "./FakeUser";

function App() {
  return (
    <>
      <div className="flex items-center gap-4 p-4 bg-blue-100">
        <Icon icon="streamline:class-lesson-solid" className="text-3xl text-blue-600" />
        <span className="text-xl font-bold text-blue-700">CP5 - Webdev</span>
      </div>

      <div className="p-8">
        <div className="text-2xl font-semibold mb-4">Fake users list</div>
        <hr className="mb-6" />
        <div className="flex flex-wrap gap-8 justify-center">
          
          {[...Array(5).keys()].map((e, idx) => (
            <FakeUser key={idx} />
          ))}
       
        </div>
      </div>
    </>
  );
}

export default App;