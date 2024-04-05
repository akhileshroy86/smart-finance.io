import '@/app/ui/styles/globals.css'
import Link from 'next/link'


export default function Navbar() {
   
    return (
        <>
         <div className='container'>
          <h1 className='logo text-5xl'>Smart finance</h1>
           <nav className='navbar'>
          <Link href="/"className="Link text-xl">Home</Link>
          <Link href="src/app/components/learn" className='Link text-xl'>About</Link>
          <Link href="/components/learn" className='Link text-xl'>Learn</Link>
          <Link href="/blog" className='Link text-xl'>Blog</Link>
          <Link href="/contact" className='Link text-xl'>Contact</Link>
           </nav>
         </div>

         <div>
            <h1 className="text-3xl heading">Learn <span className='highlight'>Smart finance</span> with us</h1>
            <p className='text'>smart finance provides us to track the expenss of the people and helps people to pickup the right stocks using the past data using artificial intelligence not only stocks any type of investmnets

</p>
      
           <h4 className="login-button"><Link href="/components/register/login">Get Started</Link></h4>
      
         </div>
         <div>
            <p className='tag'>© 2024 Smart Finance</p>
         </div>
        </>
    )
}