import { motion } from 'framer-motion'
import { FadeUp, Stagger, StaggerItem } from '../components/ScrollReveal'

const HERO = 'https://rushcafebd.com/wp-content/uploads/2020/12/photo-1426259759666-68da5c54402d.jpg'
const NEWS = 'https://rushcafebd.com/wp-content/uploads/2021/01/newsletter_bg.jpg'

const posts = [
  { title: 'Hello world!', excerpt: 'Welcome to WordPress This is your first post Edit or delete it, then start...', date: { d: '20', m: 'Apr' }, img: 'https://rushcafebd.com/wp-content/uploads/2015/03/louis-hansel-shotsoflouis-KQR3ENYfrpw-unsplash-768x771.jpg' },
  { title: 'Black Spaghetti with Rock Shrimp', excerpt: 'Lorem ipsum dosectetur adipisicing elit, sed doLorem ipsum dolor sit amet, consectetur...', date: { d: '18', m: 'Apr' }, img: 'https://rushcafebd.com/wp-content/uploads/2015/04/photo-1445093498563-4ba5fecf1bc7-768x768.jpg' },
  { title: 'Cooking Food With Love', excerpt: 'Lorem ipsum dosectetur adipisicing elit, sed doLorem ipsum dolor sit amet, consectetur...', date: { d: '17', m: 'Apr' }, img: 'https://rushcafebd.com/wp-content/uploads/2015/04/duck-legs-confit-with-potato-gratin-and-mushroom-s-HBRTN66-768x768.jpg' },
  { title: 'Modern Fusion Cuisine', excerpt: 'Lorem ipsum dosectetur adipisicing elit, sed doLorem ipsum dolor sit amet, consectetur...', date: { d: '16', m: 'Apr' }, img: 'https://rushcafebd.com/wp-content/uploads/2015/03/louis-hansel-shotsoflouis-KQR3ENYfrpw-unsplash-768x771.jpg' },
  { title: 'Amazing Dining Experience Begins', excerpt: 'Lorem ipsum dosectetur adipisicing elit, sed doLorem ipsum dolor sit amet, consectetur...', date: { d: '09', m: 'Apr' }, img: 'https://rushcafebd.com/wp-content/uploads/2015/04/photo-1445093498563-4ba5fecf1bc7-768x768.jpg' },
  { title: 'Our Premium Food Recipe', excerpt: 'Lorem ipsum dosectetur adipisicing elit, sed doLorem ipsum dolor sit amet, consectetur...', date: { d: '05', m: 'Apr' }, img: 'https://rushcafebd.com/wp-content/uploads/2015/04/duck-legs-confit-with-potato-gratin-and-mushroom-s-HBRTN66-768x768.jpg' },
]

export default function Blog() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-black">
        <img src={HERO} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="relative max-w-content mx-auto px-4 py-20 md:py-24 w-full text-center">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="font-script text-[48px] md:text-[75px] text-gold leading-none">
            Check out
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-[40px] md:text-[70px] font-semibold uppercase text-white leading-none"
          >
            Our Blog
          </motion.h1>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Stagger className="max-w-content mx-auto px-4 md:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.1}>
          {posts.map((p) => (
            <StaggerItem key={p.title}>
              <article className="group">
                <div className="relative overflow-hidden rounded-[5px] aspect-square mb-4">
                  <img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white px-3 py-2 text-center shadow-soft">
                    <p className="font-cinzel text-[18px] font-semibold text-black leading-none">{p.date.d}</p>
                    <p className="font-lato text-[11px] uppercase text-mute tracking-wide">{p.date.m}</p>
                  </div>
                </div>
                <h2 className="font-cinzel text-[18px] md:text-[22px] font-semibold text-black mb-2 group-hover:text-teal transition-colors">
                  {p.title}
                </h2>
                <p className="font-lato text-[14px] text-mute leading-relaxed mb-3">{p.excerpt}</p>
                <span className="font-lato text-[12px] font-bold uppercase tracking-[2px] text-ink border-b border-ink/30 pb-0.5">
                  Continue Reading
                </span>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="relative py-20 overflow-hidden">
        <img src={NEWS} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <FadeUp className="relative max-w-lg mx-auto px-4 text-center text-white">
          <p className="font-script text-[48px] text-gold leading-none mb-2">Subscribe</p>
          <p className="font-lato text-[14px] text-white/70 mb-6">Get the latest from Rush Cafe</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-white/10 border border-white/30 rounded-[5px] px-4 py-3 text-[14px] text-white placeholder:text-white/40 outline-none focus:border-gold"
            />
            <button type="submit" className="btn-solid-white">Subscribe</button>
          </form>
        </FadeUp>
      </section>
    </>
  )
}
