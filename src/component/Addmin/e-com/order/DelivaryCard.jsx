export default function DeliveryCard() {
    return (
        <div className="w-60 border border-gray-200 rounded-2xl shadow-md  font-sans text-black text-left">

            <h2 className="text-lg font-semibold mb-2 p-4">Pathao</h2>
            <hr className="w-full text-gray-200" />
            <div className="px-4">
                <p className="text-green-600 text-sm font-medium">Success Rate: 100%</p>
                <p className="text-sm">Total: 2</p>
                <p className="text-sm">Success: 2</p>
                <p className="text-sm  mb-2">Cancelled: 0</p>
            </div>
            <hr className="w-full text-gray-200" />
            <div className="w-[85%] h-2 bg-gray-200 rounded my-2 mx-4">
                <div className="h-full bg-green-500 rounded  w-[75%]"></div>
            </div>
        </div>
    )
}