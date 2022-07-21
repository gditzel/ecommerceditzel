import Carousel from "../../components/carousel/Carousel";

export function Home() {
  const images = ["banner.jpg", "banner2.jpg", "banner3.webp"];

  return (
    <>
      <div className="text-center h-screen">
        <Carousel images={images} />
      </div>
    </>
  );
}
