"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { IconSend, IconMessageCircle, IconMessageFilled, IconLoader2, IconHeart } from "@tabler/icons-react";
import { GitHubIcon, Instagram, Gmail, YouTube } from "@/components/ui/icons";
import { addContactComment } from "@/app/actions/contact";
import { likeComment } from "@/app/actions/likeComment";

const socialLinks = [
  {
    icon: Gmail,
    label: "Email",
    desc: '"rafaharis14@gmail.com" Drop me a message anytime, I will reply as soon as possible',
    href: "mailto:rafaharis14@gmail.com",
    color: "hover:border-cyan-400/60",
    iconColor: "text-cyan-400",
  },
  {
    icon: GitHubIcon,
    label: "Github",
    desc: "Follow me on GitHub & check out my projects and repositories",
    href: "https://github.com/Rafhrss",
    color: "hover:border-slate-300/60",
    iconColor: "text-slate-300",
  },
  {
    icon: Instagram,
    label: "Instagram",
    desc: "Follow me on Instagram to see my latest activity and moments",
    href: "https://www.instagram.com/rafhris._",
    color: "hover:border-pink-400/60",
    iconColor: "text-pink-400",
  },
  {
    icon: YouTube,
    label: "Youtube",
    desc: "Follow me on YouTube to learn about IT and technology topics",
    href: "#",
    color: "hover:border-red-400/60",
    iconColor: "text-red-400",
  },
];

interface ContactComment {
  id: number;
  userName: string;
  content: string;
  createdAt: Date | null;
  likesCount: number | null;
}

export default function ContactSection({ initialComments = [] }: { initialComments?: ContactComment[] }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const res = await addContactComment(name, comment);
      if (res.success) {
        setName("");
        setComment("");
      } else {
        alert(res.error);
      }
    });
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-20 relative z-10">
      <div className="text-center mb-16">
        <h2
          className="font-moderniz uppercase tracking-wider text-center text-[#00ffdc] drop-shadow-[0_0_15px_rgba(0,255,220,0.8)] mb-4 text-[28px] leading-9 sm:text-[36px] sm:leading-10.5 md:text-[46px] md:leading-12.5"
          style={{
            fontWeight: 700,
            WebkitTextStroke: "1px #000",
            textShadow: "3px 3px 0px #000",
          }}
        >
          GET IN TOUCH
        </h2>
        <p className="text-slate-300 text-lg md:text-xl font-mono leading-relaxed max-w-2xl mx-auto mt-4">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`flex items-start gap-4 p-5 rounded-2xl bg-[#0A1128]/60 border border-[#1E3A8A]/40 ${link.color} transition-all duration-300 group`}
            >
              <div className={`shrink-0 p-2.5 rounded-xl bg-white/5 ${link.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                <link.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-white text-base font-mono">{link.label}</p>
                <p className="text-slate-300 text-sm font-mono mt-1 leading-relaxed">{link.desc}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="bg-[#0A1128]/60 border border-[#1E3A8A]/40 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center">
                <IconMessageFilled size={30} className="text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-lg font-mono">Leave a comment</h3>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-[#050A18] border border-[#1E3A8A]/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-base font-mono"
              />
              <textarea
                placeholder="Write your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                rows={4}
                className="w-full bg-[#050A18] border border-[#1E3A8A]/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-base font-mono resize-none"
              />
              <button
                type="submit"
                disabled={isPending}
                className="self-end flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-white font-semibold rounded-xl transition-colors text-base font-mono"
              >
                {isPending ? <IconLoader2 size={16} className="animate-spin" /> : <IconSend size={16} />}
                {isPending ? "Sending..." : "Send"}
              </button>
            </form>
          </div>

          <div className="bg-[#0A1128]/60 border border-[#1E3A8A]/40 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-4">
              <IconMessageCircle size={30} />
              <span className="text-base font-mono">Comments ({initialComments.length})</span>
            </div>
            <div className="flex flex-col gap-4 max-h-[260px] overflow-y-auto pr-2 custom-scrollbar">
              {initialComments.length === 0 ? (
                <p className="text-slate-500 text-sm font-mono italic text-center py-4">No comments yet. Be the first to say hi!</p>
              ) : (
                initialComments.map((c) => {
                  const initials = c.userName.substring(0, 2).toUpperCase();
                  const dateStr = c.createdAt 
                    ? new Date(c.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) 
                    : "";
                  return (
                    <div key={c.id} className="flex gap-3">
                      <div className="shrink-0 w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-400 text-xs font-bold uppercase">
                        {initials}
                      </div>
                      <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/5">
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="text-cyan-300 font-bold text-base font-mono">{c.userName}</span>
                          <span className="text-[10px] font-mono text-slate-500">{dateStr}</span>
                        </div>
                        <p className="text-slate-300 text-sm font-mono leading-relaxed whitespace-pre-wrap">{c.content}</p>
                        <div className="flex justify-end mt-2">
                          <button
                            onClick={async () => await likeComment(c.id, "/")}
                            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-pink-500 transition-colors"
                          >
                            <IconHeart size={14} className={c.likesCount ? "fill-pink-500 text-pink-500" : ""} />
                            <span>{c.likesCount || 0}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}