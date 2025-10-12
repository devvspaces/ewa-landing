"use client"

import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

export function AppFeatures() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(max-width: 767px)': { slidesToScroll: 1 },
      '(min-width: 768px)': { slidesToScroll: 1 },
      '(min-width: 1024px)': { slidesToScroll: 1 }
    }
  })

  let [hasNext, setHasNext] = useState(false)
  let [hasPrev, setHasPrev] = useState(false)

  useEffect(() => {
    if (emblaApi) {
      setHasNext(emblaApi?.canScrollNext() || false)
      setHasPrev(emblaApi?.canScrollPrev() || false)

      const onSelect = () => {
        setHasNext(emblaApi?.canScrollNext() || false)
        setHasPrev(emblaApi?.canScrollPrev() || false)
      }

      emblaApi.on('select', onSelect)
      emblaApi.on('reInit', onSelect)

      return () => {
        emblaApi.off('select', onSelect)
        emblaApi.off('reInit', onSelect)
      }
    }
  }, [emblaApi])

  const features = [
    {
      icon: "/images/easy-booking.svg",
      title: "Easy Booking",
      description: "Never miss a haircut with our easy-to-use booking system. We'll make you look your best",
    },
    {
      icon: "/images/home-service.svg",
      title: "Home Service",
      description: "Ewa delivers salon quality services to your door step. Book you next haircut at EWA",
    },
    {
      icon: "/images/easy-payment.svg",
      title: "Easy Payment",
      description: "EWA has an integrated payment system that enable seamless transaction  and payouts.",
    },
    {
      icon: "/images/home-service.svg",
      title: "Home Service",
      description: "Ewa delivers salon quality services to your door step. Book you next haircut at EWA",
    },
    {
      icon: "/images/easy-payment.svg",
      title: "Easy Payment",
      description: "EWA has an integrated payment system that enable seamless transaction  and payouts.",
    },
  ]

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }

  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }, [emblaApi])

  return (
    <section className="bg-[#F4F8FB] py-[40px] md:py-[140px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Amazing App features</h2>
          <p className="text-gray-600 text-base font-semibold sm:text-md max-w-2xl">
            Learn more about what EWÀ can offer
          </p>
        </div>

        <div className="relative">
          {/* Embla Carousel */}
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="embla__slide flex-none w-full sm:w-1/1 md:w-1/3 lg:w-1/4 bg-[#142640] rounded-3xl px-6 text-center h-[350px] flex flex-col justify-center items-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="">
                      <Image
                        src={feature.icon || "/placeholder.svg"}
                        alt={feature.title}
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-white text-xs leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className={hasPrev ? "w-6 h-6 text-blue-500" : "w-6 h-6 text-gray-300"} />
            </button>
            <button
              onClick={scrollNext}
              className="flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className={hasNext ? "w-6 h-6 text-blue-500" : "w-6 h-6 text-gray-300"} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
