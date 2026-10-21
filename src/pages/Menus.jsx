import { motion } from 'framer-motion'
import { FadeUp } from '../components/ScrollReveal'
import { menuCategories } from '../data/menu'

const HERO = 'https://rushcafebd.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-24-at-10.27.02-AM-1.jpeg'

export default function Menus() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-black">
        <img src={HERO} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="relative max-w-content mx-auto px-4 py-20 md:py-24 w-full text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-script text-[48px] md:text-[75px] text-gold leading-none"
          >
            Check out
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cinzel text-[40px] md:text-[70px] font-semibold uppercase text-white leading-none tracking-tight"
          >
            Our Menus
          </motion.h1>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-4 md:px-6">
          {menuCategories.map((cat, i) => (
            <FadeUp key={cat.name} delay={Math.min(i * 0.03, 0.2)} className="mb-16 last:mb-0">
              <h2 className="font-cinzel text-[24px] md:text-[32px] font-semibold uppercase text-black text-center mb-8 tracking-wide">
                {cat.name}
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-16 gap-y-3 max-w-4xl mx-auto">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex justify-between gap-4 border-b border-black/5 pb-2.5">
                    <span className="font-mont text-[14px] text-ink">{item.name}</span>
                    <span className="font-lato text-[13px] font-bold text-mute shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  )
}
