import { useEffect, useState } from 'react';
import Container from '../container/Container';

export default function PopupForm({ handelPopup }) {
  const [imgename, setImgename] = useState('');
  const handelFile = e => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImgename(url);
  };

  return (
    <div className="my-4 w-[300px] flex flex-col rounded-lg  bg-gray-700 mobile-card">
      <Container>
        <form>
          {imgename ? (
            <img
              src={imgename}
              alt="Product Imge"
              className="w-full h-50 rounded-t-lg"
            />
          ) : (
            <div className="w-full h-50 object-cover rounded-t-md flex flex-col justify-center items-center bg-gray-700 shadow-2xl ">
              <label htmlFor="imgename">Select Imge </label>
              <input
                type="file"
                name="imgename"
                id="imgename"
                accept=".png, .jpg"
                className="hidden"
                onChange={handelFile}
              />
              {console.log('img: ', imgename)}
            </div>
          )}

          <div className="flex justify-center items-center my-3 ">
            <input
              type="text"
              id="caragoryname"
              placeholder="Enter Catarogy Name"
              className="w-full bg-gray-500 p-2 rounded-full"
            />
          </div>

          <div className="flex justify-center items-center my-3">
            <input
              type="text"
              name="shortdecription"
              id="shortdecription"
              placeholder="Type a short decription"
              className=" w-full bg-gray-500 p-2 rounded-full"
            />
          </div>

          <div className="flex justify-center items-center my-3 ">
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Enter Price"
              className="w-full bg-gray-500 p-2 rounded-full"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              onClick={handelPopup}
              className="bg-gray-500 rounded w-[100px] my-4"
            >
              Submit
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}
