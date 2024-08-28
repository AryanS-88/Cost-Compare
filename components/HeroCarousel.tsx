'use client'
import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
const heroImages = [
  {
    imgUrl: './assets/images/hero-1.svg',
    alt: 'smart-watch',
  },
  {
    imgUrl: './assets/images/hero-2.svg',
    alt: 'bag',
  },
  {
    imgUrl: './assets/images/hero-3.svg',
    alt: 'lamp',
  },
  {
    imgUrl: './assets/images/hero-4.svg',
    alt: 'air-fryer',
  },
  {
    imgUrl: './assets/images/hero-5.svg',
    alt: 'chair',
  },
]
const HeroCarouSel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        showArrows={false}
        autoPlay
        infiniteLoop
        interval={2500}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            src={image.imgUrl}
            width={484}
            height={484}
            alt={image.alt}
            className="object-contain"
            key={image.alt}
          />
        ))}
      </Carousel>
      <Image
        src={'assets/icons/hand-drawn-arrow.svg'}
        alt={'hand-drawn-arrow'}
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  )
}

export default HeroCarouSel
