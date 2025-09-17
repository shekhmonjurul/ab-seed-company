
import SearchIcon from '@mui/icons-material/Search';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { useLocation } from 'react-router-dom';





export default function Header() {
    const routename = useLocation()

    const actionbuttons = [
        { name: "কমিউনিটি", href: "/comunity", icon: "/comunity.svg" },
        { name: "সকল পণ্য", href: "/allproduct", icon: "/allproduct.svg" },
        { name: "অর্ডার কার্ট", href: "/ordercart", icon: "/ordercart.svg" },
        { name: "নতুন অফার", href: "/newoffer", icon: "/newoffer.svg" },
        { name: "নোটিফিকেশন", href: "/notifaction", icon: "/notifaction.svg" },
        { name: "প্রোফাইল", href: "/profile", icon: "/profile.svg" },
    ];

    return (
        <>
            <div className="sticky top-0 z-50 bg-[#dbffcc] text-black w-full ">
                <div className="w-full font-bold pb-5 bg-white flex justify-around items-center py-4">
                    <h1 >Ab Seed Company</h1>
                    <label htmlFor="searchbox" className='text-[#7F7F7F]  border p-2 rounded-full my-2 lable flex items-center'>
                        <SearchIcon sx={{
                            fontSize: { xs: 15, sm: 30, md: 30 },
                            mx: 1
                        }} />
                        <input type="text" id='searchbox' placeholder='খুঁজুন...' className='focus:outline-none mx-2 ' />
                    </label>
                    <label htmlFor="shajo" className='text-[#7F7F7F]  border p-2 rounded-full lable flex justify-center items-center'>
                        <SmsOutlinedIcon sx={{
                            fontSize: { xs: 15, sm: 30, md: 30 },
                            mx: 1
                        }} />
                        <input type='button' id='shajo' value={"সাহায্য..."} className='focus:outline-none mx-2 ' />
                    </label>
                </div>
                <div className='bg-white flex justify-around border-b pt-4'>
                    {
                        actionbuttons.map((action, index) => (
                            <a href={action.href} key={index} className='font-size-small flex justify-center items-center flex-col mb-2 hover:text-green-700'>
                                {
                                    routename.pathname === action.href ? <img src={action.icon} alt="icon" className='w-[100px] h-[50px] mb-2 img img-green img-scale' /> : <img src={action.icon} alt="icon" className='w-[100px] h-[50px] mb-2 img' />
                                }
                                {routename.pathname === action.href ? "" : action.name}
                            </a>
                        ))
                    }
                </div>
            </div>
        </>
    )
}


