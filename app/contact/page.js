import React from 'react'
import { ContactForm } from '@/components/contact-form'
export default function Page() {
    return (
        <main className='min-h-[80vh] py-16 mx-auto'>
            <h2 className="lg:text-4xl lg:w-1/4 mx-auto">Get in touch with us</h2>

            <ContactForm />
        </main>
    )
}
