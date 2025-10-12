function DownloadIcon() {
  return (
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.5 36.0215V1.58154" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M9.19922 20.7015L24.4992 36.0215L39.7992 20.7015" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M39.7992 37.9215V45.5815H9.19922V37.9215" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" />
    </svg>
  )
}

function ContactIcon() {
  return (
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.7211 20.7815C24.4707 20.7815 28.3211 16.9312 28.3211 12.1815C28.3211 7.43189 24.4707 3.58154 19.7211 3.58154C14.9714 3.58154 11.1211 7.43189 11.1211 12.1815C11.1211 16.9312 14.9714 20.7815 19.7211 20.7815Z" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M3.5 39.8615L4.9 32.9215C5.58421 29.4941 7.43466 26.4096 10.1366 24.1927C12.8385 21.9757 16.225 20.7633 19.72 20.7615C23.0451 20.7516 26.2775 21.8573 28.9 23.9015" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M34.0381 45.5815C40.3673 45.5815 45.4981 40.4507 45.4981 34.1215C45.4981 27.7923 40.3673 22.6615 34.0381 22.6615C27.7089 22.6615 22.5781 27.7923 22.5781 34.1215C22.5781 40.4507 27.7089 45.5815 34.0381 45.5815Z" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M28.3203 34.1216H39.7803" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M34.0391 28.4015V39.8615" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" />
    </svg>
  )
}

function PaintIcon() {
  return (
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.8606 3.58154H11.1406V20.7615H37.8606V3.58154Z" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M11.1406 20.7616V24.5816C11.1406 26.0986 11.7433 27.5535 12.816 28.6262C13.8887 29.699 15.3436 30.3016 16.8606 30.3016H20.6806V41.7616C20.6806 42.7747 21.0831 43.7464 21.7995 44.4627C22.5159 45.1791 23.4875 45.5816 24.5006 45.5816C25.5138 45.5816 26.4854 45.1791 27.2018 44.4627C27.9182 43.7464 28.3206 42.7747 28.3206 41.7616V30.3016H32.1406C33.6577 30.3016 35.1126 29.699 36.1853 28.6262C37.258 27.5535 37.8606 26.0986 37.8606 24.5816V20.7616H11.1406Z" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M18.7812 15.0415V3.58154" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" />
    </svg>

  )
}

function ShareIcon() {
  return (
    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.2315 12.6149C35.8641 12.6149 37.9982 10.4808 37.9982 7.84821C37.9982 5.21565 35.8641 3.08154 33.2315 3.08154C30.599 3.08154 28.4648 5.21565 28.4648 7.84821C28.4648 10.4808 30.599 12.6149 33.2315 12.6149Z" stroke="#3772FF" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M7.76667 25.3482C10.3992 25.3482 12.5333 23.214 12.5333 20.5815C12.5333 17.9489 10.3992 15.8148 7.76667 15.8148C5.13411 15.8148 3 17.9489 3 20.5815C3 23.214 5.13411 25.3482 7.76667 25.3482Z" stroke="#3772FF" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M33.2315 38.0815C35.8641 38.0815 37.9982 35.9474 37.9982 33.3149C37.9982 30.6823 35.8641 28.5482 33.2315 28.5482C30.599 28.5482 28.4648 30.6823 28.4648 33.3149C28.4648 35.9474 30.599 38.0815 33.2315 38.0815Z" stroke="#3772FF" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M28.9685 9.98157L12.0352 18.4482" stroke="#3772FF" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M28.9685 31.1815L12.0352 22.7148" stroke="#3772FF" strokeWidth="1.5" strokeMiterlimit="10" />
    </svg>

  )
}

export function FeaturesGrid() {
  const features = [
    {
      icon: DownloadIcon,
      title: "Download EWÀ",
    },
    {
      icon: ContactIcon,
      title: "Contact Us",
    },
    {
      icon: PaintIcon,
      title: "FAQ",
    },
    {
      icon: ShareIcon,
      title: "Share",
    },
  ]

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#F4F8FB] py-10 md:py-12 rounded-xl">
        <div className="flex flex-wrap flex-col md:flex-row justify-center gap-8 md:gap-48">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="my-2">
                <feature.icon />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
