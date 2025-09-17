export default function Card({ imgsrc, catagoryname, shortdecription, price }) {

  return (
    <div className="my-4 w-[250px] flex flex-col items-center rounded-lg  bg-gray-700 mobile-card">
      <img
        src={imgsrc}
        alt="Product Image"
        className="w-full h-70 object-cover rounded-t-md"
      />

      <div className="flex flex-col gap-2 justify-center items-center my-4">
        <h3 className="text-2xl font-semibold ">{catagoryname}</h3>
        <p className="text-center">{shortdecription}</p>
        <h4 className="text-md font-bold ">{`${price} BDT`}</h4>

        <button className="rounded-[8px] bg-gray-500  py-2 mt-3 hover:text-blue-600 ">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
