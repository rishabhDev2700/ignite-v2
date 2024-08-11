"use client"
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetDescription, SheetTrigger, SheetTitle, SheetFooter } from './ui/sheet'
import { Button } from './ui/button'
import { MenuIcon,X } from 'lucide-react'
import Link from 'next/link'
import { Separator } from './ui/separator'
import Image from 'next/image'
import Logo from "@/assets/logo.png"
export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='w-full fixed top-0 flex items-center justify-between p-2 lg:px-32 lg:py-2 z-50 bg-neutral-900 shadow-md text-white'>
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild className="lg:hidden" onClick={()=>setMenuOpen(true)}>
                    <Button variant="outline" className="text-white bg-neutral-900 border-none"><MenuIcon /></Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Ignite Property Services</SheetTitle>
                        <Separator />
                        <SheetDescription>Get you property cleaned</SheetDescription>
                    </SheetHeader>
                    <nav className='flex flex-col justify-evenly  py-8'>
                        <Link className='p-4 border-b-2 border-transparent hover:border-slate-200 duration-200 hover:scale-105 inline-block' onClick={() => setMenuOpen(!menuOpen)} href="/#services">Services</Link>
                        <Link className='p-4 border-b-2 border-transparent hover:border-slate-200 duration-200 hover:scale-105 inline-block' onClick={() => setMenuOpen(!menuOpen)} href="/#gallery">Gallery</Link>
                        <Link className='p-4 border-b-2 border-transparent hover:border-slate-200 duration-200 hover:scale-105 inline-block' onClick={() => setMenuOpen(!menuOpen)} href="/contact">Contact us</Link>
                        <Link className='p-4 border-b-2 border-transparent hover:border-slate-200 duration-200 hover:scale-105 inline-block' onClick={() => setMenuOpen(!menuOpen)} href="/about">About</Link>
                    </nav>
              
                </SheetContent>
            </Sheet>
            <header className='uppercase font-semibold text-lg '>
                <Link href="/" className='flex items-center'>
                <Image className='mx-4' height={38} width={38} src={Logo}></Image>
                Ignite Property Services
                </Link>
                </header>
            <nav className='hidden lg:flex w-1/2 uppercase font-medium text-md'>
                <Link className='mx-4 px-4 py-2  border-b-2 border-transparent text-md hover:border-slate-200 duration-200 inline-block' href="/#services">Services</Link>
                <Link className='mx-4 px-4 py-2  border-b-2 border-transparent text-md hover:border-slate-200 duration-200 inline-block' href="/#gallery">Gallery</Link>
                <Link className='mx-4 px-4 py-2  border-b-2 border-transparent text-md hover:border-slate-200 duration-200 inline-block' href="/contact">Contact us</Link>
                <Link className='mx-4 px-4 py-2  border-b-2 border-transparent text-md hover:border-slate-200 duration-200 inline-block' href="/about">About</Link>
            </nav>
        </div>
    )
}
