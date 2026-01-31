import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden">
            {/* Efectos de fondo dinámicos */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />
            <div className="absolute top-[20%] left-[20%] w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px] opacity-30 pointer-events-none animate-pulse" />

            {/* Patrón de cuadrícula */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container px-4 mx-auto text-center max-w-5xl relative z-10">
                <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">
                    El futuro del agua <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        es transparente.
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                    OpenWater conecta tecnología y sostenibilidad.
                    <span className="text-gray-200 font-medium"> Monitoreo en tiempo real</span> y gestión eficiente para garantizar el acceso al agua en todo México.
                </p>

                {/* Botones Estilo Linear Refinados */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button className="group relative px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
                        <span className="relative flex items-center gap-2">
                            Explorar Solución
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </span>
                    </button>

                    <button className="relative px-6 py-3 text-sm font-medium text-gray-400 transition-colors group hover:text-white">
                        <span className="relative z-10">Ver Demo</span>
                        <div className="absolute bottom-2 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-blue-400 transition-all duration-500 ease-out group-hover:w-1/2 opacity-0 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 bg-white/5 rounded-full scale-90 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-10"></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
