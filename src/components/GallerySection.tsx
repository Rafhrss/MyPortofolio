"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { IconHeart, IconHeartFilled, IconX, IconMessageCircle, IconSend } from '@tabler/icons-react';
import { getComments, addComment, incrementLike } from '@/app/actions/gallery';
import { likeComment } from '@/app/actions/likeComment';
import SpotlightCard from './SpotlightCard';

export interface Activity {
  id: number;
  imageUrl: string;
  title?: string | null;
  description?: string | null;
  likesCount?: number | null;
  createdAt?: Date | null;
}

interface CommentData {
  id: number;
  userName: string;
  content: string;
  createdAt: Date | null;
  likesCount?: number | null;
}

export default function GallerySection({ initialActivities }: { initialActivities?: Activity[] }) {
  const dummyData: Activity[] = [
    { id: 1, imageUrl: '/assets/galery/laporan.jpeg', title: 'Laporan', likesCount: 0 },
    { id: 2, imageUrl: '/assets/galery/logbook.jpeg', title: 'Logbook', likesCount: 0 },
    { id: 3, imageUrl: '/assets/galery/rafa.jpg', title: 'Foto Rafa', likesCount: 0 },
    { id: 4, imageUrl: '/assets/galery/twibbon.png', title: 'Twibbon', likesCount: 0 },
  ];

  const galleryItems = initialActivities && initialActivities.length > 0 ? initialActivities : dummyData;

  // States for Modal
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [comments, setComments] = useState<CommentData[]>([]);
  const [loadingComments, setLoadingComments] = useState(false);
  
  // States for Form
  const [nameInput, setNameInput] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Local states for instant UI updates
  const [localLikes, setLocalLikes] = useState<Record<number, number>>({});
  const [hasLiked, setHasLiked] = useState<Record<number, boolean>>({});

  const commentsEndRef = useRef<HTMLDivElement>(null);

  // Fetch comments when modal opens
  useEffect(() => {
    if (selectedActivity) {
      document.body.style.overflow = 'hidden';
      const fetchComments = async () => {
        setComments([]); // Clear existing comments immediately
        setLoadingComments(true);
        const result = await getComments(selectedActivity.id);
        if (result.success && result.data) {
          setComments(result.data);
        }
        setLoadingComments(false);
      };
      fetchComments();
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedActivity(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedActivity]);

  // Scroll to bottom of comments when new one is added
  useEffect(() => {
    if (commentsEndRef.current) {
      commentsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [comments]);

  const handleLike = async (activityId: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening modal if clicked from outside

    // Get current likes from DB as base if local state is empty
    const targetActivity = galleryItems.find(a => a.id === activityId);
    const baseLikes = targetActivity?.likesCount || 0;

    // Optimistic UI update
    setLocalLikes(prev => {
      const current = prev[activityId] !== undefined ? prev[activityId] : baseLikes;
      return { ...prev, [activityId]: current + 1 };
    });
    setHasLiked(prev => ({ ...prev, [activityId]: true }));

    // Send to server
    await incrementLike(activityId);
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedActivity || !nameInput.trim() || !commentInput.trim()) return;

    setIsSubmitting(true);
    const result = await addComment(selectedActivity.id, nameInput, commentInput);
    
    if (result.success && result.data) {
      // Add new comment to the list instantly
      setComments(prev => [...prev, result.data as CommentData]);
      setCommentInput(''); // Reset comment field, keep name
    }
    setIsSubmitting(false);
  };

  const formatDate = (date: Date | null | undefined) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric', month: 'short', year: 'numeric'
    }).format(new Date(date));
  };

  const handleCommentLike = async (commentId: number) => {
    // Optimistic update
    setComments(prev => 
      prev.map(c => 
        c.id === commentId ? { ...c, likesCount: (c.likesCount || 0) + 1 } : c
      )
    );
    await likeComment(commentId, "/gallery");
  };

  return (
    <section id="galery" className="container mx-auto px-4 py-20 relative z-10">
      <div className="text-center mb-16">
        <h2 
          className="font-moderniz uppercase tracking-wider text-center text-[#00ffdc] drop-shadow-[0_0_15px_rgba(0,255,220,0.8)] mb-4 text-[28px] leading-9 sm:text-[36px] sm:leading-10.5 md:text-[46px] md:leading-12.5"
          style={{ 
            fontWeight: 700,
            WebkitTextStroke: "1px #000",
            textShadow: "3px 3px 0px #000"
          }}
        >
          MY GALLERY
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
          Beberapa momen dan aktivitas terbaru.
        </p>
      </div>

      <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="break-inside-avoid"
          >
            <SpotlightCard
              onClick={() => setSelectedActivity(item)}
              spotlightColor="rgba(0, 255, 220, 0.25)"
              className="relative group rounded-2xl overflow-hidden cursor-pointer bg-[#0A1128]/60 border-[#1E3A8A]/30 shadow-lg p-0!"
            >
            <Image 
              src={item.imageUrl} 
              alt={item.title || 'Gallery image'} 
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500 brightness-90 group-hover:brightness-110"
            />
            {/* Overlay Gradient for Title and Like Button */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
              <div className="flex justify-between items-end">
                <div>
                  {item.title && <h3 className="text-white text-lg font-bold drop-shadow-md">{item.title}</h3>}
                </div>
                <button 
                  onClick={(e) => handleLike(item.id, e)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md transition-all ${hasLiked[item.id] ? 'bg-pink-500/20 text-pink-500 border border-pink-500/50' : 'bg-black/40 text-white hover:bg-black/60 border border-white/20'}`}
                >
                  {hasLiked[item.id] ? <IconHeartFilled size={18} /> : <IconHeart size={18} />}
                  <span className="text-sm font-semibold">{localLikes[item.id] !== undefined ? localLikes[item.id] : (item.likesCount || 0)}</span>
                </button>
              </div>
            </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      {/* Modal / Popup Komentar */}
      <AnimatePresence>
        {selectedActivity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedActivity(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A1128] border border-[#1E3A8A]/50 rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl h-[90vh] md:h-[85vh] flex flex-col md:flex-row relative mt-8 md:mt-0"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-red-500/80 hover:bg-red-600/90 text-white rounded-full backdrop-blur-md transition-colors shadow-lg"
              >
                <IconX size={20} />
              </button>

              {/* Left Side: Image */}
              <div className="w-full shrink-0 h-2/5 md:h-full md:w-1/2 bg-black flex items-center justify-center relative">
                <div className="absolute inset-0 pt-10 pb-2 md:pt-4">
                  <Image
                    src={selectedActivity.imageUrl}
                    alt={selectedActivity.title || 'Activity Image'}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right Side: Content & Comments */}
              <div className="w-full flex-1 min-h-0 flex flex-col md:w-1/2 bg-[#0A1128]">
                {/* Header (Date, Title, Description) */}
                <div className="p-4 md:p-6 border-b border-[#1E3A8A]/30 shrink-0">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-sm text-cyan-400 font-mono tracking-wider uppercase mb-1">
                      {formatDate(selectedActivity.createdAt) || 'Belum ada tanggal'}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white font-mono leading-tight">{selectedActivity.title}</h2>
                    {selectedActivity.description && (
                      <p className="text-slate-400 text-sm md:text-base font-mono mt-1 leading-relaxed">{selectedActivity.description}</p>
                    )}
                  </div>
                </div>

                {/* Comment Form & Like Button (Moved here) */}
                <div className="p-3 md:p-6 border-b border-[#1E3A8A]/30 bg-[#050A18] shrink-0">
                  <div className="flex flex-row items-center gap-2">
                    {/* Like Button */}
                    <button 
                      type="button"
                      onClick={(e) => handleLike(selectedActivity.id, e)}
                      className={`shrink-0 flex items-center justify-center gap-1.5 px-3 py-2 md:px-4 md:py-2.5 rounded-xl transition-all ${hasLiked[selectedActivity.id] ? 'bg-pink-500/20 text-pink-500 border border-pink-500/50' : 'bg-[#0A1128] text-slate-300 hover:bg-[#1E3A8A]/30 border border-[#1E3A8A]/50'}`}
                    >
                      {hasLiked[selectedActivity.id] ? <IconHeartFilled size={18} className="md:w-5 md:h-5" /> : <IconHeart size={18} className="md:w-5 md:h-5" />}
                      <span className="font-bold font-mono text-sm md:text-base">{localLikes[selectedActivity.id] !== undefined ? localLikes[selectedActivity.id] : (selectedActivity.likesCount || 0)}</span>
                    </button>

                    {/* Comment Form */}
                    <form onSubmit={handleCommentSubmit} className="flex-1 flex flex-row gap-2 w-full">
                      <input
                        type="text"
                        placeholder="Nama..."
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        maxLength={50}
                        required
                        className="w-1/4 min-w-15 md:min-w-22.5 md:w-1/3 bg-[#0A1128] border border-[#1E3A8A]/50 rounded-xl px-2.5 py-2 md:px-4 md:py-2.5 text-white placeholder-slate-500 font-mono focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                      />
                      <div className="relative flex-1">
                        <input
                          type="text"
                          placeholder="Komentar..."
                          value={commentInput}
                          onChange={(e) => setCommentInput(e.target.value)}
                          required
                          className="w-full bg-[#0A1128] border border-[#1E3A8A]/50 rounded-xl pl-2.5 pr-7 py-2 md:pl-4 md:pr-11 md:py-2.5 text-white placeholder-slate-500 font-mono focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting || !nameInput.trim() || !commentInput.trim()}
                          className="absolute right-1 top-1/2 -translate-y-1/2 p-1 md:p-1.5 bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-700 disabled:text-slate-500 text-white rounded-lg transition-colors"
                        >
                          <IconSend size={16} className="md:w-4 md:h-4" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Comments List (Moved to bottom) */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-[#1E3A8A] scrollbar-track-transparent">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                    <IconMessageCircle size={18} className="md:w-5 md:h-5" />
                    <span className="text-base font-mono font-bold">Komentar ({comments.length})</span>
                  </div>
                  
                  {loadingComments ? (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-cyan-400"></div>
                    </div>
                  ) : comments.length === 0 ? (
                    <div className="text-center py-8 text-slate-500 italic text-xs md:text-sm">
                      Belum ada komentar. Jadilah yang pertama!
                    </div>
                  ) : (
                    comments.map((comment) => (
                      <div key={comment.id} className="bg-white/5 rounded-2xl p-3 md:p-4 border border-white/5">
                        <div className="float-right flex flex-col items-end ml-1.5 mb-1">
                          <span className="text-[10px] font-mono text-slate-500 whitespace-nowrap">{formatDate(comment.createdAt)}</span>
                          <button
                            onClick={() => handleCommentLike(comment.id)}
                            className="flex items-center gap-1.5 text-sm font-mono text-slate-400 hover:text-pink-500 transition-colors mt-1.5"
                          >
                            {comment.likesCount ? (
                              <IconHeartFilled size={18} className="text-pink-500" />
                            ) : (
                              <IconHeart size={18} />
                            )}
                            <span className={comment.likesCount ? "text-pink-500" : ""}>{comment.likesCount || 0}</span>
                          </button>
                        </div>
                        <span className="text-cyan-300 font-bold text-base font-mono block mb-1">{comment.userName}</span>
                        <p className="text-slate-300 text-sm font-mono leading-relaxed whitespace-pre-wrap wrap-break-word">{comment.content}</p>
                        <div className="clear-both"></div>
                      </div>
                    ))
                  )}
                  <div ref={commentsEndRef} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
