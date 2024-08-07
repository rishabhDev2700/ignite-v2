import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetDescription, SheetTrigger, SheetTitle, SheetFooter } from './ui/sheet'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { Separator } from './ui/separator'

export default function NavBar() {
    return (
        <div className='w-full fixed top-0 flex items-center justify-between px-4 py-2 lg:px-32 lg:py-4 backdrop-blur-sm z-50 bg-white/50 shadow-md'>
            <Sheet >
                <SheetTrigger asChild className="lg:hidden">
                    <Button variant="outline"><MenuIcon /></Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Ignite Property Services</SheetTitle>
                        <Separator/>
                        <SheetDescription>Get you property cleaned</SheetDescription>
                    </SheetHeader>
                    <nav className='flex flex-col justify-evenly  py-8'>
                        <Link className='p-4 border-b-2 border-transparent hover:border-slate-800 duration-200 hover:scale-105 inline-block' href="#services">Services</Link>
                        <Link className='p-4 border-b-2 border-transparent hover:border-slate-800 duration-200 hover:scale-105 inline-block' href="#gallery">Gallery</Link>
                        <Link className='p-4 border-b-2 border-transparent hover:border-slate-800 duration-200 hover:scale-105 inline-block' href="#contact-us">Contact us</Link>
                        <Link className='p-4 border-b-2 border-transparent hover:border-slate-800 duration-200 hover:scale-105 inline-block' href="#about">About</Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <header className='uppercase font-semibold text-2xl'>Ignite Property Services</header>
            <nav className='hidden lg:flex w-1/2 uppercase'>
                <Link className='mx-4 px-4 py-2  border-b-2 border-transparent hover:border-slate-800 duration-200 inline-block' href="#services">Services</Link>
                <Link className='mx-4 px-4 py-2  border-b-2 border-transparent hover:border-slate-800 duration-200 inline-block' href="#gallery">Gallery</Link>
                <Link className='mx-4 px-4 py-2  border-b-2 border-transparent hover:border-slate-800 duration-200 inline-block' href="#contact-us">Contact us</Link>
                <Link className='mx-4 px-4 py-2  border-b-2 border-transparent hover:border-slate-800 duration-200 inline-block' href="#about">About</Link>
            </nav>
        </div>
    )
}
