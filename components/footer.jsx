import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-cyan-950 text-white py-8'>
        <ul className='grid  grid-cols-2 lg:grid-cols-5 lg:place-content-center gap-y-4 text-center mx-auto w-4/5 p-2'>
            <li>
                <Link className='p-2 mx-3 my-2 border-b border-transparent hover:border-white duration-200' href="/">Home</Link>
            </li>
            <li>
                <Link className='p-2 mx-3 my-2 border-b border-transparent hover:border-white duration-200' href="#services">Services</Link>
            </li>
            <li>
                <Link className='p-2 mx-3 my-2 border-b border-transparent hover:border-white duration-200' href="#gallery">Gallery</Link>
            </li>
            <li className=''>
                <Link className='p-2 mx-3 my-2 border-b border-transparent hover:border-white duration-200' href="#contact">Contact</Link>
            </li>
            <li className='col-span-2 lg:col-span-1'>
                <Link className='p-2 mx-3 my-2 border-b border-transparent hover:border-white duration-200' href="/about">About</Link>
            </li>
        </ul>
        <div className='font-light text-center mt-8'>
            Copyright 2024. All Rights Reserved.
        </div>
    </footer>
    
  )
}
