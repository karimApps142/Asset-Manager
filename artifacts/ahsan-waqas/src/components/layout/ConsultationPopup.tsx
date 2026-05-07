import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle } from "lucide-react";

const STORAGE_KEY = "ahsan_popup_dismissed";

export function ConsultationPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
    setTimeout(dismiss, 2500);
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={dismiss}
          />

          {/* Popup */}
          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            aria-modal="true"
            role="dialog"
          >
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-violet-500/20 to-transparent rounded-2xl pointer-events-none" />
              <div className="absolute inset-[1px] rounded-2xl bg-[#0a0f1e] pointer-events-none" />

              <div className="relative p-8">
                {/* Close */}
                <button
                  onClick={dismiss}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                  aria-label="Close popup"
                  data-testid="button-close-popup"
                >
                  <X size={16} />
                </button>

                {!submitted ? (
                  <>
                    {/* Header */}
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Limited Availability
                      </div>
                      <h2 className="text-2xl font-bold text-white leading-tight mb-2">
                        Get a Free{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                          SEO & WordPress
                        </span>{" "}
                        Audit
                      </h2>
                      <p className="text-white/50 text-sm leading-relaxed">
                        30-minute consultation — completely free. Discover exactly what's holding your website back.
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="flex flex-col gap-2 mb-6">
                      {["Technical SEO audit report", "Speed & Core Web Vitals check", "No obligation, no hard sell"].map(b => (
                        <div key={b} className="flex items-center gap-2 text-sm text-white/60">
                          <CheckCircle size={14} className="text-primary flex-shrink-0" />
                          {b}
                        </div>
                      ))}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        data-testid="input-popup-name"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        data-testid="input-popup-email"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                      />
                      <select
                        value={service}
                        onChange={e => setService(e.target.value)}
                        data-testid="select-popup-service"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white/70 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors appearance-none"
                      >
                        <option value="" className="bg-[#0a0f1e]">I need help with…</option>
                        <option value="wordpress" className="bg-[#0a0f1e]">WordPress Development</option>
                        <option value="seo" className="bg-[#0a0f1e]">SEO Optimization</option>
                        <option value="woocommerce" className="bg-[#0a0f1e]">WooCommerce</option>
                        <option value="speed" className="bg-[#0a0f1e]">Speed Optimization</option>
                        <option value="audit" className="bg-[#0a0f1e]">SEO Audit</option>
                        <option value="other" className="bg-[#0a0f1e]">Something Else</option>
                      </select>

                      <button
                        type="submit"
                        disabled={loading}
                        data-testid="button-popup-submit"
                        className="w-full py-3.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25 disabled:opacity-60 mt-1"
                      >
                        {loading ? (
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>Claim Free Audit <ArrowRight size={15} /></>
                        )}
                      </button>
                    </form>

                    <p className="text-center text-white/25 text-xs mt-3">
                      No spam. Unsubscribe anytime.
                    </p>
                  </>
                ) : (
                  /* Success state */
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle size={32} className="text-emerald-400" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">You're In!</h3>
                    <p className="text-white/50 text-sm">
                      Ahsan will reach out to schedule your free audit within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
