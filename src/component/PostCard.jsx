import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import Icon from '@mui/material/Icon';
import { useState } from 'react';
import { FaRegComment } from "react-icons/fa6";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function PostCard({profile}) {
const [tumclick, setTumcick] = useState(false)

const actionbuttons = [
    {
        name: "Shear",
        function: ()=>{
            navigator.share({
                title: "AB Seed Company",
                text: "Ab Seed Company",
                url: "http://localhost:5173/comunity"
            })
        },
        icon: <ReplyOutlinedIcon className='transform scale-x-[-1]'/>
    },
    {
        name: "Comment",
        function: ()=> console.log("i amr clike"),
        icon: <Icon component={FaRegComment} className='scale-x-[-1]' />
    },
    {
        name: "Like",
        function: ()=> {
            setTumcick(!tumclick)
        },
        icon: tumclick ? <ThumbUpIcon className='text-blue-700'/> : <ThumbUpAltOutlinedIcon />
    },
]

    return (
        <div className="bg-white border-2 text-[#7F7F7F] rounded-lg w-[375px]">
            <div className="text-black my-4">
                <div className="m-4">
                    <div className="flex items-center">
                        <img src={profile.profileimge || "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"} alt="Profile Imge" className="w-25 mr-10 h-25 rounded-full" />
                        <div className="text-left">
                            {/* variable */}
                            <h1 className='mobile-view-h1'>{profile.name || "Ab Seed Compny"}</h1>
                            <h4>{profile.time || "20 mins"}</h4>
                        </div>
                    </div>
                    <div>
                        {/* varibale */}
                        <h2>{profile.name || "নতুন অপ্রকাশিত শিপমেন্ট"}</h2>
                        <h2>{profile.date || "তারিখ: ২৮ আগস্ট & ১ সেপ্টেম্বর"}</h2>
                    </div>
                </div>

                <div>
                    <img src={profile.postimge || "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"} alt="Product Imge" className="my-4 " />
                </div>
                <div className="flex justify-center items-center">
                    {
                        actionbuttons.map((action, index) => (
                            <button type="button" onClick={action.function} key={index} className='bg-[#d9d9d9] m-4 w-[200px] p-2' style={{
                                borderRadius: "50px"
                            }}>
                                {action.icon || action.name}
                            </button>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}