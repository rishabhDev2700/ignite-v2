"use client"
import {motion} from "framer-motion"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Oswald } from "next/font/google";
const oswald = Oswald({subsets:["latin"]})
export default function ServiceCard({image,title,description}) {
    return (
        <motion.div className="my-2 sm:max-w-[22rem] lg:w-[30rem] mx-auto" whileInView={{opacity:[0,100],x:[-50,0]}} transition={{duration:1}}>
            <Card className="h-[30rem] rounded-md shadow-md shadow-black/10 hover:shadow-black/40 overflow-hidden flex flex-col justify-start hover:scale-95 duration-100 ease-in">
                <Image className="min-h-[17rem] object-cover object-right" src={image} alt={title} />
                <CardContent className="mt-4 bg-gradient-to-t from-white/70 top-white/5">
                    <CardTitle className={`${oswald.className}`}>{title}</CardTitle>
                    <CardDescription className="my-4 font-medium">{description}</CardDescription>
                </CardContent>
            </Card>
        </motion.div>
    )
}
