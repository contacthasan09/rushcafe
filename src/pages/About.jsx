import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, SlideLeft, SlideRight, Stagger, StaggerItem } from '../components/ScrollReveal'

const HERO = 'https://rushcafebd.com/wp-content/uploads/2026/04/42-scaled.jpg'
const FOOD = [
  'https://rushcafebd.com/wp-content/uploads/2026/05/Parmesan-crust-copy-610x610.jpg',
  'https://rushcafebd.com/wp-content/uploads/2026/05/staks-copy-610x610.jpg',
  'https://rushcafebd.com/wp-content/uploads/2026/05/the-green-copy-610x610.jpg',
]
const INTERIOR = 'https://rushcafebd.com/wp-content/uploads/2026/04/NOK09143-768x513.webp'

export default function About() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-black">
        <img src={HERO} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="relative max-w-content mx-auto px-4 py-20 md:py-24 w-full text-center">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="font-script text-[48px] md:text-[75px] text-teal leading-none">
            Discover
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-[40px] md:text-[70px] font-semibold uppercase text-white leading-none"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      <section className="bg-black py-16 md:py-24 text-center">
        <FadeUp className="max-w-2xl mx-auto px-4">
          <h2 className="font-mont text-[24px] md:text-[32px] font-semibold text-white leading-snug mb-6">
            Ultimate dining experience like no other
          </h2>
          <p className="font-lato text-[15px] text-white/60 leading-relaxed mb-6">
            One of the most exciting eateries to open in years – These guys have years of experience and it shows, from the decor to the presentation – perfect!
          </p>
          <p className="font-script text-[32px] text-gold">Sukonna Islam</p>
        </FadeUp>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <SlideLeft>
            <img src={INTERIOR} alt="Interior" className="w-full rounded-[5px] object-cover shadow-soft" />
          </SlideLeft>
          <SlideRight>
            <p className="font-script text-[48px] md:text-[65px] text-teal leading-none mb-2">Visit Our</p>
            <h2 className="font-cinzel text-[32px] md:text-[52px] font-semibold uppercase text-black leading-none mb-6">
              Restaurant
            </h2>
            <p className="font-lato text-[15px] text-mute leading-relaxed mb-6">
              6th Floor, Ahmed &amp; Kazi Tower, House 57 (Old 35), Road 2, Dhanmondi, Dhaka.
            </p>
            <Link to="/find-us" className="btn-outline-dark">Get Locations</Link>
          </SlideRight>
        </div>
      </section>

      <section className="bg-[#fafafa] py-16">
        <Stagger className="max-w-content mx-auto px-4 grid sm:grid-cols-3 gap-4" stagger={0.12}>
          {FOOD.map((src, i) => (
            <StaggerItem key={i}>
              <img src={src} alt="" className="w-full aspect-square object-cover rounded-[5px] shadow-soft" />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  )
}
