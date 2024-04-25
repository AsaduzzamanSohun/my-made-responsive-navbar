import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";



const Navbar = () => {

    const [open, setOpen] = useState(false)

    const link = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Products</Link></li>
        <li><Link to='/'>Profile</Link></li>
        <li><Link to='/'>Career</Link></li>
        <li><Link to='/'>About Us</Link></li>

    </>

    return (

        <>
            <nav className="flex justify-between item-center bg-lime-300 py-6 px-8">

                <div>
                    <h1 className="text-3xl font-bold">Icon</h1>
                </div>

                <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">

                    {
                        open ? <GrClose /> : <FiMenu />
                    }

                    <div className={`bg-lime-300 w-full px-6 pb-6 md:hidden absolute -z-50 ${open ? 'right-0 top-20 duration-[1000ms]' : '-right-0 -top-96 duration-[1000ms]'}`}>
                        <ul className="text-base">
                            {
                                link
                            }
                        </ul>
                    </div>




                </div>

                <div className="hidden md:flex">
                    <ul className="md:flex items-center gap-8 ">
                        {
                            link
                        }
                    </ul>
                </div>


            </nav>

            <div>
                {
                    open ? <h1 className="text-6xl mt-36 duration-1000">Hello Navbar</h1> : <h1 className="text-6xl duration-300">Hello Navbar</h1>
                }

            </div>

        </>


    );
};

export default Navbar;