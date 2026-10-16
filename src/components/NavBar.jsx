export default function NavBar({pname, colorLinkNavbar}) {
  return (
    <>
      {/* ส่วนของ NavBar  */}
      <div className="w-full flex items-center justify-between px-20 pt-5">
        {/* โลโก้และชื่อเว็บด้านซ้าย */}
        <div className="">
          <span className="text-[#00FF90] text-3xl font-bold">{'>_'}</span>
          <span className="text-white text-3xl font-bold">Thammachot SAU</span>
        </div>

        {/* เมนูด้านขวา */}
        <div className="flex gap-5 items-center">
          <a href="/" className="text-white" style={{color: pname == 'h' ? colorLinkNavbar : '#ffffff'}}>Home</a>
          <a href="/about" className="text-white" style={{color: pname == 'a' ? colorLinkNavbar : '#ffffff'}}>About</a>
          <a href="/portfolio" className="text-white" style={{color: pname == 'c' ? colorLinkNavbar : '#ffffff'}}>Portfolio</a>
          <a href="/contact" className="text-white border-2 border-white px-4 py-1 rounded-2xl"
            style={{color: pname == 'p' ? colorLinkNavbar : '#ffffff'}}>
            Let's Talk
          </a>
        </div>
      </div>
    </>
  )
}