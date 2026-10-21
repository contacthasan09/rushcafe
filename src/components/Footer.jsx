import { Link } from 'react-router-dom'

const LOGO_W = 'https://rushcafebd.com/wp-content/uploads/2020/12/Rush-Cafe-Logo-header-w.png'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <img src={LOGO_W} alt="Rush" className="h-12 mb-4" />
            <p className="font-lato text-[14px] text-white/50 leading-relaxed max-w-xs">
              Rush Bistro & Café — refined continental dining in Dhanmondi, Dhaka.
            </p>
          </div>
          <div>
            <p className="font-lato text-[12px] font-bold uppercase tracking-[2px] text-white/40 mb-4">Explore</p>
            <ul className="space-y-2 font-lato text-[14px] text-white/70">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/menus" className="hover:text-gold transition-colors">Menus</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/find-us" className="hover:text-gold transition-colors">Find Us</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li><Link to="/reservation" className="hover:text-gold transition-colors">Reservation</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-lato text-[12px] font-bold uppercase tracking-[2px] text-white/40 mb-4">Visit</p>
            <p className="font-lato text-[14px] text-white/70 leading-relaxed">
              6th Floor, Ahmed & Kazi Tower<br />
              House 57 (Old 35), Road 2<br />
              Dhanmondi, Dhaka
            </p>
            <p className="font-lato text-[14px] text-gold mt-3">
              <a href="tel:01706937578">01706-937578</a>
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between gap-2 text-[12px] text-white/35 font-lato">
          <span>© {new Date().getFullYear()} Rush Cafe. Clone for portfolio / study.</span>
          <span>Not affiliated with rushcafebd.com</span>
        </div>
      </div>
    </footer>
  )
}
