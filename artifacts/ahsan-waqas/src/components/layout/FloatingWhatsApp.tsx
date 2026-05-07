import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=923463256941"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 hover:scale-110 hover:bg-green-600 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full animate-ping bg-green-500 opacity-20"></div>
      <FaWhatsapp size={32} className="relative z-10" />
      
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-4 bg-card text-foreground px-3 py-1.5 rounded text-sm font-medium opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap border border-border shadow-lg hidden md:block">
        Need help? Chat with me!
      </span>
    </a>
  );
}
