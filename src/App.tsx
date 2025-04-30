import emailjs from 'emailjs-com';
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Modal from "react-modal";
Modal.setAppElement("#root");

const PROFILE_PLACEHOLDER = "https://same-assets.com/ai-portfolio/profile-placeholder.jpg";

function Navbar() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "My_Resume.pdf";
    link.click();
  };

  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-transparent text-white text-lg font-semibold">
      <span className="text-2xl font-bold select-none">
        <span className="text-white">Arben</span>
        <span className="text-red-500"> Abrao</span>
      </span>
      <ul className="flex gap-8 items-center">
        <li><a href="#home" className="hover:text-red-400 transition">Home</a></li>
        <li><a href="#about" className="hover:text-red-400 transition">About</a></li>
        <li><a href="#service" className="hover:text-red-400 transition">Service</a></li>
        <li><a href="#portfolio" className="hover:text-red-400 transition">Portfolio</a></li>
        <li><a href="#contact" className="hover:text-red-400 transition">Contact</a></li>
        <li>
          <button
            onClick={handleDownload}
            className="ml-4 px-5 py-2 border border-red-500 rounded-full text-red-500 hover:bg-red-600 hover:text-white transition font-bold"
          >
            My Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between h-[90vh] md:h-[80vh] px-6 md:px-24 pt-10 scroll-mt-10"
      style={{
        background: "linear-gradient(135deg, #000 0%, #222 80%, #ff1744 100%)",
      }}
    >
      <div className="flex-1 mt-14 md:mt-0 text-center md:text-left">
        <h5 className="uppercase tracking-wide text-lg md:text-base mb-2 text-gray-300">
          Hello there, welcome to my site
        </h5>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          I'm <span className="whitespace-nowrap">Arben Abrao</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-extrabold text-red-500 mb-2">
          4th Year Computer Engineering Student
        </h2>
        <h3 className="text-xl md:text-2xl mb-8 text-white font-medium">
          & Web Developer | Tech Enthusiast
        </h3>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#portfolio"
            className="bg-red-600 hover:bg-red-700 transition px-7 py-3 rounded-full text-white font-semibold flex items-center shadow-lg"
          >
            See Portfolio
          </a>
          <a
            href="#contact"
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition px-7 py-3 rounded-full font-semibold flex items-center"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end items-center">
        <div className="p-2 md:p-4 bg-gradient-to-tr from-red-600 to-white rounded-[2.5rem] md:rounded-[3rem] inline-block shadow-xl">
          <img
            src="img/profile.jpg"
            alt="Profile"
            className="w-52 h-64 md:w-64 md:h-80 object-cover rounded-[2rem] md:rounded-[2.6rem] bg-gray-200"
          />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-14 px-8 bg-gradient-to-bl from-black/90 to-gray-900 flex flex-col items-center scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">About Me</h2>
      <div className="max-w-2xl mx-auto text-lg text-gray-100 flex flex-col gap-6 text-center">
        <p>
          Hi! I'm <span className="font-bold text-white">Arben Abrao</span>, a 4th-year Computer Engineering student passionate about web development, embedded systems, and emerging technologies. 
          I have built projects like an <span className="font-bold text-red-400">Attendance System</span> and <span className="font-bold text-red-400">Inventory System</span>. 
          I enjoy creating websites and working with microcontrollers like <span className="font-bold text-red-400">Arduino</span> and <span className="font-bold text-red-400">Raspberry Pi</span>.
          I also have a solid foundation in <span className="font-bold">AutoCAD 2D/3D</span>, <span className="font-bold">Excel</span>, and programming languages such as 
          <span className="font-bold"> PHP</span>, <span className="font-bold">React.js</span>, <span className="font-bold">React Native</span>, <span className="font-bold">JavaScript/JSX</span>, <span className="font-bold">HTML</span>, <span className="font-bold">CSS</span>, and technologies like <span className="font-bold">Vite</span>, <span className="font-bold">XAMPP</span>, <span className="font-bold">SQL</span>, <span className="font-bold">AI</span>, <span className="font-bold">Machine Learning</span>, and <span className="font-bold">IoT</span>.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <span className="bg-red-700/90 px-4 py-2 rounded-lg text-white text-sm">Web Developer</span>
          <span className="bg-white px-4 py-2 rounded-lg text-black text-sm font-semibold">Embedded Systems Enthusiast</span>
          <span className="bg-gray-700 px-4 py-2 rounded-lg text-white text-sm">Tech Explorer</span>
          <span className="bg-red-400 px-4 py-2 rounded-lg text-black text-sm font-semibold">Always Learning</span>
        </div>
      </div>
    </section>
  );
}
function FloatSection1() {
  return (
    <section id="service" className="py-14 px-8 bg-black/90 flex flex-col items-center scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">What I Do</h2>
      <div className="flex flex-wrap justify-center gap-10 mt-8">
        <div className="bg-gray-800 rounded-3xl p-6 w-72 hover:scale-105 transition-all">
          <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
          <p className="text-gray-300">Building modern websites using PHP, ReactJS, Vite, and JavaScript to deliver responsive and dynamic web applications.</p>
        </div>
        <div className="bg-gray-800 rounded-3xl p-6 w-72 hover:scale-105 transition-all">
          <h3 className="text-xl font-bold text-white mb-4">Embedded Systems</h3>
          <p className="text-gray-300">Creating projects with Arduino, Raspberry Pi, and microcontrollers, combining hardware with software innovation.</p>
        </div>
        <div className="bg-gray-800 rounded-3xl p-6 w-72 hover:scale-105 transition-all">
          <h3 className="text-xl font-bold text-white mb-4">AI & Machine Learning</h3>
          <p className="text-gray-300">Exploring artificial intelligence, machine learning, and IoT to solve real-world problems intelligently and efficiently.</p>
        </div>
      </div>
    </section>
  );
}

function FloatSection() {
  return (
    <section className="w-full flex items-center justify-center relative my-12 select-none" aria-label="Float Highlights">
      <div className="absolute left-10 top-2 animate-bounce">
        <span className="bg-black px-6 py-3 rounded-xl text-red-400 font-bold shadow-lg shadow-red-500/30 border border-red-600">Tailwind CSS</span>
      </div>
      <div className="absolute right-12 top-5 animate-pulse">
        <span className="bg-red-600 px-5 py-2 rounded-lg text-white shadow-xl border border-white/30">ReactJS</span>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 animate-spin-slow">
        <span className="bg-gradient-to-tr from-black to-red-700 rounded-full w-14 h-14 inline-block opacity-40" />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-semibold text-red-400">Building ideas. Learning daily. 🚀</span>
      </div>
    </section>
  );
}

function CardSection() {
  return (
    <section id="service" className="py-14 bg-gradient-to-tr from-black to-gray-900 flex flex-col gap-10 items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">My Projects & Skills</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="bg-black/80 backdrop-blur-md border border-red-600 rounded-xl px-8 py-7 w-72 shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold text-red-600 mb-2">Attendance System</h3>
          <p className="text-gray-100 mb-3">An automated system built using PHP, SQL, and IoT technologies for efficient attendance monitoring.</p>
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-red-500/30 text-red-400 mr-2">PHP, JavaScript</span>
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-white/50 text-black">CSS, Bootsrap</span>
        </div>
        <div className="bg-black/80 backdrop-blur-md border border-red-600 rounded-xl px-8 py-7 w-72 shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold text-red-400 mb-2">IoT Project</h3>
          <p className="text-gray-100 mb-3">Smart monitoring system using microcontrollers, sensors and cloud integration.</p>
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-red-500/30 text-red-400 mr-2">IoT</span>
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-white/50 text-black">Cloud</span>
        </div>
        <div className="bg-black/80 backdrop-blur-md border border-red-600 rounded-xl px-8 py-7 w-72 shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold text-red-300 mb-2">Arduino Projects</h3>
          <p className="text-gray-100 mb-3">Hands-on automation and robotics projects with Arduino.</p>
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-red-400/30 text-red-400 mr-2">Arduino</span>
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-white/50 text-black">Robotics</span>
        </div>
      </div>
    </section>
  );
}



function GallerySection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const openModal = (imgSrc) => {
    setCurrentImg(imgSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImg('');
  };

  return (
    <section id="portfolio" className="py-14 px-8 bg-gradient-to-br from-black to-red-900/70">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
          const imgSrc = `img/gallery${i}.jpg`;
          return (
            <div
              key={i}
              onClick={() => openModal(imgSrc)}
              className="w-full aspect-[3/2] bg-black border border-red-800 rounded-2xl overflow-hidden shadow hover:scale-105 transition cursor-pointer"
            >
              <img
                src={imgSrc}
                alt={`Project ${i}`}
                className="w-full h-full object-contain"
              />
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Preview"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
      >
        <div className="relative p-4 bg-black rounded-lg max-w-4xl w-full">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white text-2xl hover:text-red-500"
            aria-label="Close"
          >
            &times;
          </button>
          <img src={currentImg} alt="Preview" className="w-full max-h-[80vh] object-contain rounded-md" />
        </div>
      </Modal>
    </section>
  );
}




function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-14 px-5 md:px-0 bg-gradient-to-tl from-black to-red-900/80 flex flex-col items-center scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Contact Me</h2>

      {submitted ? (
        <div className="bg-green-600/80 px-8 py-6 rounded-xl text-white text-lg font-semibold mt-4">
          Thank you for your message!
        </div>
      ) : (
        <form
          className="w-full max-w-lg bg-black/90 border border-white/20 p-8 rounded-2xl flex flex-col gap-5 shadow-lg"
          onSubmit={e => {
            e.preventDefault();
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3500);
          }}
        >
          <input required className="rounded-md px-4 py-3 outline-none bg-white text-black" type="text" placeholder="Your name" name="name" autoComplete="off" />
          <input required className="rounded-md px-4 py-3 outline-none bg-white text-black" type="email" placeholder="Your email" name="email" autoComplete="off" />
          <textarea required className="rounded-md px-4 py-3 outline-none bg-white text-black h-32" placeholder="Your message" name="message" />
          <button className="bg-red-600 hover:bg-red-700 font-semibold text-white py-3 rounded-lg transition mt-2" type="submit">
            Send Message
          </button>
        </form>
      )}

      {/* Social Links */}
      <div className="flex gap-6 mt-8 text-white">
        <a
          href="arbenabrao123@gmail.com"
          className="text-2xl hover:text-red-500 transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/ArbenAbrao"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-red-500 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/arben-abrao-963b4335a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-red-500 transition"
          aria-label="Facebook"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

const socials = [
  { name: "Facebook", url: "https://web.facebook.com/arben.abrao.3/", icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.676 0H1.322C.594 0 0 .593 0 1.326V22.67c0 .73.594 1.324 1.322 1.324h11.488V14.7h-3.13v-3.62h3.13V8.413c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.466.098 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.62h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.324V1.326C24 .593 23.406 0 22.676 0"/></svg>) },
  { name: "Instagram", url: "https://www.instagram.com/a.rbnn_/", icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Zm1.5-4.87h.01"/></svg>) },
  { name: "X", url: "https://x.com/arbennii", icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M20.952 2.555c-2.492 0-4.857 1.477-5.813 3.832-1.013 2.47-.258 5.444 2.037 7.07-1.545 4.577-6.062 7.715-10.856 8.002A.749.749 0 0 0 5 22.13h12.6a.749.749 0 0 0 .68-.98 10.092 10.092 0 0 0 .672-5.426c-.764-.428-1.655-.665-2.6-.665-2.409 0-4.356 1.706-4.356 3.808 0 1.11.574 2.17 1.637 2.873a.749.749 0 0 0 .865-1.232C13.257 19.26 13 18.65 13 18c0-.881.765-1.6 1.702-1.6.937 0 1.701.719 1.701 1.6a2.4 2.4 0 0 1-.314 1.16.75.75 0 1 0 1.308.703C19.111 18.59 20 16.86 20 14.96a8.948 8.948 0 0 0-.177-1.882c4.275-3.202 6.67-9.209 6.67-13.296 0-.547-.444-.991-.991-.991-.547 0-.991.444-.991.991 0 1.607-.835 5.273-2.81 6.781Z" /></svg>) },
  { name: "GitHub", url: "https://github.com/ArbenAbrao", icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-2c-2.8.6-3.4-1.3-3.4-1.3C5 18.2 4.2 17.8 4.2 17.8c-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .8a2.3 2.3 0 0 1 .7-1.5c-2.3-.3-4.7-1.2-4.7-5a4 4 0 0 1 1-2.8 3.7 3.7 0 0 1 .1-2.8s.9-.3 2.8 1.1a9.2 9.2 0 0 1 5 0C17 7.6 17.9 7.9 17.9 7.9c.4.7.2 2 .1 2.8a4 4 0 0 1 1 2.8c0 3.8-2.4 4.7-4.7 5a2.5 2.5 0 0 1 .7 1.9v2.8c0 .3.2.6.8.5A12 12 0 0 0 12 0"/></svg>) }
];

function Footer() {
  return (
    <footer className="py-7 px-10 text-white bg-black text-center mt-10 select-none flex flex-col gap-3 items-center border-t border-red-900">
      <div className="flex gap-6 justify-center mb-3">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="hover:text-red-400 text-2xl transition"
          >
            {s.icon}
          </a>
        ))}
      </div>
      <span className="text-lg">© {new Date().getFullYear()} Arben Abrao. All rights reserved.</span>
    </footer>
  );
}

export default function App() {
  React.useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchor = (e: MouseEvent) => {
      const anchor = (e.target as HTMLAnchorElement)?.closest('a[href^="#"]');
      if(anchor) {
        const id = anchor.getAttribute('href')?.replace('#','');
        if(id && document.getElementById(id)) {
          e.preventDefault();
          document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
        }
      }
    };
    document.addEventListener('click', handleAnchor);
    return () => document.removeEventListener('click', handleAnchor);
  }, []);
  return (
    <div className="min-h-screen bg-black font-sans">
      <Navbar />
      <Hero />
      <AboutSection />
      <FloatSection1 />
      <FloatSection />
      <CardSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
