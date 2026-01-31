import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden">
            {/* Dynamic Background Effects */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />
            <div className="absolute top-[20%] left-[20%] w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px] opacity-30 pointer-events-none animate-pulse" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container px-4 mx-auto text-center max-w-5xl relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-500/30 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Nueva versión disponible 2.0
                </div>

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

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button className="group relative px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-full overflow-hidden transition-all hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        Explorar Solución
                    </button>

                    <button className="px-8 py-3.5 text-sm font-medium text-gray-300 hover:text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2">
                        <span>Ver Demo</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
