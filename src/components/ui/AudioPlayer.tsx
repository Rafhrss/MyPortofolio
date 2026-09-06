"use client";

import { useState, useRef, useEffect } from "react";
import { IconPlayerPlayFilled, IconPlayerPauseFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AudioPlayerProps {
  audioSrc?: string; // Optional: if you actually want to play a real audio file
  className?: string;
}

export function AudioPlayer({ audioSrc, className }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio object if a source is provided
  useEffect(() => {
    if (audioSrc) {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.loop = true; // Loop the audio by default
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (audioRef.current) audioRef.current.pause();
    } else {
      setIsPlaying(true);
      if (audioRef.current) audioRef.current.play();
    }
  };

  // Generate 7 bars for a more compact waveform
  const bars = Array.from({ length: 7 });

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-[#0A1128]/90 backdrop-blur-md border border-[#1E3A8A]/50 rounded-full cursor-pointer transition-all duration-300 hover:border-[#38BDF8]/50 hover:bg-[#0A1128] shadow-lg",
        isPlaying ? "h-8 px-2.5 w-auto min-w-15" : "h-8 w-8",
        className
      )}
      onClick={togglePlay}
    >
      {!isPlaying ? (
        // Play Button State
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-slate-400 hover:text-[#38BDF8] transition-colors flex items-center justify-center ml-0.5"
        >
          <IconPlayerPlayFilled size={14} />
        </motion.div>
      ) : (
        // Playing Waveform State
        <div className="flex items-center gap-0.5 h-full w-full">
          {bars.map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-cyan-500 rounded-full origin-bottom"
              animate={{
                height: ["20%", "80%", "40%", "100%", "30%", "20%"],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                // Randomize the delay for each bar so they move independently
                delay: i * 0.1,
              }}
              style={{
                // Base height before animation kicks in
                height: "20%",
              }}
            />
          ))}
          {/* Invisible pause button to allow toggling off without breaking layout */}
          <div className="ml-auto opacity-0 hover:opacity-100 transition-opacity">
            <IconPlayerPauseFilled size={16} className="text-slate-400" />
          </div>
        </div>
      )}
    </div>
  );
}
