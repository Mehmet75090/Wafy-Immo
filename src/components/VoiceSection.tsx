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

  // Pseudo-random but stable waveform heights
  const bars = Array.from({ length: 38 }, (_, i) => {
    const seed = (i * 9301 + (isRight ? 49297 : 12345)) % 233280;
    const r = seed / 233280;
    return 25 + r * 75; // 25% - 100%
  });

  const avatarBg = isRight ? "bg-[#25d366]" : "bg-primary";
  const initial = isRight ? "S" : "W";

  return (
    <div className={`flex ${isRight ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`relative max-w-[95%] rounded-xl pl-2 pr-12 py-2 shadow-sm ${
          isRight ? "bg-[#dcf8c6] rounded-tr-sm" : "bg-white rounded-tl-sm"
        }`}
      >
        <div className="flex items-center gap-2 min-w-[240px]">
          <button
            onClick={toggle}
            aria-label={playing ? "Pause" : "Lire"}
            className="shrink-0 text-[#54656f] hover:text-[#111b21] transition"
          >
            {playing ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current" />
            )}
          </button>

          {/* Waveform */}
          <div className="relative flex-1 h-7 flex items-center gap-[2px]">
            {bars.map((h, i) => {
              const barProgress = (i / bars.length) * 100;
              const played = barProgress <= progress;
              return (
                <div
                  key={i}
                  className={`w-[2px] rounded-full ${
                    played ? "bg-[#54656f]" : "bg-[#a0a8ac]"
                  }`}
                  style={{ height: `${h}%` }}
                />
              );
            })}
            {/* Progress dot */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00a3ff] shadow-md pointer-events-none transition-all"
              style={{ left: `calc(${progress}% - 6px)` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-1 pr-1">
          <span className="text-[11px] text-[#667781] tabular-nums">
            {fmt(playing || current ? current : duration)}
          </span>
          <span className="text-[10px] text-[#667781]">{time}</span>
        </div>

        {/* Avatar on right with mic icon */}
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 flex flex-col items-center">
          <div
            className={`w-9 h-9 rounded-full ${avatarBg} flex items-center justify-center text-white text-xs font-bold ring-2 ring-white shadow`}
          >
            {initial}
          </div>
          <Mic className="w-3 h-3 text-[#00a3ff] -mt-1 bg-white rounded-full" />
        </div>

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
          {[args[0], args[1]].map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-card border border-border ${
                  i === 1 ? "hidden lg:block" : ""
                }`}
              >
                <Icon className="w-7 h-7 text-primary mb-3" />
                <h3 className="font-bold mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.text}</p>
              </div>
            );
          })}
        </motion.div>

        {/* WhatsApp mock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2 }}
            className="mb-4 mx-auto w-fit flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground shadow-lg font-semibold text-sm"
          >
            <Play className="w-4 h-4 fill-current" />
            Cliquez sur les vocaux pour écouter ↓
          </motion.div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
            <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                W
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Wafy Immo</div>
                <div className="text-white/80 text-[11px]">en ligne</div>
              </div>
            </div>
            <div
              className="p-4 min-h-[280px]"
              style={{
                backgroundColor: "#e5ddd5",
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><g fill='%23d9d2c8' fill-opacity='0.5'><circle cx='10' cy='10' r='1.5'/><circle cx='40' cy='25' r='1.5'/><circle cx='20' cy='45' r='1.5'/><circle cx='50' cy='50' r='1.5'/></g></svg>\")",
              }}
            >
              <VoiceBubble src="/audio/message-client.ogg" side="right" label="Sara" time="14:21" />
              <VoiceBubble src="/audio/message-wafy-bot.ogg" side="left" label="Wafy Immo" time="14:21" />
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
          {[args[1], args[2]].map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-card border border-border ${
                  i === 0 ? "lg:hidden" : ""
                }`}
              >
                <Icon className="w-7 h-7 text-primary mb-3" />
                <h3 className="font-bold mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.text}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  </section>
);

export default VoiceSection;
