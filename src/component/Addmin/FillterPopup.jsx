import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
export default function FillterPopup({info}) {
    const [catagorys, setCategorys] = useState(info?.data || [])
    const [_catagoyrs, set_Catagorys] = useState([])
    const [isClick, setIsClick] = useState(false)
    const [input, setInput] = useState("")
    const handleInput = (event) => {
        const { value, checked } = event.target
        if (checked) {
            set_Catagorys(prev => [...prev, value])
        }
    }
    const handleClick = () => {
        setIsClick(true)
    }
    const handelSubmit = (event) => {
        event.preventDefault()
        if (!input) return
        setCategorys(prev => [...prev, input])
        setInput("")

    }

    return (
        <div className="bg-white text-black w-60">
            <ul>
                {
                    catagorys.map((catagory, index) => (
                        <li key={index}>
                            <label
                                htmlFor={catagory}
                                className="flex justify-start">


                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    value={catagory}
                                    onChange={handleInput}
                                    className="mx-2"
                                />
                                {catagory}
                            </label>
                        </li>
                    ))
                }
            </ul>
            {
                isClick ?
                    <form action="" onSubmit={handelSubmit}>
                        <div className="flex flex-col items-start m-2">
                            <label
                                htmlFor="name"
                                className="mb-1"
                            >
                                {info?.name} Name
                                <button 
                                type="button"
                                className="ml-15 border border-gray-200 rounded-2xl"
                                onClick={()=>setIsClick(false)}
                                >
                                    <CloseIcon />
                                </button>
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="enter catagory name"
                                className="border border-gray-200 rounded-2xl px-2"
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    :
                    <button
                        className="rounded-2xl p-1 px-2 drop-shadow-2xl hover:drop-shadow " onClick={handleClick}>
                        + Add New
                    </button>
            }

        </div>
    )
}
