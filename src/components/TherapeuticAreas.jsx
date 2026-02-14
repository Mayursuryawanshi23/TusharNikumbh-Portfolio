import React from "react";
import { motion } from "framer-motion";

const areas = [
    { title: "Arthritis", phase: "Phase III", imageSrc: "/TherapeuticAeasImages/arthritis.png" },
    { title: "Hypertension", phase: "Phase III", imageSrc: "/TherapeuticAeasImages/hypertension.png" },
    { title: "Dyslipidemia", phase: "Phase II", imageSrc: "/TherapeuticAeasImages/Dyslipidemia.png" },
    { title: "Malaria", phase: "Phase I", imageSrc: "/TherapeuticAeasImages/malaria.png" },
    { title: "Nutrition", phase: "Observational", imageSrc: "/TherapeuticAeasImages/nutrition.png" },
    { title: "Oncology", phase: "Phase I - III", imageSrc: "/TherapeuticAeasImages/oncology.png" },
    { title: "Inflammation", phase: "Phase I - III", imageSrc: "/TherapeuticAeasImages/inflamation.png" },
    { title: "Diabetes", phase: "Phase III", imageSrc: "/TherapeuticAeasImages/diabetes.png" },
    { title: "Cardiovascular", phase: "Phase II", imageSrc: "/TherapeuticAeasImages/cardiovascular.png" },
];

const TherapeuticAreas = () => {
    const duplicated = [...areas, ...areas];

    return (
        <section className="py-24 bg-slate-50/30 border-y border-slate-100 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl font-serif font-medium text-slate-800"
                >
                    Therapeutic Experience
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="text-lg text-slate-500 font-light mt-4"
                >
                    Specialized knowledge across diverse clinical indications.
                </motion.p>
            </div>

            {/* Horizontal Carousel */}
            <div className="relative w-full overflow-hidden px-4 md:px-8">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-white via-white to-transparent z-20 pointer-events-none" />
                {/* Right Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-white via-white to-transparent z-20 pointer-events-none" />

                <div className="overflow-hidden">
                    <div className="flex gap-6 items-stretch whitespace-nowrap scrolling" style={{ alignItems: 'stretch' }}>
                        {duplicated.map((area, idx) => (
                            <div
                                key={idx}
                                className="glass-card w-[280px] md:w-[320px] h-[220px] flex-shrink-0 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-slate-300 transition-all duration-200 group cursor-default hover:scale-105"
                            >
                                <div className="relative w-full h-32 overflow-hidden bg-slate-100">
                                    <img
                                        src={area.imageSrc}
                                        alt={area.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>

                                <div className="p-4 h-24 flex flex-col justify-between">
                                    <h3 className="text-lg font-serif text-slate-800 group-hover:text-slate-900 transition-colors duration-200">
                                        {area.title}
                                    </h3>

                                    <div className="flex items-center space-x-3">
                                        <div className="h-[1px] w-6 bg-slate-200 group-hover:bg-slate-400 transition-colors duration-200" />
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-700 transition-colors duration-200">
                                            {area.phase}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .scrolling {
                        display: flex;
                        gap: 1.5rem;
                        animation: scroll 35s linear infinite;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default TherapeuticAreas;

