import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl text-rose-400" style={{fontFamily: 'satoshi-black'}}>Basetsana Matsepane</h2>
          <p className="text-sm text-gray-300 mt-2" style={{fontFamily: 'satoshi-medium'}}>
            Aspiring IT Student.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg mb-3" style={{fontFamily: 'satoshi-bold'}}>Quick Links</h3>
          <ul className="space-y-2 text-gray-300" style={{fontFamily: 'satoshi-medium'}}>
            <li><a href="/about" className="hover:text-rose-400 transition">About</a></li>
            <li><a href="/skills" className="hover:text-rose-400 transition">Skills</a></li>
            <li><a href="/projects" className="hover:text-rose-400 transition">Projects</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3" style={{fontFamily: 'satoshi-bold'}}>Connect</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com/BBMatsepane" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/basetsana-matsepane-1b6a01362/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition">
              <FaLinkedin />
            </a>
            <a href="basetsanamatsepane@gmail.com" className="hover:text-rose-400 transition">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Basetsana Matsepane
      </div>
    </footer>
  )
}

export default Footer
