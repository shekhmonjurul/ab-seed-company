import { useLocation} from "react-router-dom"
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Input({ variant = "big-width", labelname, placeholder, ...props }) {

    const pathname = useLocation().pathname
    const phoneNumber = props.value;
     const whatsappLink = `https://wa.me/+88${phoneNumber}`;

    const handelCall = () => {
        window.location.href = `tel:${phoneNumber}`
    }

    const handelWathsapp = ()=>{
        window.open(whatsappLink, "_blank")
    }

    if (variant === "small-width") {
        return (
            <label className="flex flex-col justify-start items-start">
                {labelname}
                <input
                    name="var"
                    placeholder={placeholder}
                    className="border-gray-200 border-2 rounded-2xl w-[120px] h-10 p-4 mt-2 focus:border-black focus:outline-0 text-center"
                    {...props}
                />
            </label>
        )
    } else if (variant === "big-width") {
        return (
            <label className="flex flex-col justify-start items-start relative">
                {labelname}

                <input
                    type="text"
                    name="var"
                    placeholder={placeholder}
                    className="border-gray-200 border-1 rounded-[8px] w-[400px] h-10 p-4 mt-2 focus:border-green-700 focus:border-1 focus:outline-2 focus:outline-offset-1 text-justify"
                    {...props}
                />
                {
                    (pathname === "/addmin/ecom/order/open" && labelname === "Mobile Number") ? <div
                        className="absolute right-3 top-[50%] text-green-600"
                    >
                        <button className="mr-3" onClick={handelCall}>
                            <CallIcon />
                        </button>
                        <button onClick={handelWathsapp}>
                            <WhatsAppIcon />
                        </button>
                    </div> : ""
                }
            </label>
        )
    } else if (variant === "textarea") {
        return (
            <label className="flex flex-col justify-start items-start mt-4">
                {labelname}

                <textarea
                    name="textarea"
                    placeholder={placeholder}
                    className="border-gray-200 border-1 rounded-[8px] w-[400px] h-24 px-2 pt-1 mt-2 focus:border-green-700 focus:outline-2 focus:outline-offset-1 text-justify"
                    {...props}

                ></textarea>
            </label>
        )
    } else {
        return (
            <div className="flex flex-col justify-center items-center bg-white text-2xl text-black">
                <h1>Enter the crorect pops</h1>
                <div className="my-4 text-left">
                    <pre>
                        variant: string
                        <br />
                        small-width, big-width, textarea
                        <br />
                        <br />
                        labelname: string
                        <br />
                        placeholder: string
                    </pre>
                </div>

            </div>
        )
    }

}