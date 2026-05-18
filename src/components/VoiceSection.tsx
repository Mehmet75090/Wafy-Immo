import { motion } from "framer-motion";
import { Mic, Languages, Heart, Play, Pause } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const args = [
  {
    icon: Mic,
    title: "Le canal préféré des Marocains",
    text: "Le vocal est le réflexe naturel sur WhatsApp. Répondre en texte uniquement, c'est imposer un effort à vos prospects.",
  },
  {
    icon: Languages,
    title: "Darija, français, arabe — et plus",
    text: "Vos prospects choisissent la langue, Wafy Immo s'adapte. Des packs additionnels (anglais, espagnol, MRE) sont disponibles à la carte.",
  },
  {
    icon: Heart,
    title: "Une relation plus humaine",
    text: "Une voix chaleureuse inspire confiance là où un texte reste froid. Vos leads se sentent écoutés dès le premier message.",
  },
];

const VoiceBubble = ({
  src,
  side,
  label,
  time,
}: {
  src: string;
  side: "left" | "right";
  label: string;
  time: string;
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => {
      setCurrent(a.currentTime);
      setProgress(a.duration ? (a.currentTime / a.duration) * 100 : 0);
    };
    const onLoaded = () => setDuration(a.duration || 0);
    const onEnd = () => {
      setPlaying(false);
      setProgress(0);
      setCurrent(0);
    };
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onLoaded);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onLoaded);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play();
      setPlaying(true);
    }
  };

  const fmt = (s: number) => {
    if (!s || !isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const isRight = side === "right";

  return (
    <div className={`flex ${isRight ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3 py-2 shadow-sm ${
          isRight
            ? "bg-[#dcf8c6] text-[#111b21] rounded-tr-sm"
            : "bg-white text-[#111b21] rounded-tl-sm"
        }`}
      >
        <div className="text-[10px] font-semibold mb-1 opacity-70">{label}</div>
        <div className="flex items-center gap-2 min-w-[200px]">
          <button
            onClick={toggle}
            aria-label={playing ? "Pause" : "Lire"}
            className="w-9 h-9 rounded-full bg-[#00a884] text-white flex items-center justify-center shrink-0 hover:opacity-90 transition"
          >
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
          <div className="flex-1">
            <div className="h-1 bg-black/15 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#00a884] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-[10px] mt-1 opacity-70 tabular-nums">
              {fmt(playing || current ? current : duration)}
            </div>
          </div>
        </div>
        <div className="text-[10px] text-right opacity-60 mt-1">{time}</div>
        <audio ref={audioRef} src={src} preload="metadata" />
      </div>
    </div>
  );
};

const VoiceSection = () => (
  <section className="section-padding bg-muted/30">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Wafy Immo parle aussi <span className="text-gradient">la langue de vos prospects</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Au Maroc, vos prospects ne tapent pas toujours — ils parlent aussi. Wafy Immo leur répond en vocal, dans leur langue.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 items-center">
        {/* Left arg */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {[args[0]].map((a, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card border border-border">
              <a.icon className="w-7 h-7 text-primary mb-3" />
              <h3 className="font-bold mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.text}</p>
            </div>
          ))}
          <div className="hidden lg:block p-6 rounded-2xl bg-card border border-border">
            <args[1].icon className="w-7 h-7 text-primary mb-3" />
            <h3 className="font-bold mb-2">{args[1].title}</h3>
            <p className="text-sm text-muted-foreground">{args[1].text}</p>
          </div>
        </motion.div>

        {/* WhatsApp mock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1 mx-auto w-full max-w-sm"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-[#0b141a]">
            {/* Header */}
            <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                W
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Wafy Immo</div>
                <div className="text-white/60 text-[11px]">en ligne</div>
              </div>
            </div>
            {/* Conversation */}
            <div
              className="p-4 min-h-[280px]"
              style={{
                backgroundColor: "#0b141a",
                backgroundImage:
                  "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.03) 0, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 0, transparent 40%)",
              }}
            >
              <VoiceBubble
                src="/audio/message-client.ogg"
                side="right"
                label="Prospect"
                time="14:21"
              />
              <VoiceBubble
                src="/audio/message-wafy-bot.ogg"
                side="left"
                label="Wafy Immo"
                time="14:21"
              />
            </div>
          </div>
        </motion.div>

        {/* Right arg */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="lg:hidden p-6 rounded-2xl bg-card border border-border">
            <args[1].icon className="w-7 h-7 text-primary mb-3" />
            <h3 className="font-bold mb-2">{args[1].title}</h3>
            <p className="text-sm text-muted-foreground">{args[1].text}</p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border">
            <args[2].icon className="w-7 h-7 text-primary mb-3" />
            <h3 className="font-bold mb-2">{args[2].title}</h3>
            <p className="text-sm text-muted-foreground">{args[2].text}</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default VoiceSection;
