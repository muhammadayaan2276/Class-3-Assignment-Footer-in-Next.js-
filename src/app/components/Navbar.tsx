//Homework:Footer(Create a footer and render it once so that it's available across all routes.)
import Link from "next/link";
const Navbar = () => {
    return(
        <div>
           <nav className=" bg-blue-600 text-white h-12 py-2 px-3 flex justify-between items-center">
            <div>
                <h1 className="text-2xl  hover:text-black font-semibold">
                    <a href="#!">Ayaan Zeeshan</a>
                </h1>
            </div>
            <div>
                <ul className="flex space-x-6">
                    <li><Link href="/" className="hover:text-red-700">Home</Link></li>
                    <li><Link href="/aboutus" className="hover:text-red-700">About Us</Link></li>
                    <li><Link href="/contactus" className="hover:text-red-700">Contact Us</Link></li>
                    <li><Link href="/blog" className="hover:text-red-700">Blog</Link></li>
                </ul>
            </div>
            <div>
                <ul className="flex space-x-6">
                    <li><Link href="#!" className="hover:text-red-700">Login</Link></li>
                    <li><Link href="#!" className="hover:text-red-700">Signup</Link></li>
                </ul>
            </div>
           </nav>
        </div>
    )
}
export default Navbar;