export default function AddminNav() {
    const actionbutton = [
        {
            name: "Date",
            icon: <BarIcon />
        },
        {
            name: "Category",
            icon: <BarIcon />
        },
          {
            name: "Stock",
            icon: <BarIcon />
        },
          {
            name: "Brand",
            icon: <BarIcon />
        },
          {
            name: "By Sale",
            icon: <BarIcon />
        },
    ]
    return (
            <div className="flex justify-between border-2 p-4 rounded-2xl text-[#000000]">
              {
                actionbutton.map((action, index)=>(
                    <Button key={index}>
                        {action.icon}
                        {action.name}
                    </Button>
                ))
              }

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

function Button({ children }) {
    return (
        <button className="flex text-2xl text-gray-700 bg-[#d9d9d9] p-2" style={{
            borderRadius: "15px"
        }}>
            {children}
        </button>
    )
}