import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/5 bg-transparent backdrop-blur-[2px]">
            <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
                OpenWater
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                <Link href="#hero" className="hover:text-blue-400 transition-colors">
                    Inicio
                </Link>
                <Link href="#features" className="hover:text-blue-400 transition-colors">
                    Soluciones
                </Link>
                <Link href="#about" className="hover:text-blue-400 transition-colors">
                    Nosotros
                </Link>
            </nav>

            <div className="flex items-center gap-4">
                <Link href="#contact" className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    Iniciar Sesión
                </Link>
                <button className="px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    Comenzar
                </button>
            </div>
        </header>
    );
};

export default Header;
