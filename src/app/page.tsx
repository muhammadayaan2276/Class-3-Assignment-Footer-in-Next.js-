//Homework:Footer(Create a footer and render it once so that it's available across all routes.)
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

export default function Home(){
  return(
    <div>
      <br />
      <br />
      <br />
        <h1 className="text-5xl bg-black text-white text-center py-20 font-bold uppercase">
          Welcome to Ayaan Zeeshan 
        </h1>
    </div>
  )
}