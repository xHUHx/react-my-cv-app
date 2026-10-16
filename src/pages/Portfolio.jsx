import NavBar from "./../components/NavBar";
import img2 from "./../assets/img2.png";
import img3 from "./../assets/img3.png";
import img4 from "./../assets/img4.png";
import img5 from "./../assets/img5.png";

export default function Portfolio() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* ส่วนของ NavBar (ใช้ pname='p' สำหรับหน้า Portfolio) */}
      <NavBar colorLinkNavbar="#FFF714" pname="p"/>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-12 pt-12 pb-24">
        {/* หัวข้อ Portfolio */}
        <h1 className="text-4xl font-serif font-bold text-center mb-20">Portfolio</h1>

        <div className="flex flex-col gap-28">
          
          {/* Project 1: Bikes and Beards (รูปซ้าย, ข้อความขวา) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={img2}
                alt="Bikes and Beards"
                className="w-full max-w-lg rounded-xl shadow-lg border border-gray-800 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <h3 className="text-2xl font-serif font-bold mb-4">Bikes and Beards</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non, placeat nulla quae odio asperiores ratione!
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="border border-white rounded-full px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  View
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 border border-white rounded-full px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  {/* GitHub SVG Icon */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Git code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: Learnify (ข้อความซ้าย, รูปขวา) */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={img3}
                alt="Learnify"
                className="w-full max-w-lg rounded-xl shadow-lg border border-gray-800 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <h3 className="text-2xl font-serif font-bold mb-4">Learnify</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non, placeat nulla quae odio asperiores ratione, placeat nulla.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="border border-white rounded-full px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  View
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 border border-white rounded-full px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Git code
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: Anime-X (รูปซ้าย, ข้อความขวา) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={img4}
                alt="Anime-X"
                className="w-full max-w-lg rounded-xl shadow-lg border border-gray-800 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <h3 className="text-2xl font-serif font-bold mb-4">Anime-X</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="border border-white rounded-full px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  View
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 border border-white rounded-full px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Git code
                </a>
              </div>
            </div>
          </div>

          {/* Project 4: Tech-Z (ข้อความซ้าย, รูปขวา) */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={img5}
                alt="Tech-Z"
                className="w-full max-w-lg rounded-xl shadow-lg border border-gray-800 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <h3 className="text-2xl font-serif font-bold mb-4">Tech-Z</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non, placeat nulla quae odio asperiores ratione! Accusantium placeat dolorem minus eos excepturi modi.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="border border-white rounded-full px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  View
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 border border-white rounded-full px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Git code
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}