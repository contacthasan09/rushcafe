import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp, Stagger, StaggerItem } from '../components/ScrollReveal'

const HERO = 'https://rushcafebd.com/wp-content/uploads/2026/05/41-scaled.jpg'

export default function FindUs() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-black">
        <img src={HERO} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="relative max-w-content mx-auto px-4 py-20 md:py-24 w-full text-center">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="font-script text-[48px] md:text-[75px] text-gold leading-none">
            Where to
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-[40px] md:text-[70px] font-semibold uppercase text-white leading-none"
          >
            Find Us
          </motion.h1>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <FadeUp>
            <p className="font-script text-[36px] md:text-[48px] text-teal text-center leading-snug max-w-2xl mx-auto mb-16">
              "Until I discovered cooking I was never really interested in anything"
            </p>
          </FadeUp>

          <Stagger className="grid md:grid-cols-2 gap-12 mb-16" stagger={0.12}>
            <StaggerItem>
              <h3 className="font-mont text-[22px] font-bold text-black mb-3">Reserve by Phone</h3>
              <p className="font-lato text-[14px] text-mute leading-relaxed mb-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
              </p>
              <p className="font-lato text-[14px] text-ink">
                Please call us at <a href="tel:01706937578" className="text-teal font-semibold">01706-937578</a>
                <br />between 10am–6pm, Monday to Friday.
              </p>
            </StaggerItem>
            <StaggerItem>
              <h3 className="font-mont text-[22px] font-bold text-black mb-3">Event &amp; Group Booking</h3>
              <p className="font-lato text-[14px] text-mute leading-relaxed">
                Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit.
              </p>
            </StaggerItem>
          </Stagger>

          <Stagger className="grid sm:grid-cols-3 gap-8 border-t border-black/10 pt-12" stagger={0.1}>
            <StaggerItem>
              <p className="font-mont text-[14px] font-bold uppercase tracking-wide text-mute mb-2">Lunch Time</p>
              <p className="font-lato text-[15px] text-ink">Monday to Sunday</p>
              <p className="font-lato text-[15px] text-ink">10.30am – 3:00pm</p>
            </StaggerItem>
            <StaggerItem>
              <p className="font-mont text-[14px] font-bold uppercase tracking-wide text-mute mb-2">Dinner Time</p>
              <p className="font-lato text-[15px] text-ink">Monday to Sunday</p>
              <p className="font-lato text-[15px] text-ink">5.30pm – 11:00pm</p>
            </StaggerItem>
            <StaggerItem>
              <p className="font-mont text-[14px] font-bold uppercase tracking-wide text-mute mb-2">Location</p>
              <p className="font-lato text-[15px] text-ink leading-relaxed">
                6th Floor, Ahmed &amp; Kazi Tower, House 57 (Old 35), Road 2, Dhanmondi, Dhaka.
              </p>
            </StaggerItem>
          </Stagger>

          <FadeUp className="text-center mt-14">
            <Link to="/reservation" className="btn-outline-dark">Make an Online Reservation</Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
