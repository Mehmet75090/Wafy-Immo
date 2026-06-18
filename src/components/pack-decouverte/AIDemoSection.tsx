import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

interface Message {
  id: number;
  side: "left" | "right";
  text: string;
  delay: number;
}

const messages: Message[] = [
  { id: 1, side: "right", text: "Bonjour, je suis intéressé par l'appartement Témoin à Casablanca", delay: 800 },
  { id: 2, side: "left", text: "Bonjour ! Je suis Wafy, l'assistant de l'agence. Avec plaisir de vous aider. Quel est votre budget approximatif ?", delay: 1800 },
  { id: 3, side: "right", text: "Entre 1.2M et 1.5M MAD", delay: 3200 },
  { id: 4, side: "left", text: "Parfait, nous avons plusieurs options dans cette fourchette. C'est pour habiter ou investir ?", delay: 4500 },
  { id: 5, side: "right", text: "Pour habiter, avec ma famille", delay: 5800 },
  { id: 6, side: "left", text: "Excellent ! Combien de chambres recherchez-vous ?", delay: 7000 },
  { id: 7, side: "right", text: "3 chambres minimum", delay: 8500 },
  { id: 8, side: "left", text: "J'ai noté votre demande : 3 chambres, budget 1.2-1.5M MAD, résidence principale. Notre conseiller vous contactera sous 30 min avec des options personnalisées !", delay: 10000 },
];

const AIDemoSection = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    let current = 0;

    const scheduleNext = () => {
      if (current >= messages.length) return;
      const msg = messages[current];
      const t1 = setTimeout(() => {
        setIsTyping(true);
        const t2 = setTimeout(() => {
          setIsTyping(false);
          setVisibleCount((c) => c + 1);
          current += 1;
          scheduleNext();
        }, 900);
        timeouts.push(t2);
      }, msg.delay - (current === 0 ? 0 : messages[current - 1].delay));
      timeouts.push(t1);
    };

    scheduleNext();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleCount]);

  const restart = () => {
    setVisibleCount(0);
    window.location.reload(); // simplest restart
  };

  return (
    <section className="section-padding" id="demo">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Démonstration de l'<span className="text-gradient">agent conversationnel</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Voyez comment Wafy Immo engage, qualifie et prépare vos leads en temps réel.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
            {/* WhatsApp header */}
            <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Wafy Immo</div>
                <div className="text-white/80 text-[11px]">en ligne</div>
              </div>
            </div>

            {/* Chat area */}
            <div
              ref={containerRef}
              className="p-4 min-h-[340px] max-h-[440px] overflow-y-auto"
              style={{
                backgroundColor: "#e5ddd5",
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><g fill='%23d9d2c8' fill-opacity='0.5'><circle cx='10' cy='10' r='1.5'/><circle cx='40' cy='25' r='1.5'/><circle cx='20' cy='45' r='1.5'/><circle cx='50' cy='50' r='1.5'/></g></svg>\")",
              }}
            >
              {messages.slice(0, visibleCount).map((msg) => {
                const isRight = msg.side === "right";
                return (
                  <div key={msg.id} className={`flex ${isRight ? "justify-end" : "justify-start"} mb-3`}>
                    <div
                      className={`relative max-w-[85%] rounded-xl px-3 py-2 shadow-sm ${
                        isRight ? "bg-[#dcf8c6] rounded-tr-sm" : "bg-white rounded-tl-sm"
                      }`}
                    >
                      <p className="text-sm text-[#111b21] leading-snug">{msg.text}</p>
                      <div className="flex justify-end mt-1">
                        <span className="text-[10px] text-[#667781]">14:{20 + msg.id}</span>
                      </div>
                      <div
                        className={`absolute -right-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold ring-2 ring-white shadow ${
                          isRight ? "bg-[#25d366]" : "bg-primary"
                        }`}
                      >
                        {isRight ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex justify-start mb-3">
                  <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#667781] animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-[#667781] animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-[#667781] animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={restart}
              className="text-sm text-primary font-semibold hover:underline"
            >
              Rejouer la conversation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIDemoSection;
