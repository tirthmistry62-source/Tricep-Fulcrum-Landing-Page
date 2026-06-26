export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background/80 backdrop-blur-xl relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold text-lg">Tricep Fulcrum</span>
            <span className="text-muted-foreground text-sm">by Stryke Labs</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2025 Stryke Labs
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/5 text-xs text-muted-foreground/60">
          Designed & Developed by Tirth Mistry
        </div>
      </div>
    </footer>
  );
}
