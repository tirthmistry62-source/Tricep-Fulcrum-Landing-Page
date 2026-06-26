export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background/80 backdrop-blur-xl relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">

          {/* Tricep Fulcrum branding */}
          <div className="flex items-center gap-3">
            <img
              src="/tf-logo.png"
              alt="Tricep Fulcrum"
              className="w-10 h-10 rounded-xl object-cover shadow-[0_0_16px_rgba(200,150,30,0.3)]"
            />
            <div className="flex flex-col">
              <span className="font-display font-semibold text-base leading-tight">Tricep Fulcrum</span>
              <span className="text-muted-foreground text-xs leading-tight">by Stryke Labs</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://play.google.com/store/apps/details?id=com.tricep.fulcrum&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.tricep.fulcrum&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="mailto:strykelabsofficial@gmail.com"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Stryke Labs branding */}
          <div className="flex items-center gap-3">
            <img
              src="/stryke-labs-logo.png"
              alt="Stryke Labs"
              className="w-10 h-10 rounded-full object-cover shadow-[0_0_16px_rgba(0,200,220,0.25)]"
            />
            <div className="flex flex-col">
              <span className="font-display font-semibold text-base leading-tight">Stryke Labs</span>
              <span className="text-muted-foreground text-xs leading-tight">© 2026</span>
            </div>
          </div>

        </div>

        <div className="text-center pt-8 border-t border-white/5 text-xs text-muted-foreground/60 tracking-wide">
          Designed &amp; Developed by Tirth Mistry
        </div>
      </div>
    </footer>
  );
}
