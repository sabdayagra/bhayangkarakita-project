import CarouselSection from "@/components/landing-page/carousel-section";
import ColoumnPPS from "@/components/landing-page/coloumn-pps";
import Footer from "@/components/landing-page/footer";
import LatestNews from "@/components/landing-page/latest-news";
import Navbar from "@/components/landing-page/navbar";
import ThreeColumnSection from "@/components/landing-page/three-coloumn-section";

export default function Home() {
  return (
    <div className="w-full overflow-x-auto">
      <Navbar />
      <CarouselSection />
      <LatestNews />
      <ThreeColumnSection />
      <ColoumnPPS />
      <Footer />
    </div>
  );
}
