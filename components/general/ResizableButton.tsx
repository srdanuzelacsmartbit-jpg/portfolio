import { useState } from "react";
import Vehicles from "@/public/Vehicles";

export default function ResizableButton() {
  // State to manage the current size (e.g., 'small' or 'large')
  const [size, setSize] = useState("small");

  const handleClick = () => {
    // Toggle the size on each click
    setSize(size === "small" ? "large" : "small");
  };

  const vehicles = <Vehicles
                width={58}
                height={58}
                className="text-green-500"
                variant="van"
              />

  return (
    <div className="absolute">
      <button onClick={handleClick}>
        {size === "small" ? (
          <div className="flex justify-center mx-auto mt-10">
            <div
              className="flex relative w-20 h-20 border-2 border-gray-500 rounded-2xl items-center
              justify-center bg-white cursor-pointer p-2"
            >
              {vehicles}
              {/* TROUGAO */}
              <div className="absolute -bottom-4.5 left-1/2 transform -translate-x-1/2">
                <div
                  className="w-0 h-0 border-l-18 border-l-transparent border-r-16 
          border-r-transparent border-t-18 border-gray-500"
                ></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center mx-auto mt-10">
            <div
              className="absolute h-60 w-78 text-xl text-gray-600 left-0 top-[-205] 
            rounded-2xl bg-white border-gray-500 border-2"
            >
              {/* TOVARNA LISTA */}
              <div className="relative justify-between text-left p-3">
                <ul className="max-h-53 text-xl overflow-auto">
                  {Array.from({ length: 20 }, (_, i) => (
                    <li key={i} className="">
                      Item {i++}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="flex relative w-78 h-20 border-2 border-gray-500 rounded-2xl items-center
       bg-white cursor-pointer justify-between pl-[9.5px] pr-7"
            >
              {vehicles}
              <div className="flex-1 flex-col text-xl text-gray-600">
                <p>Kola br 1.</p>
                <p>BG-123-456</p>
              </div>
              {/* TROUGAO */}
              <div className="absolute -bottom-4.5 left-1/8 transform -translate-x-1/2">
                <div
                  className="w-0 h-0 border-l-18 border-l-transparent border-r-16 
          border-r-transparent border-t-18 border-gray-500"
                ></div>
              </div>
            </div>
          </div>
        )}
      </button>
    </div>
  );
}
