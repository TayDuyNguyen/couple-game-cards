
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-magenta rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-brand-magenta/20">H</div>
              <span className="text-3xl font-bold tracking-tight text-white">Card Hub</span>
            </div>
            <p className="text-white/40 max-w-sm mb-10 leading-relaxed text-lg">
              Sứ mệnh của chúng tôi là mang mọi người lại gần nhau hơn thông qua những trải nghiệm giải trí chân thực và sâu sắc.
            </p>
            <div className="flex gap-6">
              {['FB', 'IG', 'TT', 'YT'].map(social => (
                <a key={social} href="#" className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-white/60 hover:text-brand-magenta hover:border-brand-magenta/40 transition-all font-bold">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-xl text-white">Khám phá</h4>
            <ul className="space-y-4 text-white/40">
              <li><a href="#" className="hover:text-brand-magenta transition-colors">Về chúng mình</a></li>
              <li><a href="#" className="hover:text-brand-magenta transition-colors">Bộ sưu tập bài</a></li>
              <li><a href="#" className="hover:text-brand-magenta transition-colors">Blog chia sẻ</a></li>
              <li><a href="#" className="hover:text-brand-magenta transition-colors">Cộng đồng</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-xl text-white">Hỗ trợ</h4>
            <ul className="space-y-4 text-white/40">
              <li><a href="#" className="hover:text-brand-magenta transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-brand-magenta transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="hover:text-brand-magenta transition-colors">Liên hệ hỗ trợ</a></li>
              <li><a href="#" className="hover:text-brand-magenta transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-center">
          <p className="text-white/20 text-sm font-medium tracking-widest uppercase">
            © 2024 CARD GAME HUB. DESIGNED WITH <span className="text-brand-magenta animate-pulse">❤</span> FOR YOU.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
