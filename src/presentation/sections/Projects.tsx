"use client";

import { useState, useRef, useEffect } from "react";
import { resumeData } from "@/core/data/resume";
import { Container, Section } from "@/presentation/components/ui/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/presentation/components/ui/BrandIcons";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/presentation/components/ui/SectionHeader";

export function Projects() {
    const t = useTranslations('Projects');
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [isScrollable, setIsScrollable] = useState(false);

    const [scrollProgress, setScrollProgress] = useState(0);

    const checkScroll = () => {
        if (galleryRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
            
            // Calculate progress
            const maxScroll = scrollWidth - clientWidth;
            setIsScrollable(maxScroll > 40); // Increased threshold to avoid edge cases with negative margins
            if (maxScroll > 0) {
                setScrollProgress((scrollLeft / maxScroll) * 100);
            }
        }
    };

    // Check scroll on mount, when selected project changes, and on window resize
    useEffect(() => {
        if (selectedProject !== null) {
            // Initial check
            setTimeout(checkScroll, 100);

            // Set up ResizeObserver for the gallery
            const observer = new ResizeObserver(() => {
                checkScroll();
            });

            if (galleryRef.current) {
                observer.observe(galleryRef.current);
            }

            window.addEventListener('resize', checkScroll);
            return () => {
                observer.disconnect();
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, [selectedProject]);

    const scrollGallery = (direction: 'left' | 'right') => {
        if (galleryRef.current) {
            const amount = direction === 'left' ? -galleryRef.current.clientWidth * 0.7 : galleryRef.current.clientWidth * 0.7;
            galleryRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    const projectsWithIndices = resumeData.projects.map((project, index) => ({ project, index }));
    const filteredProjects = projectsWithIndices;

    return (
        <Section id="projects" className="bg-card-bg/20">
            <Container>
                <div className="space-y-12">
                    <SectionHeader number="03" title={t('title')} />


                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatePresence mode="popLayout">
                        {filteredProjects.map(({ project, index: originalIndex }, displayIdx) => {
                            const isFeatured = displayIdx === 0;
                            
                            return (
                            <motion.div
                                key={originalIndex}
                                layout
                                layoutId={`card-${originalIndex}`}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ delay: displayIdx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                onClick={() => setSelectedProject(originalIndex)}
                                className={`group relative transition-all duration-700 hover:-translate-y-2 flex cursor-pointer
                                    ${isFeatured 
                                        ? 'col-span-1 md:col-span-2 flex-col md:flex-row md:h-[500px] mt-24 mb-32' 
                                        : 'col-span-1 flex-col h-full mb-12'
                                    }
                                `}
                            >
                                {/* Ribbon Label for Professional Experience (Featured Only) */}
                                {project.category === 'professional' && isFeatured && (() => {
                                    return (
                                        <div className={`absolute z-[60] drop-shadow-xl pointer-events-none transition-all top-8 md:top-12 -left-2`}>
                                            <div className="relative">
                                                {/* Corner Fold */}
                                                <div className="absolute -bottom-[8px] border-t-[8px] border-t-[var(--accent)] brightness-[0.4] left-0 border-l-[8px] border-l-transparent"></div>
                                                
                                                {/* Ribbon Body */}
                                                <div className="bg-[var(--accent)] text-[#0a0a0a] font-display font-bold uppercase tracking-[0.1em] flex flex-row items-center border-y border-white/20 shadow-2xl text-xs md:text-sm py-2 px-4 md:px-6 gap-2 rounded-r border-r">
                                                    <span>{t('filters.professional')}</span>
                                                    {project.associatedCompany && (
                                                        <span className="opacity-80 font-bold normal-case tracking-normal border-black/20 border-l pl-2 text-[10px] md:text-sm">
                                                            {project.associatedCompany}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}

                                {isFeatured ? (
                                    <>
                                        {/* Background Layer with Overflow Hidden (for Blobs and Borders) */}
                                        <div className="absolute inset-0 z-0 bg-[#080808] rounded-3xl border border-white/5 shadow-2xl overflow-hidden group-hover:border-[var(--accent)]/30 transition-colors duration-700">
                                            <div className="absolute inset-0 bg-[#050505]" />
                                            <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-[var(--accent)]/30 rounded-full blur-[120px] mix-blend-screen" />
                                            <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[130px] mix-blend-screen" />
                                            
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[8rem] md:text-[14rem] font-black text-white/[0.02] tracking-tighter whitespace-nowrap select-none pointer-events-none">
                                                {t(`items.item${originalIndex}.title`).toUpperCase()}
                                            </div>
                                        </div>

                                        {/* Content Side */}
                                        <div className="p-8 md:p-14 lg:p-16 flex-1 flex flex-col justify-center relative z-20 w-full md:w-1/2 pointer-events-auto">
                                            <motion.h3 layoutId={`title-${originalIndex}`} className={`font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-4 drop-shadow-md
                                                ${project.category === 'professional' ? 'mt-12 md:mt-20' : ''}
                                            `}>
                                                {t(`items.item${originalIndex}.title`)}
                                            </motion.h3>

                                            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg font-light mb-8">
                                                {t(`items.item${originalIndex}.description`)}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {project.tags?.map((tag, tIdx) => (
                                                    <span
                                                        key={tIdx}
                                                        className="font-mono text-[11px] font-semibold bg-white/5 text-white/90 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md transition-colors hover:bg-white/10"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Breakout Image Side (Right) - Image escapes the boundaries */}
                                        <div className="w-full md:w-1/2 h-[350px] md:h-full relative z-30 flex items-center justify-center pointer-events-none">
                                            {project.image ? (
                                                <motion.div 
                                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
                                                    initial={{ opacity: 0, y: 50 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true, margin: "100px" }}
                                                    transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                                                >
                                                    <motion.img 
                                                        layoutId={`image-${originalIndex}`}
                                                        src={project.image} 
                                                        alt={t(`items.item${originalIndex}.title`)} 
                                                        className="h-[500px] md:h-[650px] lg:h-[800px] w-auto max-w-none object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.8)] rounded-3xl md:rounded-[3rem] transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:-translate-y-4"
                                                    />
                                                </motion.div>
                                            ) : (
                                                <div className="absolute inset-8 border-2 border-dashed border-white/10 rounded-2xl flex items-center justify-center text-white/30 font-mono text-sm">
                                                    Image Container
                                                </div>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <div className={`w-full h-[300px] md:h-[340px] bg-[#0a0a0a] rounded-[32px] border border-white/5 shadow-xl p-6 md:p-8 flex flex-col justify-between overflow-visible relative group-hover:border-[var(--accent)]/30 transition-colors duration-500 mt-24 md:mt-32
                                            ${displayIdx % 2 === 0 ? 'ml-0 md:ml-12' : 'mr-0 md:mr-12'}
                                        `}>
                                            {/* Ribbon Label for Professional Experience (Standard Card) */}
                                            {project.category === 'professional' && (() => {
                                                const ribbonSide = displayIdx % 2 === 0 ? 'left' : 'right';
                                                return (
                                                    <div className={`absolute z-[60] drop-shadow-xl pointer-events-none transition-all top-4 md:top-6
                                                        ${ribbonSide === 'left' ? '-left-2' : '-right-2'}
                                                    `}>
                                                        <div className="relative">
                                                            {/* Corner Fold */}
                                                            <div className={`absolute -bottom-[8px] border-t-[8px] border-t-[var(--accent)] brightness-[0.4]
                                                                ${ribbonSide === 'left' 
                                                                    ? 'left-0 border-l-[8px] border-l-transparent' 
                                                                    : 'right-0 border-r-[8px] border-r-transparent'}
                                                            `}></div>
                                                            
                                                            {/* Ribbon Body */}
                                                            <div className={`bg-[var(--accent)] text-[#0a0a0a] font-display font-bold uppercase tracking-[0.1em] flex flex-row items-center border-y border-white/20 shadow-2xl text-[10px] md:text-xs py-1.5 px-3 md:px-5 gap-1.5
                                                                ${ribbonSide === 'left' ? 'rounded-r border-r' : 'rounded-l border-l'}
                                                            `}>
                                                                <span>{t('filters.professional')}</span>
                                                                {project.associatedCompany && (
                                                                    <span className="opacity-80 font-bold normal-case tracking-normal border-black/20 border-l pl-1.5 md:pl-2 text-[9px] md:text-[11px]">
                                                                        {project.associatedCompany}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })()}
                                        
                                        {/* Subdued background blob inside the card (overflow hidden) */}
                                        <div className="absolute inset-0 overflow-hidden rounded-[32px] pointer-events-none">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[120px] bg-[var(--accent)]/15 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                        </div>

                                        {/* Dynamic Floating Title Occupying the Void */}
                                        <div className={`relative z-20 w-[80%] md:w-[60%] transition-all duration-300 mb-2
                                            ${displayIdx % 2 === 0 ? 'text-left' : 'text-right ml-auto'}
                                            ${project.category === 'professional' ? 'mt-10 md:mt-12' : ''}
                                        `}>
                                            <motion.h3 layoutId={`title-${originalIndex}`} className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white/90 group-hover:text-[var(--accent)] transition-colors duration-300 leading-[1.1] tracking-tight">
                                                {t(`items.item${originalIndex}.title`)}
                                            </motion.h3>
                                        </div>

                                        {/* Breakout Image - Increased scale, dropped massively, with dynamic original positioning */}
                                        <div className={`absolute bottom-[20px] md:bottom-[40px] z-30 pointer-events-none
                                            ${displayIdx % 2 === 0 
                                                ? 'right-[-20px] md:right-[-50px] origin-bottom-right' 
                                                : 'left-[-10px] md:left-[10px] origin-bottom-left'}
                                        `}>
                                            {project.image && (
                                                <motion.div className="relative">
                                                    <motion.img 
                                                        layoutId={`image-${originalIndex}`}
                                                        src={project.image} 
                                                        alt={t(`items.item${originalIndex}.title`)} 
                                                        className={`h-[320px] sm:h-[400px] md:h-[460px] w-auto max-w-none object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] rounded-2xl md:rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                                                            ${displayIdx % 2 === 0 
                                                                ? 'group-hover:scale-[1.15] group-hover:-translate-y-4 group-hover:-rotate-3' 
                                                                : 'group-hover:scale-[1.15] group-hover:-translate-y-4 group-hover:rotate-3'}
                                                        `}
                                                    />
                                                </motion.div>
                                            )}
                                        </div>
                                        
                                        {/* Text Content - Locked to the bottom, squished to avoid image overlap */}
                                        <div className={`relative z-20 mt-auto flex flex-col w-full md:w-[45%] lg:w-[50%] 
                                            ${displayIdx % 2 === 0 ? 'items-start text-left' : 'items-end text-right ml-auto'}
                                        `}>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4 md:mb-5 font-light line-clamp-3">
                                                {t(`items.item${originalIndex}.description`)}
                                            </p>

                                            <div className={`flex flex-wrap gap-2 ${displayIdx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                                {project.tags?.map((tag, tIdx) => (
                                                    <span
                                                        key={tIdx}
                                                        className="font-mono text-[9px] md:text-[10px] uppercase font-semibold tracking-wider bg-white/5 text-white/70 px-3 py-1.5 rounded-lg border border-white/5"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            

                                        </div>
                                    </div>
                                )}
                            </motion.div>
                            );
                        })}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </Container>

            <AnimatePresence>
                {selectedProject !== null && (
                    <>
                        {/* Overlay backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md"
                            onClick={() => setSelectedProject(null)}
                        />
                        
                        <div className="fixed inset-0 z-[100] p-4 md:p-8 lg:p-12 pl-[5vw] pr-[5vw] flex items-center justify-center pointer-events-none">
                            <motion.div
                                layoutId={`card-${selectedProject}`}
                                onClick={(e) => e.stopPropagation()}
                                className="relative w-full max-w-[1400px] h-[90vh] md:h-[85vh] bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row pointer-events-auto"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:rotate-90 transition-all"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Left Side: Sticky Information (40%) */}
                                <div className="w-full md:w-[40%] bg-[#080808] border-r border-white/5 p-8 md:p-12 lg:p-16 flex flex-col h-full overflow-y-auto z-20 relative scrollbar-hide">
                                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--accent)]/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
                                    
                                    <div className="space-y-8 relative z-10 mt-12 md:mt-0">
                                        <div className="space-y-4">
                                            <motion.h3 
                                                layoutId={`title-${selectedProject}`}
                                                className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter"
                                            >
                                                {t(`items.item${selectedProject}.title`)}
                                            </motion.h3>

                                            {resumeData.projects[selectedProject].associatedCompany && (
                                                <div className="inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-full bg-white/5 border border-white/10">
                                                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                                                    <span className="text-white/70 text-sm font-medium">
                                                        {t('associatedWith')} <span className="text-white font-bold">{resumeData.projects[selectedProject].associatedCompany}</span>
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {resumeData.projects[selectedProject].tags?.map((tag, tIdx) => (
                                                <span
                                                    key={tIdx}
                                                    className="font-mono text-xs font-semibold bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 px-3 py-1.5 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="text-gray-300 leading-relaxed text-base md:text-lg font-light">
                                            {t(`items.item${selectedProject}.fullDescription`)}
                                        </p>

                                        <div className="pt-8 flex flex-col gap-4">
                                            {!resumeData.projects[selectedProject].hideLink && (
                                                <>
                                                    {resumeData.projects[selectedProject].playStore && (
                                                        <a 
                                                            href={resumeData.projects[selectedProject].playStore}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-full px-6 py-4 rounded-xl bg-[var(--accent)] text-white font-bold hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)] hover:-translate-y-1 transition-all flex items-center justify-between group"
                                                        >
                                                            {t('playStore')}
                                                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                        </a>
                                                    )}
                                                    {resumeData.projects[selectedProject].website && (
                                                        <a 
                                                            href={resumeData.projects[selectedProject].website}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-full px-6 py-4 rounded-xl bg-[var(--accent)] text-white font-bold hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)] hover:-translate-y-1 transition-all flex items-center justify-between group"
                                                        >
                                                            {t('viewProject')}
                                                            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                        </a>
                                                    )}
                                                    {resumeData.projects[selectedProject].github && (
                                                        <a 
                                                            href={resumeData.projects[selectedProject].github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:-translate-y-1 transition-all flex items-center justify-between group"
                                                        >
                                                            {t('viewCode')}
                                                            <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                                        </a>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Gallery (60%) */}
                                <div className="w-full md:w-[60%] bg-[#030303] overflow-hidden h-full relative flex items-center justify-center">
                                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
                                    
                                    <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-y-1/2" />
                                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

                                    {((resumeData.projects[selectedProject].gallery && resumeData.projects[selectedProject].gallery.length > 0) || resumeData.projects[selectedProject].image) && (() => {
                                        const project = resumeData.projects[selectedProject];
                                        const images = project.gallery && project.gallery.length > 0 
                                            ? project.gallery 
                                            : (project.image ? [project.image] : []);
                                        
                                        return (
                                            <div className="relative w-full h-[90%] flex items-center group/gallery">
                                                {/* Navigation buttons - Smart visibility */}
                                                {images.length > 1 && isScrollable && (
                                                    <>
                                                        <AnimatePresence>
                                                            {canScrollLeft && (
                                                                <motion.button 
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    exit={{ opacity: 0, x: -10 }}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        scrollGallery('left');
                                                                    }}
                                                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 md:p-4 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:scale-110 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                                                                >
                                                                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                                                                </motion.button>
                                                            )}
                                                        </AnimatePresence>
                                                        
                                                        <AnimatePresence>
                                                            {canScrollRight && (
                                                                <motion.button 
                                                                    initial={{ opacity: 0, x: 10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    exit={{ opacity: 0, x: 10 }}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        scrollGallery('right');
                                                                    }}
                                                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 md:p-4 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:scale-110 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                                                                >
                                                                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                                                                </motion.button>
                                                            )}
                                                        </AnimatePresence>
                                                    </>
                                                )}


                                                {/* Scrollable track */}
                                                <div 
                                                    ref={galleryRef}
                                                    onScroll={checkScroll}
                                                    className={`w-full h-full ${isScrollable ? 'overflow-x-auto' : 'overflow-x-hidden'} scrollbar-hide flex items-center pt-8 pb-12`}
                                                >
                                                    <div className="flex flex-row items-center justify-start gap-0 px-12 min-w-max h-full">
                                                        {images.map((img, idx) => (
                                                            <motion.div 
                                                                key={idx}
                                                                initial={{ opacity: 0, scale: 0.95 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                                                className="h-full shrink-0 relative group mx-[-30px] md:mx-[-60px] hover:z-50 transition-all duration-300"
                                                            >
                                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60%] bg-[var(--accent)]/15 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                                
                                                                {idx === 0 ? (
                                                                    <motion.img
                                                                        layoutId={`image-${selectedProject}`}
                                                                        src={img}
                                                                        alt={`${t(`items.item${selectedProject}.title`)} - Screenshot ${idx + 1}`}
                                                                        className="h-full w-auto max-w-none object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] rounded-3xl md:rounded-[3rem] transition-all duration-500 relative z-10 scale-[1.1] group-hover:scale-[1.25]"
                                                                    />
                                                                ) : (
                                                                    <img
                                                                        src={img}
                                                                        alt={`${t(`items.item${selectedProject}.title`)} - Screenshot ${idx + 1}`}
                                                                        className="h-full w-auto max-w-none object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] rounded-3xl md:rounded-[3rem] transition-all duration-500 relative z-10 scale-[1.1] group-hover:scale-[1.25]"
                                                                    />
                                                                )}
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* Custom Progress Bar at the bottom */}
                                                {images.length > 1 && isScrollable && (
                                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 md:w-48 h-[3px] bg-white/5 rounded-full overflow-hidden z-40">
                                                        <motion.div 
                                                            className="h-full bg-[var(--accent)]"
                                                            animate={{ width: `${scrollProgress}%` }}
                                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })()}
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </Section>
    );
}
