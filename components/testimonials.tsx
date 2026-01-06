import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah K.",
      role: "Regular Customer",
      content:
        "I love how easy it is to book appointments! The stylists are professional and the service is always top-notch. EWA has made beauty services so convenient for me.",
      rating: 5,
    },
    {
      name: "James O.",
      role: "Professional Stylist",
      content:
        "As a barber, EWA Biz has transformed my business. I can manage my schedule, set my prices, and reach more clients than ever before. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emily T.",
      role: "Busy Professional",
      content:
        "The home service feature is a game-changer! I can get my hair done without leaving my house. The quality is excellent and the booking process is seamless.",
      rating: 5,
    },
    {
      name: "Michael A.",
      role: "Stylist",
      content:
        "I've been using EWA Biz for 6 months now and my income has doubled. The app is easy to use and the support team is always helpful. Best decision I've made!",
      rating: 5,
    },
    {
      name: "Grace N.",
      role: "Customer",
      content:
        "Fast, reliable, and professional. I've tried several beauty apps but EWA is by far the best. The stylists are verified and the service is always excellent.",
      rating: 5,
    },
    {
      name: "Chris M.",
      role: "Barber",
      content:
        "EWA Biz gives me the freedom to work on my own terms. I love being my own boss while still having access to a steady stream of clients. Five stars!",
      rating: 5,
    },
  ]

  return (
    <section className="bg-[#131826] py-[40px] md:py-[140px hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12 text-[#E3E3E3]">What our users say</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#1F2431] rounded-md p-6 transition-colors duration-300 hover:bg-[#2A2E3E]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#6C5CE7] flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
