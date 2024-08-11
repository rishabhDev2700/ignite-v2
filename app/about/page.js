"use client"
import SRC from "@/assets/logo.png"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
export default function Page() {
  return (
    <motion.div className="lg:py-24 h-full w-full">
                  <h2 className="lg:text-4xl lg:w-1/3 text-center mx-auto">About Ignite Property Services</h2>
      <Card className="my-12 md:w-2/3 lg:w-1/3 mx-4 shadow-md shadow-black/20 md:mx-auto bg-gradient-to-br from-white/30 to-neutral-400/30 backdrop-blur-sm">
        <Image src={SRC} alt="Ignite Property Services" className="max-w-[15rem] mx-auto p-4" />
        <CardContent className="py-4 px-8">
          <motion.div className="font-md text-slate-800 text-center">
            At Ignite Property Services, we offer comprehensive cleaning and power washing services for a variety of clients, including fleet vehicles, gas stations, parking lots, and residential and commercial properties. We are dedicated to providing exceptional customer service, utilizing eco-friendly solutions, and delivering sparkling results you can trust
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
