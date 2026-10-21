import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeUp } from '../components/ScrollReveal'

const HERO = 'https://rushcafebd.com/wp-content/uploads/2026/04/42-scaled.jpg'

export default function Reservation() {
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-black">
        <img src={HERO} alt="" className="absolute inset-0 w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        <div className="relative max-w-content mx-auto px-4 py-20 md:py-28 w-full text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-script text-[48px] md:text-[75px] text-gold leading-none"
          >
            Book a Table
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-cinzel text-[40px] md:text-[70px] font-semibold uppercase text-white leading-none"
          >
            Reservation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="font-lato text-[15px] text-white/60 mt-4 max-w-md mx-auto"
          >
            Reserve your table at Rush Cafe &amp; Bistro — Dhanmondi.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <FadeUp className="max-w-xl mx-auto px-4">
          {sent ? (
            <div className="text-center py-16">
              <p className="font-script text-[48px] text-teal leading-none mb-3">Thank you</p>
              <p className="font-lato text-[15px] text-mute">
                Your reservation request has been received. We'll confirm shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-lato text-[12px] font-bold uppercase tracking-wide text-mute mb-1.5">Name</label>
                  <input required className="w-full border border-black/15 rounded-[4px] px-4 py-3 text-[14px] outline-none focus:border-teal transition-colors" placeholder="Full name" />
                </div>
                <div>
                  <label className="block font-lato text-[12px] font-bold uppercase tracking-wide text-mute mb-1.5">Phone</label>
                  <input required type="tel" className="w-full border border-black/15 rounded-[4px] px-4 py-3 text-[14px] outline-none focus:border-teal transition-colors" placeholder="01706-937578" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-lato text-[12px] font-bold uppercase tracking-wide text-mute mb-1.5">Email</label>
                  <input required type="email" className="w-full border border-black/15 rounded-[4px] px-4 py-3 text-[14px] outline-none focus:border-teal transition-colors" placeholder="you@email.com" />
                </div>
                <div>
                  <label className="block font-lato text-[12px] font-bold uppercase tracking-wide text-mute mb-1.5">Guests</label>
                  <select required className="w-full border border-black/15 rounded-[4px] px-4 py-3 text-[14px] outline-none focus:border-teal transition-colors bg-white">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-lato text-[12px] font-bold uppercase tracking-wide text-mute mb-1.5">Date</label>
                  <input required type="date" className="w-full border border-black/15 rounded-[4px] px-4 py-3 text-[14px] outline-none focus:border-teal transition-colors" />
                </div>
                <div>
                  <label className="block font-lato text-[12px] font-bold uppercase tracking-wide text-mute mb-1.5">Time</label>
                  <select required className="w-full border border-black/15 rounded-[4px] px-4 py-3 text-[14px] outline-none focus:border-teal transition-colors bg-white">
                    <option value="">Select time</option>
                    <option>10:30 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>5:30 PM</option>
                    <option>6:30 PM</option>
                    <option>7:30 PM</option>
                    <option>8:30 PM</option>
                    <option>9:30 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-lato text-[12px] font-bold uppercase tracking-wide text-mute mb-1.5">Message (optional)</label>
                <textarea className="w-full border border-black/15 rounded-[4px] px-4 py-3 text-[14px] outline-none focus:border-teal transition-colors min-h-[100px] resize-y" placeholder="Special requests..." />
              </div>
              <button type="submit" className="btn-outline-dark w-full text-center">
                Confirm Reservation
              </button>
              <p className="font-lato text-[12px] text-mute text-center">
                Or call <a href="tel:01706937578" className="text-teal font-semibold">01706-937578</a>
              </p>
            </form>
          )}
        </FadeUp>
      </section>
    </>
  )
}
