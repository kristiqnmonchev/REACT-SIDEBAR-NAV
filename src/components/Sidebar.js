import { useState } from "react"
import { ArrowComp } from "../assets/ArrowComp"
import '../assets/caret--left.svg'
import logo from '../assets/monchev-logo.png'
import { menuItems } from "../assets/util"

export const Sidebar = () => {

    const [open, setOpen] = useState(true)
    const menuListItems = menuItems()

    const onToggleClick = () => {
        setOpen(!open)
    }

    return (
        <div className="flex">
            <div className={`${open ? 'w-64' : 'w-24'} p-5 pt-8 duration-500 h-screen bg-slate-950 relative`}>
                {/* Arrow icon */}
                <div onClick={onToggleClick}>
                    <ArrowComp open={open} />
                </div>

                {/* Menu */}
                <div className="flex gap-x-4 items-center ">
                    <img className='w-12 cursor-pointer' src={logo} alt='logo' />
                    <h1 className={`text-white whitespace-nowrap origin-left font-medium text-l duration-300 ${!open ? 'scale-0' : ' scale-1'}`}>MONCHEV-DESIGN</h1>

                </div>

                <ul className="pt-6">
                    {menuListItems.map((menu, index) => (
                        <li className=" text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md whitespace-nowrap" key={index}>
                            <span>{menu.icon}</span>
                            <span className={`${!open && 'opacity-0'} origin-left duration-200 `} >{menu.title}</span>
                        </li>
                    ))}
                </ul>

                <div className=" pt-8">
                    <span className="text-gray-500 text-xs font-semibold">SOCIALS</span>
                    <ul className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md whitespace-nowrap">
                        <li>
                            Linkedin
                        </li>
                    </ul>
                </div>
            </div>






            {/* <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                <h1 onClick={onToggleClick} >HomePage</h1>
            </div> */}
        </div>
    )
}