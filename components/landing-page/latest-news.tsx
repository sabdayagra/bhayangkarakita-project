"use client";

import Image from "next/image";
import { Reveal } from "../ui/Reveal";

const articles = [
  {
    title: "Polri Perketat Pengamanan! Ambulans Udara Disiagakan Selama Ops Ketupat 2025",
    img: "/assets/images/berita1.png",
    date: "24 MARET 2025",
    description: "Cilegon – Kakorlantas Polri Irjen Pol Drs. Agus Suryonugroho S.H., M.Hum bersama Menteri Perhubungan (Menhub) Dudy Purwandy meninjau kondisi Pelabuhan Merak...",
  },
  {
    title: "Hasil Sidang Kode Etik AKBP FWLS Dipecat Dari Polri Dan Jadi Tersangka",
    img: "/assets/images/berita2.png",
    date: "24 MARET 2025",
    description: "Jakarta – Penegakan hukum terhadap AKBP FWLS terus berlanjut. Mantan Kapolres Ngada yang terlibat dalam kasus pelanggaran serius tersebut baru-baru ini resmi...",
  },
  {
    title: "Bongkar Sindikat Pengoplosan Gas LPG Subsidi di Gianyar dengan Omset Rp650 Juta per Bulan",
    img: "/assets/images/berita3.png",
    date: "24 MARET 2025",
    description: "Bali – Sindikat pengoplosan gas LPG subsidi yang beroperasi di Gianyar, Bali, kini telah berhasil diungkap oleh Direktorat Tindak Pidana...",
  },
  {
    title: "Terungkap Modus Kecurangan MinyaKita: Takaran Tak Penuh, Label Palsu, Sampai Produksi Tanpa Izin",
    img: "/assets/images/berita4.png",
    date: "24 MARET 2025",
    description: "Jakarta – Satgas Pangan Polri baru-baru ini mengungkap praktik penipuan yang dilakukan oleh oknum yang tidak bertanggung jawab terhadap minyak...",
  },
  {
    title: "Hari Ini Terakhir Pendaftaran Anggota Polri Tahun 2025",
    img: "/assets/images/berita5.png",
    date: "24 MARET 2025",
    description: "Jakarta – Polri kembali membuka kesempatan bagi putra-putri terbaik bangsa untuk bergabung menjadi anggota Polri. Pendaftaran penerimaan anggota Polri tahun...",
  },
];

export default function LatestNews() {
  return (
    <>
      <Reveal>
        <div className="w-full px-4 lg:px-0 lg:w-[75%] mx-auto flex flex-col lg:flex-row my-5">
          {/* Left */}
          <div className="space-y-6 w-full lg:w-[80%] mr-2 mt-2">
            <div className="flex flex-row gap-4">
              <p className="self-center font-bold text-sm lg:text-[15px]">Berita Terbaru</p>
              {/* Garis dengan dua warna */}
              <div className="mt-2 h-1 w-[250px] lg:w-[730px]" style={{ background: "linear-gradient(to right, #e5e7eb 05%, #e5e7eb 10%)" }}></div>
            </div>
            {articles.map((article, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-4 border-b pb-4">
                {/* Gambar */}
                <div className="w-full sm:w-[200px] h-[150px] relative flex-shrink-0">
                  <Image src={article.img} alt={article.title} fill className="object-cover rounded" />
                </div>

                {/* Konten */}
                <div className="flex flex-col justify-between">
                  <h2 className="text-[12px] lg:text-[22px] font-bold text-black hover:underline cursor-pointer">{article.title}</h2>
                  <div className="flex items-center text-[8px] lg:text-[12px] text-gray-500 mt-1 gap-2">
                    BY
                    <span className="text-red-600 font-bold text-[8px] lg:text-[12px]">REDAKSI POLRINEWS</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
                        <path d="M12 7v5l3 3" />
                      </g>
                    </svg>
                    <span>{article.date}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 21.25a9.25 9.25 0 1 0-8.307-5.177c.108.22.144.468.089.706l-.816 3.536a.6.6 0 0 0 .72.72l3.535-.817a1.06 1.06 0 0 1 .706.09A9.2 9.2 0 0 0 12 21.25M7.97 9.886h8.06m-8.06 4.228h5.748"
                      />
                    </svg>
                    <span>0</span>
                  </div>
                  <p className="text-[10px] lg:text-[14px] text-gray-600 mt-2 line-clamp-4">{article.description}</p>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex gap-2 my-4">
              <button className="text-xs lg:text-sm px-1.5 lg:px-3 py-1 border rounded hover:bg-gray-100">&lt; PREV</button>
              <button className="text-xs lg:text-sm px-1.5 lg:px-3 py-1 border rounded hover:bg-gray-100">NEXT &gt;</button>
            </div>

            {/* PPS */}
            <div className="relative border rounded-lg w-full h-full lg:h-[252px] max-w-full  mx-auto bg-white p-6 shadow-sm text-center">
              {/* Teks Tengah */}
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl font-bold text-[#a96a6a] tracking-widest leading-snug">
                  KOLOM <br /> PPS
                </h2>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 w-full lg:w-[30%]">
            <div className="border rounded-lg w-full max-w-full lg:max-w-xs mx-auto p-4 bg-white shadow-sm">
              {/* Header */}
              <div className="border-b pb-2 text-sm text-gray-700 font-medium">
                Postingan dari <span className="font-semibold">@Polri_News</span>
              </div>

              {/* Isi */}
              <div className="flex flex-col py-6 space-y-2">
                {/* Icon X */}
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" />
                </svg>

                <h3 className="text-lg font-bold">Belum ada Tweet</h3>
                <p className="text-sm text-gray-500">Jika mereka memposting, Anda dapat melihatnya di sini.</p>

                <a href="https://twitter.com/Polri_News" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition w-fit">
                  Lihat di X
                </a>
              </div>
            </div>
            <div className="border rounded-lg w-full max-w-full lg:max-w-xs mx-auto p-4 bg-white shadow-sm">
              {/* Header */}
              <div className="border-b pb-2 text-sm text-gray-700 font-medium">
                Postingan dari <span className="font-semibold">@Polri_News</span>
              </div>

              {/* Isi */}
              <div className="flex flex-col py-6 space-y-2">
                {/* Icon X */}
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" />
                </svg>

                <h3 className="text-lg font-bold">Belum ada Tweet</h3>
                <p className="text-sm text-gray-500">Jika mereka memposting, Anda dapat melihatnya di sini.</p>

                <a href="https://twitter.com/Polri_News" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition w-fit">
                  Lihat di X
                </a>
              </div>
            </div>

            {/* PPS */}
            <div className="relative border rounded-lg w-full h-full lg:h-[300px] max-w-full lg:max-w-xs mx-auto bg-white p-6 shadow-sm text-center">
              {/* Tombol Close */}
              <button className="absolute top-2 right-2 text-xs text-blue-500 hover:text-blue-700">✕</button>

              {/* Teks Tengah */}
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl font-bold text-[#a96a6a] tracking-widest leading-snug">
                  KOLOM <br /> PPS
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
