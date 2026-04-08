const AnexusFooter = () => {
    return (
        <footer className="bg-black text-white py-3" role="contentinfo">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center justify-end gap-2">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center" aria-hidden="true">
                        <span className="text-black font-bold text-xs">AN</span>
                    </div>

                    <a
                        href="https://anexuswebsolutions.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Anexus Web Solutions"
                        className="text-white text-sm font-semibold hover:underline transition-all"
                    >
                        Anexus Web Solutions
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default AnexusFooter;
