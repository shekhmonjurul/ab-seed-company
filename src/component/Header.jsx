
import SearchIcon from '@mui/icons-material/Search';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState } from 'react';


export default function Header() {
    const routename = useLocation()
    let [active, setActive] = useState(false)

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
            <section>
                <div className="sticky top-0 z-50 bg-[#dbffcc] text-black w-full ">
                    <div className="w-full font-bold pb-5 bg-white mobile:flex mobile:flex-wrap tablet:flex tablet:flex-wrap  laptop:flex laptop:flex-nowrap computer:flex computer:flex-nowrap justify-around items-center py-4">
                        <button
                            onClick={() => setActive(prev => !prev)}
                            aria-expanded={active}
                            aria-controls="mobile-menu"
                            className=" mobile:block tablet:block laptop:hidden computer:hidden tablet:text-[20px] mobile:text-[20px]"
                        >
                            {active ? (
                                <GrClose />
                            ) : (
                                <FaBars />
                            )}
                        </button>
                        <h1 className='mobile:text-[20px] tablet:text-[20px] laptop:test-[28px] computer:text-[28px] font-bold text-black' >Ab Seed Company</h1>
                        <div className=' tablet:hidden laptop:block computer:block'>
                            <label htmlFor="searchbox" className='text-[#7F7F7F]  border p-2 rounded-full my-2 lable flex items-center'>
                                <SearchIcon sx={{
                                    fontSize: { xs: 15, sm: 30, md: 30 },
                                    mx: 1
                                }} />
                                <input type="text" id='searchbox' placeholder='খুঁজুন...' className='focus:outline-none mx-2 ' />
                            </label>
                        </div>
                        <div className='mobile:hidden tablet:hidden laptop:block computer:block'>
                            <label htmlFor="shajo" className='text-[#7F7F7F]  border p-2 rounded-full lable flex justify-center items-center'>
                                <SmsOutlinedIcon sx={{
                                    fontSize: { xs: 15, sm: 30, md: 30 },
                                    mx: 1
                                }} />
                                <input type='button' id='shajo' value={"সাহায্য..."} className='focus:outline-none mx-2 ' />
                            </label>
                        </div>
                    </div>
                    <div className='bg-white mobile:hidden tablet:hidden laptop:flex computer:flex justify-around border-b pt-4'>
                        {
                            actionbuttons.map((action, index) => (
                                <Link to={action.href} key={index} className='font-size-small flex justify-center items-center flex-col mb-2 hover:text-green-700'>
                                    <img src={action.icon} alt="icon" className={routename.pathname === action.href ? "w-[100px] h-[50px] mb-2 img img-green img-scale" : "w-[100px] h-[50px] mb-2 img"} />
                                    {routename.pathname === action.href ? "" : action.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                {active && (
                    <>
                        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-80 z-40"></div>

                        <h3
                            onClick={() => setActive(false)}
                            className="fixed mobile:top-[10px] tablet:top-[80px] laptop:hidden computer:hidden mobile:right-[30px] tablet:right-[165px] text-white text-3xl z-[60]"
                        >
                            <GrClose />
                        </h3>
                    </>
                )}
                <div id='mobile-menu' className={`fixed top-0 left-0 z-50 mobile:w-[300px] tablet:w-[400px] h-screen bg-white transform origin-left transition-all duration-500 ease-in-out overflow-y-auto overflow-x-hidden ${active ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                    }`}>
                    <div className='p-[20px] bg-green-600'>
                        <h3 className="mb-[-12px] text-[20px] font-semibold text-white text-left">
                            Welcome
                        </h3>
                        <span className="text-[26px] font-bold  text-white">
                            to Ab Seed Company
                        </span>
                    </div>
                    <div className='p-[8px]'>
                        <ul className='block'>
                            {actionbuttons.map((action, index) => (

                                <li key={index}><a className='text-[16px] flex items-center gap-4 mb-2 font-bold text-black' href="#"><div className='w-[30px] h-[30px]'><img className='w-full h-full object-cover' src={action.icon} alt="" /></div>{action.name}</a></li>
                            ))}



                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}


