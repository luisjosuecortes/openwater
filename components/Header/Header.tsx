import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        // Encabezado fijo con fondo transparente, efecto de desenfoque y altura reducida
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-3 flex items-center justify-between border-b border-white/5 bg-transparent backdrop-blur-[4px]">
            {/* Logotipo (Izquierda) */}
            <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors z-20">
                OpenWater
            </Link>

            {/* Enlace Inicio (Centro Abosluto) */}
            <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link href="#hero" className="text-xs font-medium text-gray-400 hover:text-white transition-colors tracking-wide uppercase">
                    Inicio
                </Link>
            </nav>

            {/* Botón Comenzar (Derecha) - Estilo Linear Refinado */}
            <div className="flex items-center gap-4 z-20">
                <button className="group relative px-4 py-1.5 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all overflow-hidden">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
                    <span className="relative">Comenzar</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
