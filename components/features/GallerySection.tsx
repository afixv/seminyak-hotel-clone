import Image from 'next/image';
import Link from 'next/link';

export default function GallerySection() {
  return (
    <section className="container mx-auto hidden sm:flex items-center mt-10 sm:mt-32">
      <div className="w-1/2 sm:w-1/4 h-[40vh] sm:h-[73vh] md:h-[50vh] lg:h-[73vh] overflow-hidden hidden sm:block">
        <Image
          src="/images/photo1.CvygVCoG.png"
          alt="Gallery Image 1"
          width={1280}
          height={720}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="w-3/5 sm:w-1/4 h-[40vh] sm:h-[73vh] overflow-hidden block sm:hidden">
        <Image
          src="/images/photo1.CvygVCoG.png"
          alt="Gallery Image 1"
          width={1280}
          height={720}
          className="parallaxImage h-[80vh] object-cover object-center"
        />
      </div>
      <div className="w-2/5 sm:w-1/4 flex flex-col items-center">
        <p className="font-primary text-primary font-light md:text-[2.5rem] lg:text-[1.7rem] xl:text-[2.2rem] px-[70px] text-center uppercase hidden sm:block">
          Take a Look Inside
        </p>
        <div className="mt-4">
          <Link
            href="/gallery"
            className="bg-primary text-white text-xs sm:text-xs lg:text-sm xl:text-base px-6 py-2.5 rounded-full uppercase transition duration-300 ease-in-out inline-block mt-5 transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,0,0,0.1)] hover:-translate-y-1"
          >
            View All
          </Link>
        </div>
      </div>
      <div className="w-1/2 md:h-[50vh] lg:h-[73vh] overflow-hidden hidden sm:block">
        <Image
          src="/images/photo2.CYyw3Co4.png"
          alt="Gallery Image 2"
          width={1280}
          height={720}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
