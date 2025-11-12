import { useState } from "react";
import FillterPopup from "./FillterPopup";
import CloseIcon from '@mui/icons-material/Close';


export default function AddminNav() {
    const [isClick, setIsClick] = useState(null)
    const actionbutton = [
        {
            id: 1,
            name: "Date",
            icon: isClick === 1 ? <CloseIcon /> : <BarIcon />,
            
        },
        {
            id: 2,
            name: "Category",
            icon: isClick === 2 ? <CloseIcon /> : <BarIcon />,

        },
        {
            id: 3,
            name: "Stock",
            icon: isClick === 3 ? <CloseIcon /> : <BarIcon />,

        },
        {
            id: 4,
            name: "Brand",
            icon: isClick === 4 ? <CloseIcon /> : <BarIcon />,

        },
        {
            id: 5,
            name: "By Sale",
            icon: isClick === 5 ? <CloseIcon /> : <BarIcon />,
        },
    ]
    return (
        <div>
            <div className="flex justify-between border-2 p-4 rounded-2xl text-[#000000]  bg-[#dbffcc]">

                {actionbutton.map((button, index) => (

                    <div key={index}>
                        <Button
                            onClick={() => setIsClick(button.id)}
                        >
                            {button.icon}
                            {button.name}
                        </Button>
                        {isClick && <FillterPopup info={{ name: "Catgory" }} />}
                    </div>
                ))}

            </div>
        </div>
    )
}


function BarIcon({ className = "" }) {
    return (
        <div className={`flex flex-col items-center justify-center gap-1 p-1 ${className}`}>
            {/* Top bar - longest */}
            <span className="block h-1 w-8 rounded-full bg-gray-700"></span>
            {/* Middle bar - medium */}
            <span className="block h-1 w-6 rounded-full bg-gray-700"></span>
            {/* Bottom bar - shortest */}
            <span className="block h-1 w-4 rounded-full bg-gray-700"></span>
        </div>
    );
}

function Button({ children, onClick }) {
    return (
        <button
            className="flex text-2xl text-gray-700 bg-[#d9d9d9] p-2"
            style={{
                borderRadius: "15px"
            }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}