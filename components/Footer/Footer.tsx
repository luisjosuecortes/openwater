import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 bg-black/20 border-t border-white/5 backdrop-blur-sm">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold tracking-tight text-white/90">OpenWater</span>
                        <span className="text-gray-600">© 2026</span>
                    </div>

                    <div className="flex items-center gap-8 text-sm text-gray-500">
                        <Link href="#" className="hover:text-blue-400 transition-colors">Privacidad</Link>
                        <Link href="#" className="hover:text-blue-400 transition-colors">Términos</Link>
                        <Link href="#" className="hover:text-blue-400 transition-colors">Twitter</Link>
                        <Link href="#" className="hover:text-blue-400 transition-colors">GitHub</Link>
                        <Link href="#" className="hover:text-blue-400 transition-colors">Contacto</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
