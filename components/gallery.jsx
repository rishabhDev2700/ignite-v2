"use client"
import { useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { pictures } from '@/lib/data'
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
export default function Gallery() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className='w-[80%] mx-auto'>

      <Carousel
        plugins={[plugin.current]}
        className=""
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full  rounded-md ">

            {pictures.map((p, index) => {
              return <CarouselItem key={index}>
                {p.type === 'img' ? <Image src={p.src} className='h-96 w-96 lg:min-w-[900px] lg:h-[800px] object-cover rounded-md px-auto' alt={p.alt}  /> :
                  <video src={p.src} controls muted className='h-96 w-96 lg:min-w-[900px] lg:h-[800px] object-cover rounded-md px-auto' />
                }
              </CarouselItem>
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
