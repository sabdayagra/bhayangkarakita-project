import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm w-full lg:w-[75%] mx-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Bagian atas: Navigasi */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white pb-4">
          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs">
            <a href="#" className="hover:underline">
              Kode Etik Jurnalistik
            </a>
            <span>/</span>
            <a href="#" className="hover:underline">
              Kebijakan Privasi
            </a>
            <span>/</span>
            <a href="#" className="hover:underline">
              Tentang Kami
            </a>
            <span>/</span>
            <a href="#" className="hover:underline">
              Disclaimer
            </a>
            <span>/</span>
            <a href="#" className="hover:underline">
              Pedoman Media Siber
            </a>
          </div>
        </div>

        {/* Bagian bawah: Copyright dan Sosial Media */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center pt-4">
          <p className="text-xs mb-2 sm:mb-0">© Copyright Polrinews Team All Rights Reserved</p>
          <div className="flex flex-row gap-3">
            <Image width={1920} height={1080} alt="icon" src="/assets/icon/fb.png" className="h-[14px] w-[14px]" />
            <Image width={1920} height={1080} alt="icon" src="/assets/icon/twitter.png" className="h-[14px] w-[14px]" />
            <Image width={1920} height={1080} alt="icon" src="/assets/icon/ig.png" className="h-[14px] w-[14px]" />
            <Image width={1920} height={1080} alt="icon" src="/assets/icon/yt.png" className="h-[14px] w-[14px]" />
            <Image width={1920} height={1080} alt="icon" src="/assets/icon/vk.png" className="h-[14px] w-[18px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
