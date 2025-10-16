export default function DelivaryCard ({currierInfo={
    name: "Currier name",
    successRateing: 0,
    toatl: 0,
    success: 0,
    cancelled: 0,
    parchen: 45

}}) {
    return (
        <div className="w-60 border border-gray-200 rounded-2xl shadow-md  font-sans text-black text-left">

            <h2 className="text-lg font-semibold mb-2 p-4">{currierInfo?.name}</h2>
            <hr className="w-full text-gray-200" />
            <div className="px-4">
                <p className="text-green-600 text-sm font-medium">Success Rate: {currierInfo?.successRateing} %</p>
                <p className="text-sm">Total: {currierInfo?.toatl}</p>
                <p className="text-sm">Success: {currierInfo?.success}</p>
                <p className="text-sm  mb-2">Cancelled: {currierInfo?.cancelled}</p>
            </div>
            <hr className="w-full text-gray-200" />
            <div className="w-[85%] h-2 bg-gray-200 rounded my-2 mx-4">
                <div className={`h-full bg-green-500 rounded  w-[${currierInfo?.parchen}%]`}></div>
            </div>
        </div>
    )
}