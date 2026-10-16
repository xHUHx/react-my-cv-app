import NavBar from "./../components/NavBar";
import c1 from "./../assets/c1.png";
import c2 from "./../assets/c2.png";
import c3 from "./../assets/c3.png";

export default function Contact() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* ส่วนของ NavBar (ใช้ pname='p' เพื่อให้ไฮไลต์เมนู Let's talk เป็นสีเหลืองตามรูป) */}
      <NavBar pname='p' colorLinkNavbar="#FFF714" />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pt-20 flex flex-col items-center text-center">
        {/* Heading & Subtitle */}
        <h1 className="text-5xl font-serif font-bold mb-4">Let&apos;s talk</h1>
        <p className="text-gray-400 text-base mb-24">
          Don&apos;t be a stranger! Say hello and let&apos;s collaborate
        </p>

        {/* Contact Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-4xl">
          {/* Email */}
          <div className="flex flex-col items-center gap-4">
            <img src={c1} alt="Email icon" className="w-16 h-16 object-contain" />
            <span className="text-gray-300 text-sm font-medium">ninninsau@gmail.com</span>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center gap-4">
            <img src={c2} alt="Location icon" className="w-16 h-16 object-contain" />
            <span className="text-gray-300 text-sm font-medium">Thailand, Bangkok</span>
          </div>

          {/* Social / Name */}
          <div className="flex flex-col items-center gap-4">
            <img src={c3} alt="Social icon" className="w-16 h-16 object-contain" />
            <span className="text-gray-300 text-sm font-medium">NinniN SAU</span>
          </div>
        </div>
      </main>
    </div>
  );
}