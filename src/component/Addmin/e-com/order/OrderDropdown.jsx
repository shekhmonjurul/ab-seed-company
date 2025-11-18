import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const OrderDropdown = ({ onSelect }) => {
  let [active, setActive] = useState(false);

  let menuRef = useRef(null);

  useEffect(() => {
    let handleActive = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', handleActive);
    return () => {
      document.removeEventListener('mousedown', handleActive);
    };
  }, []);

  const handleSelect = value => {
    onSelect(value);
    setActive(false);
  };

  return (
    <>
      <div className="relative inline-block">
        <button
          onClick={() => setActive(!active)}
          aria-controls="drop-down"
          aria-expanded={active}
          className="flex items-center gap-1.5 drop-shadow-2xl hover:drop-shadow bg-amber-300 font-bold p-5 text-2xl"
        >
          {active ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>

        <div
          ref={menuRef}
          id="drop-down"
          className={`
          absolute left-0 bottom-full mb-2 bg-white border border-gray-400 rounded-lg shadow-lg p-3
          transition-all duration-300 origin-bottom
          ${
            active
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-0 pointer-events-none'
          }
        `}
        >
          <ul className="flex flex-col gap-2">
            <li
              onClick={() => handleSelect('Processing')}
              className="hover:bg-gray-500 hover:text-white cursor-pointer px-5 py-2 w-[200px] rounded"
            >
              Processing
            </li>
            <li
              onClick={() => handleSelect('Incomplete')}
              className="hover:bg-gray-500 hover:text-white cursor-pointer px-5 py-2 w-[200px] rounded"
            >
              Incomplete
            </li>
            <li
              onClick={() => handleSelect('Good but no response')}
              className="hover:bg-gray-500 hover:text-white cursor-pointer px-5 py-2 w-[200px] rounded"
            >
              Good but no response
            </li>

            <li
              onClick={() => handleSelect('No response')}
              className="hover:bg-gray-500 hover:text-white cursor-pointer px-5 py-2 w-[200px] rounded"
            >
              No response
            </li>
            <li
              onClick={() => handleSelect('Advance Payment')}
              className="hover:bg-gray-500 hover:text-white cursor-pointer px-5 py-2 w-[200px] rounded"
            >
              Advance Payment
            </li>
            <li
              onClick={() => handleSelect('On Hold')}
              className="hover:bg-gray-500 hover:text-white cursor-pointer px-5 py-2 w-[200px] rounded"
            >
              On Hold
            </li>
            <li
              onClick={() => handleSelect('Complete')}
              className="hover:bg-gray-500 hover:text-white cursor-pointer px-5 py-2 w-[200px] rounded"
            >
              Complete
            </li>
            <li
              onClick={() => handleSelect('Cancel')}
              className="hover:bg-gray-500 hover:text-white cursor-pointer px-5 py-2 w-[200px] rounded"
            >
              Cancel
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OrderDropdown;
