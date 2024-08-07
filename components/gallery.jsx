"use client"
import { useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card"
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
    <div className=''>

      <Carousel
        plugins={[plugin.current]}
        className=""
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
          <Card className="p-2">
        <CarouselContent className="w-full min-h-[2/5] rounded-md ">

            {pictures.map((p, index) => {
              return <CarouselItem key={index}>
                {p.type === 'img' ? <Image src={p.src} className='aspect-video object-cover rounded-md w-full' /> :
                  <video src={p.src} controls muted className='w-full' />
                }
              </CarouselItem>
            })}
        </CarouselContent>
          </Card>
        <CarouselPrevious className="scale-150" />
        <CarouselNext className="scale-150" />
      </Carousel>
    </div>
  )
}
