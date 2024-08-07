"use client"
import {motion} from "framer-motion"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
export default function ServiceCard({image,title,description}) {
    return (
        <motion.div className="my-2 sm:max-w-[20rem] lg:w-[30rem] mx-auto" whileInView={{opacity:[0,100],x:[-50,0]}} transition={{duration:1}}>
            <Card className="h-[30rem] rounded-md shadow-md shadow-black/10 overflow-hidden flex flex-col justify-between">
                <Image className="h-3/5 object-cover object-right" src={image} />
                <CardContent className="m-0 bg-gradient-to-t from-white/70 top-white/5">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="my-2 font-light">{description}</CardDescription>
                </CardContent>
            </Card>
        </motion.div>
    )
}
