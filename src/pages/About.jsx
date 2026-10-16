import NavBar from "../components/NavBar";
import img1 from "./../assets/img1.png";

export default function About() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* NavBar ของอาจารย์ */}
      <NavBar pname="a" colorLinkNavbar="#FFF714" />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-12 pt-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          
          {/* ฝั่งซ้าย: หัวข้อ About Me และรูปภาพ */}
          <section className="w-full md:w-1/2 flex flex-col items-start">
            <h1 className="text-4xl font-serif font-bold mb-8">About Me</h1>
            <img
              src={img1}
              alt="Colorful abstract shape"
              className="w-60 h-60 object-contain ml-4"
            />
          </section>

          {/* ฝั่งขวา: ข้อความแนะนำตัวและเนื้อหา */}
          <section className="w-full md:w-1/2">
            <h4 className="text-xl font-serif font-bold leading-snug mb-6">
              Hi, I'm NinniN SAU. A passionate Full Stack Web Developer based in Thailand.
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              rerum odit labore unde nemo omnis sequi hic sit laudantium
              repellendus recusandae vitae ea laborum, ipsa nisi eos autem.
              Blanditiis consequuntur velit nesciunt aperiam odit excepturi
              repellat libero in enim praesentium! Ex dicta est suscipit ipsam
              voluptate tempora voluptatum quam distinctio minus saepe nobis nulla
              amet fugiat sit autem deserunt asperiores vitae ea, libero sed!
              Libero fugit non, placeat nulla quae odio asperiores ratione!
              Accusantium placeat dolorem minus eos excepturi modi.
            </p>
          </section>
        </div>

        {/* ปุ่ม Download CV ตรงกลางด้านล่าง */}
        <div className="flex justify-center mt-16">
          <a
            href="/cv.pdf"
            download
            className="border border-white rounded-full px-8 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </main>
    </div>
  );
}