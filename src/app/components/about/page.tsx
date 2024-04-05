import Navbar from "../components/navBar"
import Link from "next/link"
import '@/app/ui/styles/globals.css'
export default function AboutPage() {
    return (
       <div>
         <div>
         <div className='container'>
          <h1 className='logo text-5xl'>Smart finance</h1>
           <nav className='navbar'>
          <Link href="/"className="Link text-xl">Home</Link>
          <Link href="/about" className='Link text-xl'>About</Link>
          <Link href="/learn" className='Link text-xl'>Learn</Link>
          <Link href="/blog" className='Link text-xl'>Blog</Link>
          <Link href="/contact" className='Link text-xl'>Contact</Link>
           </nav>
         </div>
         </div>
        <div>
            <div className="about">
            <h1 className=" text-3xl">About Us!</h1>
            <p className=" font-normal font-sans">Smart Finance is dedicated to empowering students, especially teenagers, with essential knowledge about personal finance and investment. Our goal is to equip you with the skills and confidence to make smart financial decisions throughout your life.
We offer a range of services to help individuals manage their finances effectively:</p>
            </div>
        </div>
        <div>
         <ul className="tlist">
            <li className="list">
            <h2 className="hlist">Expense Tracking</h2>
            <p><div >  
            <p>Whether you're just starting your financial journey or looking to enhance your investment strategies, Smart Finance is here to support you every step of the way.</p>
        </div></p>
            </li>
            <li className="list">
            <h2 className="hlist">Stock Analysis</h2>
           <p>Leveraging artificial intelligence and past data, our platform assists users in selecting the right stocks and making informed investment decisions. We analyze various factors to provide personalized recommendations tailored to individual preferences and risk tolerance.</p>
            </li>
            <li className="list">
              <h2 className="hlist">Investment Guidance</h2>
              <p>In addition to stocks, Smart Finance offers guidance on various types of investments, including bonds, mutual funds, and cryptocurrencies. Our educational resources and expert insights enable users to diversify their investment portfolios effectively.</p>
            </li>
   
         </ul>
        </div>
       <div className="foot">Whether you're just starting your financial journey or looking to enhance your investment strategies, Smart Finance is here to support you every step of the way.</div>
       </div>
    )
}