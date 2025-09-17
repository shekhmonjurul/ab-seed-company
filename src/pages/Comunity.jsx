import Header from "../component/Header";
import Button from "../component/Button"
import RenderList from "../component/RenderList";
import PostCard from "../component/PostCard";
import { useLocation } from "react-router-dom";


const seedCategories = [
    { name: "পপুলার পোস্ট", href: "#"  },
    { name: "রিভিউ পোস্ট ", href: "#" },
    { name: "নতুন পোস্ট করুন + ", href: "#" },
];


const posts = [
    {
        name: "Ab Seed Company",
        time: "10:30 AM",
        date: "14 September 2025",
        profileimg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        profileimge: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    },
    {
        name: "Green Agro Farm",
        time: "2:45 PM",
        date: "13 September 2025",
        profileimg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        postimg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    },
    {
        name: "Organic Growers Ltd",
        time: "6:15 PM",
        date: "12 September 2025",
        profileImg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        postImg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    },

        {
        name: "Organic Growers Ltd",
        time: "6:15 PM",
        date: "12 September 2025",
        profileImg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        postImg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    },

        {
        name: "Organic Growers Ltd",
        time: "6:15 PM",
        date: "12 September 2025",
        profileImg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        postImg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    },

        {
        name: "Organic Growers Ltd",
        time: "6:15 PM",
        date: "12 September 2025",
        profileImg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        postImg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    },

        {
        name: "Organic Growers Ltd",
        time: "6:15 PM",
        date: "12 September 2025",
        profileImg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        postImg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    },
];


export default function Comunity() {
    const routename = useLocation().pathname
    return (
        <>
            <Header />
            <RenderList arr={seedCategories} />
             {
            posts.map((post, index)=>(
                <div className="my-5">
                    <PostCard profile={post} key={index}/>
                </div>
            ))
           }


        </>
    )
}