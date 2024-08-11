import Image from "next/image";
import ParkingLineWork from "@/assets/parking-complete+2.jpeg"
import { Separator } from "@/components/ui/separator";
import ServiceCard from "@/components/service-card";
import { services } from "@/lib/data";
import Gallery from "@/components/gallery";

export default function Home() {

  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <div className="relative w-full">
          <Image src={ParkingLineWork} className="brightness w-full h-[80vh] lg:max-h-screen object-cover -z-40" alt="Parking Line Painting" />
          <div className="bg-white/40 w-auto absolute top-1/3 text-4xl uppercase p-8 md:left-1/2 md:-translate-x-1/2 lg:left-2/5">
            <h1 className="font-black">
              Ignite Property<br /> Services
            </h1>
            <Separator className="my-2" />
            <h3 className="font-light lg:text-3xl">
              Get your properties power cleaned
            </h3>
          </div>
        </div>
      </main>
      <section id="services">
        <h2 className="ml-2 lg:ml-96 lg:text-4xl">Services</h2>
        <div className="grid md:grid-cols-2 lg:flex lg:flex-wrap lg:w-3/5 mx-auto place-content-center">
          {services.map((data,index) => <ServiceCard key={index} title={data.title} description={data.description} image={data.image} />)
          }
        </div>
      </section>
      <section>
        <h2 className="ml-2 lg:ml-96 lg:text-4xl">Gallery</h2>
        <div id="gallery" className="grid md:grid-cols-2 lg:flex lg:flex-wrap lg:w-3/5 mx-auto place-content-center md:min-h-[70vh]">
      <Gallery/>
        </div>
      </section>

    </>
  );
}
