import { Loader2 } from 'lucide-react'
import React from 'react'

export default function Loading() {
  return (
    <div className='w-screen h-screen animate-ping'><Loader2 className='animate-spin' size={48} /></div>
  )
}
