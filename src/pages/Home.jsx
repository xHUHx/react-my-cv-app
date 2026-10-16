import NavBar from "./../components/NavBar";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import html from "./../assets/html.png";
import css from "./../assets/css.png";
import node from "./../assets/node.png";
import react from "./../assets/react.png";
import spring from "./../assets/spring.png";
import java from "./../assets/java.png";
import figma from "./../assets/figma.png";
import firebase from "./../assets/Firebase.png";
import grandFfun from "./../assets/grandFfun.png"; // <-- เพิ่มการ import รูปโปรไฟล์

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white pb-10">
      {/* ส่วนของ NavBar */}
      <NavBar pname='h' colorLinkNavbar="#FFF714" />

      {/* ส่วนของ Hero Section */}
      <div className="flex items-center justify-between pt-16 px-40">
        {/* รายละเอียดด้านซ้าย */}
        <div className="flex flex-col gap-3 max-w-xl">
          <span className="text-white text-6xl font-bold leading-tight">Full Stack Web</span>
          <span className="text-white text-6xl font-bold leading-tight">Developer !</span>
          <span className="text-white text-lg pt-2">Hi, I'm Thammachot SAU. A passionate Full Stack</span>
          <span className="text-white text-lg">Web Developer based in Thailand.</span>
          
          {/* Social Icons */}
          <div className="flex gap-4 pt-3">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all flex items-center justify-center"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all flex items-center justify-center"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>

        {/* รูปด้านขวา (เปลี่ยนมาใช้ grandFfun.png) */}
        <div>
          <img 
            src={grandFfun} 
            alt="Thammachot SAU Profile"
            className="w-[400px] h-[400px] object-cover rounded-full border-4 border-[#FFF714]" 
          />
        </div>
      </div>

      {/* ส่วนของ My Tech Stacks */}
      <div className="flex flex-col items-center justify-center pt-16 gap-6">
        <h3 className="text-white text-lg font-medium">My Tech Stacks</h3>
        <div className="flex items-center justify-center gap-8">
          <img src={html} alt="html" className="w-10 h-10 object-contain" />
          <img src={css} alt="css" className="w-10 h-10 object-contain" />
          <img src={node} alt="node" className="w-10 h-10 object-contain" />
          <img src={react} alt="react" className="w-10 h-10 object-contain" />
          <img src={spring} alt="spring" className="w-10 h-10 object-contain" />
          <img src={java} alt="java" className="w-10 h-10 object-contain" />
          <img src={figma} alt="figma" className="w-10 h-10 object-contain" />
          <img src={firebase} alt="firebase" className="w-10 h-10 object-contain" />
        </div>
      </div>
    </div>
  );
}