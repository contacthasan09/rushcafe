import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, FadeIn, SlideLeft, SlideRight, Stagger, StaggerItem } from '../components/ScrollReveal'
import { menuCategories } from '../data/menu'

const VIDEO = 'https://rushcafebd.com/wp-content/uploads/2021/01/Restaurant-Dishes.mp4.mp4'
const IMG = {
  a: 'https://rushcafebd.com/wp-content/uploads/2026/04/42-scaled.jpg',
  b: 'https://rushcafebd.com/wp-content/uploads/2026/04/35-scaled.jpg',
}

const homePreview = ['MAIN COURSES', 'SOUP', 'SALAD', 'BRUNCH']

function MenuBlock({ cat, delay = 0 }) {
  return (
    <FadeUp delay={delay} className="mb-14">
      <h3 className="font-cinzel text-[20px] md:text-[24px] font-semibold uppercase text-ink tracking-wide mb-6 text-center">
        {cat.name}
      </h3>
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3 max-w-3xl mx-auto">
        {cat.items.map((item) => (
          <div key={item.name} className="flex justify-between gap-4 border-b border-black/5 pb-2">
            <span className="font-mont text-[14px] text-ink">{item.name}</span>
            <span className="font-lato text-[13px] text-mute shrink-0">{item.price}</span>
          </div>
        ))}
      </div>
    </FadeUp>
  )
}

export default function Home() {
  const previewCats = menuCategories.filter((c) => homePreview.includes(c.name))

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <video src={VIDEO} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center px-4 py-32">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-script text-[48px] md:text-[65px] text-teal leading-none mb-2"
          >
            Welcome to
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-cinzel text-[56px] sm:text-[80px] md:text-[110px] font-black uppercase text-white leading-none tracking-wide"
          >
            RUSH
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.6 }}
            className="font-lato text-[14px] md:text-[16px] tracking-[4px] uppercase text-white/70 mt-3"
          >
            Cafe &amp; bistro
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55 }}
            className="mt-10"
          >
            <Link to="/menus" className="btn-outline-light">Discover Menu</Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-content mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <SlideLeft>
            <p className="font-script text-[48px] md:text-[65px] text-teal leading-none mb-2">Discover</p>
            <h2 className="font-cinzel text-[36px] md:text-[52px] font-semibold uppercase text-black leading-none tracking-tight mb-6">
              Our Story
            </h2>
            <p className="font-lato text-[15px] text-mute leading-relaxed mb-4">
              Established on December 24, 2024, Rush Bistro &amp; Café was created to offer a refined continental dining experience in a warm and welcoming setting.
            </p>
            <p className="font-lato text-[15px] text-mute leading-relaxed mb-4">
              Our Menu Features A Carefully Curated Selection Of Steaks, Fresh Seafood, Handcrafted Pasta, Signature Brunch Platters, Specialty Beverages, And Indulgent Desserts — Each Prepared With Premium Ingredients And Exceptional Attention To Detail.
            </p>
            <p className="font-lato text-[15px] text-mute leading-relaxed mb-6">
              At Rush Bistro &amp; Café, we believe great food brings people together. Sit back, relax, and enjoy a taste crafted with passion and elegance.
            </p>
            <p className="font-mont text-[13px] font-semibold text-ink uppercase tracking-wide">
              Crafted By Tahsin Ahmed &amp; Sukonna Islam
            </p>
          </SlideLeft>
          <SlideRight>
            <img src={IMG.a} alt="Dining" className="w-full rounded-[5px] object-cover aspect-[4/5] shadow-soft" />
          </SlideRight>
        </div>
      </section>

      <section className="bg-[#fafafa] py-20 md:py-28">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-script text-[48px] md:text-[65px] text-teal leading-none">Discover</p>
            <h2 className="font-cinzel text-[36px] md:text-[52px] font-semibold uppercase text-black leading-none">Menus</h2>
            <p className="font-lato text-[14px] text-mute max-w-md mx-auto mt-4 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </FadeUp>
          {previewCats.map((c, i) => (
            <MenuBlock key={c.name} cat={c} delay={i * 0.05} />
          ))}
          <FadeUp className="text-center mt-8">
            <Link to="/menus" className="btn-outline-dark">View Full Menu</Link>
          </FadeUp>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <img src={IMG.b} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <FadeUp className="relative max-w-content mx-auto px-4 text-center text-white">
          <p className="font-script text-[48px] md:text-[65px] text-gold leading-none">Visit Our</p>
          <h2 className="font-cinzel text-[36px] md:text-[55px] font-semibold uppercase leading-none mb-6">Restaurant</h2>
          <p className="font-lato text-[15px] text-white/75 max-w-lg mx-auto mb-8">
            6th Floor, Ahmed &amp; Kazi Tower, House 57 (Old 35), Road 2, Dhanmondi, Dhaka.
          </p>
          <Link to="/find-us" className="btn-outline-light">Get Locations</Link>
        </FadeUp>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-content mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12">
          <FadeUp>
            <p className="font-script text-[40px] text-teal leading-none mb-2">Hours</p>
            <div className="space-y-4 font-lato text-[14px] text-mute">
              <div>
                <p className="font-mont font-semibold text-ink text-[15px]">Lunch Time</p>
                <p>Monday to Sunday · 10.30am – 3:00pm</p>
              </div>
              <div>
                <p className="font-mont font-semibold text-ink text-[15px]">Dinner Time</p>
                <p>Monday to Sunday · 5.30pm – 11:00pm</p>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-script text-[40px] text-teal leading-none mb-2">Reserve</p>
            <p className="font-lato text-[14px] text-mute mb-4 leading-relaxed">
              Please call us at <strong className="text-ink">01706-937578</strong> between 10am–6pm, Monday to Friday — or book online.
            </p>
            <Link to="/reservation" className="btn-teal-text">Make an Online Reservation</Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
