import Link from "next/link"
export default function LoginPage() {
    return(
        <>
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
        <div className="login-box">
            Login
        </div>
      </>
    )
}