"use client";

import Image from "next/image";
import { FiClock } from "react-icons/fi";
import { Reveal } from "../ui/Reveal";

const dummyData = [
  {
    category: "Pelayanan",
    color: "bg-red-600",
    articles: [
      {
        title: "Polres Rokan Hulu dan Dukungan Program Makan Bergizi Gratis SDN 016 Sei Bungo",
        date: "28 JANUARI 2025",
        image: "/assets/images/bottom1.png",
      },
      {
        title: "Polri Buka Rekrutmen Khusus Lulusan Pertanian dan Peternakan",
        date: "4 NOVEMBER 2024",
      },
      {
        title: "Polri Siap Dukung Presiden Prabowo Subianto Menuju Ketahanan Pangan Nasional Indonesia",
        date: "24 OKTOBER 2024",
      },
      {
        title: "Divisi Humas Polri dan TVRI Gelar Pelatihan Presenter untuk Optimalisasi Komunikasi Publik",
        date: "15 JULI 2024",
      },
    ],
  },
  {
    category: "Opini",
    color: "bg-red-600",
    articles: [
      {
        title: "KH Abu Bakar Abdul Jalil Apresiasi Rekrutmen Jalur Khusus di Polri bagi Santri dan Hafiz Al-Qur’an",
        date: "25 FEBRUARI 2025",
        image: "/assets/images/bottom2.png",
      },
      {
        title: "Polisi Istimewa Pejuang Kemerdekaan ke Peringatan Hari Juang Polri",
        date: "8 NOVEMBER 2024",
      },
      {
        title: "Menkominfo Meutya Hafid Apresiasi Polri dalam Pemberantasan Judi Online di Indonesia",
        date: "1 NOVEMBER 2024",
      },
      {
        title: "Komjen Purn Boy Rafli Amar Bicara Inovasi Humas Polri dalam Meningkatkan Kepercayaan Publik",
        date: "31 OKTOBER 2024",
      },
    ],
  },
  {
    category: "Inspirasi",
    color: "bg-red-600",
    articles: [
      {
        title: "Apa yang dimaksud Bhayangkari? Apa Sejarah, Fungsi dan Perannya",
        date: "20 FEBRUARI 2023",
        image: "/assets/images/bottom3.png",
      },
      {
        title: "Lirik Lagu Mars Bhayangkari",
        date: "6 JULI 2023",
      },
      {
        title: "Pendidikan Minimal Istri Polisi di Indonesia: Syarat dan Peranannya",
        date: "4 JULI 2023",
      },
      {
        title: "Polri Gowes Presisi Khatulistiwa Cetak Rekor MURI",
        date: "27 JUNI 2022",
      },
    ],
  },
];

export default function ThreeColumnSection() {
  return (
    <>
      <Reveal>
        <div className="w-full px-4 lg:px-0 lg:w-[75%] mx-auto">
          <div className="bg-[#d6d6d6] px-4 py-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
              {dummyData.map((section, index) => (
                <div key={index} className="bg-[#d6d6d6] p-4 shadow-sm">
                  {/* Header */}
                  <div className="mb-4 border-b pb-2">
                    <span className={`${section.color} text-white px-3 py-1 font-bold text-sm inline-block`}>{section.category}</span>
                  </div>

                  {/* Featured Article */}
                  {section.articles[0]?.image && (
                    <div className="flex gap-3 mb-3">
                      <Image src={section.articles[0].image} alt={section.articles[0].title} width={1920} height={1080} className="w-[120px] h-[86px] object-cover rounded" />
                      <div>
                        <p className="text-sm font-medium">{section.articles[0].title}</p>
                        <p className="text-xs text-gray-500 flex items-center mt-1">
                          <FiClock className="mr-1" /> {section.articles[0].date}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Other Articles */}
                  <div className="space-y-3 text-sm">
                    {section.articles.slice(1).map((item, idx) => (
                      <div key={idx} className="border-t pt-3">
                        <p>{item.title}</p>
                        <p className="text-xs text-gray-500 mt-1 flex items-center">
                          <FiClock className="mr-1" /> {item.date}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-between mt-4">
                    <button className="bg-gray-200 text-xs px-3 py-1">&lt; PREV</button>
                    <button className="bg-white text-xs border px-3 py-1 font-medium">NEXT &gt;</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
