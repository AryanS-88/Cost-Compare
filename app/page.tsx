import React from 'react'
import Image from 'next/image'
import Searchbar from '@/components/Searchbar'
import HeroCarousel from '@/components/HeroCarousel'

const Home = () => {
  return (
    <>
      <section className="px-6  md:px-20 py-24 border-2">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              smart shopping starts here{' '}
              <Image
                src="./assets/icons/arrow-right.svg"
                width={16}
                height={16}
                alt="right arrow"
              />
            </p>
            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> Compare Ground</span>
            </h1>
            <p className="mt-6 ">
              Powerful,self-serve product and growth analytics to help you
              convert,engage and retain more.
            </p>
            <div>
              <Searchbar />
            </div>
          </div>
          <HeroCarousel />
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-X-8 gap-Y-16 "></div>
      </section>
    </>
  )
}

export default Home
