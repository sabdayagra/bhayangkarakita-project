"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import { Reveal } from "../ui/Reveal";

const dummyData = [
  {
    title: "Persiapan Mudik 2025: Kakorlantas dan Menhub Optimis Pelabuhan Merak Terkendali",
    image: "/assets/images/carousel1.png",
    date: "24 MARET 2025",
  },
  {
    title: "3 Polisi Gugur dalam Tugas Penggerebekan Tempat Perjudian Sabung Ayam di Lampung",
    image: "/assets/images/carousel2.png",
    date: "18 MARET 2025",
  },
  {
    title: "Program Makan Bergizi Gratis dari SPPG yang Libatkan Sinergi Polri dan Pemerintah",
    image: "/assets/images/carousel3.png",
    date: "18 MARET 2025",
  },
  {
    title: "Polri Gelar Operasi Ketupat 2025 Amankan Mudik dan Libur Lebaran",
    image: "/assets/images/carousel1.png",
    date: "17 MARET 2025",
  },
  {
    title: "Polri Gelar Operasi Ketupat 2025 Amankan Mudik dan Libur Lebaran",
    image: "/assets/images/carousel2.png",
    date: "17 MARET 2025",
  },
];

export default function NewsCarousel() {
  return (
    <>
      <Reveal>
        <div className="w-full lg:w-[75%] mx-auto">
          <div className="border-t-2 my-6 w-full border-black"></div>
          <Carousel opts={{ align: "start" }} className="w-full max-w-screen-xl mx-auto">
            <CarouselContent className="ml-2 lg:-ml-4">
              {dummyData.map((item, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                  <div className="flex gap-2">
                    <Image src={item.image} alt={item.title} width={1920} height={1080} className="object-cover w-[75px] h-[75px]" />
                    <div className="text-sm">
                      <h4 className="font-medium text-[13px]">{item.title}</h4>
                      <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-1">
                        <FiClock className="text-[11px]" />
                        {item.date}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-9 lg:flex hidden" />
            <CarouselNext className="-right-9 lg:flex hidden" />
          </Carousel>
        </div>
      </Reveal>
    </>
  );
}
