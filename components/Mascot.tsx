
import React, { useState, useEffect, useRef } from 'react';

// --- Configuration & Data ---
const WITTY_COMMENTS = [
  "Holy cow! You're getting good at this!",
  "Make your English legend-dairy!",
  "Past, present, or future? I've seen it all.",
  "Don't worry, even a time-traveling cow gets confused sometimes!",
  "You're mooo-ving in the right direction!",
  "Udderly fantastic progress!",
  "Tenses are just time for a snack, right?",
  "I've traveled to the future and you're an English pro!",
  "Moo-ve over, Shakespeare!",
  "That was a hoof-tastic choice!",
  "I'm not just a cow, I'm a scholar!",
  "Have you heard about the cow who could write? She was remarkable!"
];

type Expression = 'neutral' | 'happy' | 'excited' | 'cool' | 'smart' | 'love' | 'confused' | 'wink' | 'sleepy';

interface MascotProps {
  externalMessage?: string | null;
}

export const Mascot: React.FC<MascotProps> = ({ externalMessage }) => {
  const [expression, setExpression] = useState<Expression>('neutral');
  const [comment, setComment] = useState("Hi! I'm Dr. Moo!");
  const [showBubble, setShowBubble] = useState(true);
  const [isBlinking, setIsBlinking] = useState(false);
  
  // Mouse tracking state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mascotRef = useRef<HTMLDivElement>(null);

  // --- Logic: Handle External Messages ---
  useEffect(() => {
    if (externalMessage) {
      setComment(externalMessage);
      setExpression('excited');
      setShowBubble(true);
      // Reset expression after 3 seconds
      const timer = setTimeout(() => setExpression('neutral'), 3000);
      return () => clearTimeout(timer);
    }
  }, [externalMessage]);

  // --- Logic: Random Blinking ---
  useEffect(() => {
    let timeoutId: number;
    const blinkLoop = () => {
      const timeToNextBlink = Math.random() * 3000 + 2000; // 2-5 seconds
      timeoutId = window.setTimeout(() => {
        setIsBlinking(true);
        window.setTimeout(() => {
          setIsBlinking(false);
          blinkLoop();
        }, 150); // Blink duration
      }, timeToNextBlink);
    };
    blinkLoop();
    return () => clearTimeout(timeoutId);
  }, []);

  // --- Logic: Eye Tracking ---
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!mascotRef.current) return;
      const rect = mascotRef.current.getBoundingClientRect();
      // Calculate center of mascot
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate offset limited to a range (so eyes don't roll back too far)
      const x = Math.min(Math.max((event.clientX - centerX) / 15, -10), 10);
      const y = Math.min(Math.max((event.clientY - centerY) / 15, -10), 10);
      
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // --- Interaction: Click ---
  const handleClick = () => {
    const expressions: Expression[] = ['happy', 'excited', 'cool', 'smart', 'love', 'wink', 'confused'];
    const nextExpr = expressions[Math.floor(Math.random() * expressions.length)];
    const nextComment = WITTY_COMMENTS[Math.floor(Math.random() * WITTY_COMMENTS.length)];
    
    setExpression(nextExpr);
    setComment(nextComment);
    setShowBubble(true);

    // Reset to neutral after a few seconds unless it's "cool" or "smart" (which stay longer)
    if (nextExpr !== 'cool' && nextExpr !== 'smart') {
      setTimeout(() => setExpression('neutral'), 2500);
    }
  };

  // --- Helper Colors (White & Dark Chocolate Theme) ---
  const c = {
    darkChoc: "#3E2723",
    milkChoc: "#795548",
    whiteFur: "#FFFAF0", // Creamy white
    shadow: "#E6D6C8",   // Warm shadow
    pink: "#FFB6C1",     // Soft pink for ears/nose
    gold: "#FFD700",
    ribbon: "#FF5252"
  };

  return (
    <div 
      ref={mascotRef}
      className="fixed bottom-8 right-4 md:right-12 z-50 flex flex-col items-center"
    >
      {/* --- Speech Bubble --- */}
      {showBubble && (
        <div className="mb-4 relative animate-fade-in group">
          <div className="bg-white p-4 rounded-2xl shadow-xl border-2 border-orange-100 max-w-[200px] text-center transform transition-transform hover:scale-105">
            <p className="text-sm font-bold text-gray-800 leading-tight font-sans">
              {comment}
            </p>
          </div>
          {/* Bubble Tail */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-orange-100 rotate-45"></div>
          
          {/* Close Button */}
          <button 
            onClick={(e) => { e.stopPropagation(); setShowBubble(false); }}
            className="absolute -top-2 -right-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold shadow-md transition-colors"
          >
            ✕
          </button>
        </div>
      )}

      {/* --- The Mascot SVG --- */}
      <div 
        onClick={handleClick}
        className="w-32 h-32 md:w-40 md:h-40 cursor-pointer transition-transform hover:scale-105 active:scale-95 drop-shadow-2xl"
        title="Click me for English tips!"
      >
        <svg viewBox="0 0 200 220" className="w-full h-full overflow-visible">
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="eyeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5D4037" />
              <stop offset="100%" stopColor="#3E2723" />
            </linearGradient>
            <radialGradient id="shiny" cx="30%" cy="30%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.9" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* --- Back Legs (for depth) --- */}
          <path d="M70 180 L 70 200 A 10 10 0 0 0 90 200 L 90 180" fill={c.whiteFur} stroke={c.darkChoc} strokeWidth="3"/>
          <path d="M130 180 L 130 200 A 10 10 0 0 0 150 200 L 150 180" fill={c.whiteFur} stroke={c.darkChoc} strokeWidth="3"/>

          {/* --- Body --- */}
          <ellipse cx="110" cy="160" rx="60" ry="45" fill={c.whiteFur} stroke={c.darkChoc} strokeWidth="4" />
          <path d="M140 130 Q 160 140 165 160 Q 150 170 140 160 Z" fill={c.milkChoc} opacity="0.8" />

          {/* --- Tail (Animated) --- */}
          <path d="M165 150 Q 185 140 190 120" fill="none" stroke={c.whiteFur} strokeWidth="4" strokeLinecap="round">
            <animate attributeName="d" values="M165 150 Q 185 140 190 120; M165 150 Q 185 160 190 140; M165 150 Q 185 140 190 120" dur="2s" repeatCount="indefinite"/>
          </path>
          <path d="M188 118 L 195 115 L 192 125 Z" fill={c.darkChoc} />

          {/* --- Head Container --- */}
          <g transform="translate(0, 10)">
            <g transform="rotate(-10, 40, 70)">
              <path d="M40 70 Q 10 50 15 80 Q 30 100 40 85" fill={c.whiteFur} stroke={c.darkChoc} strokeWidth="3" />
              <path d="M35 70 Q 15 55 20 75" fill={c.pink} opacity="0.6" />
            </g>
            <g transform="rotate(10, 160, 70)">
              <path d="M160 70 Q 190 50 185 80 Q 170 100 160 85" fill={c.whiteFur} stroke={c.darkChoc} strokeWidth="3" />
              <path d="M165 70 Q 185 55 180 75" fill={c.pink} opacity="0.6" />
            </g>

            <path d="M70 45 Q 75 25 65 20" fill={c.gold} stroke={c.darkChoc} strokeWidth="2" />
            <path d="M130 45 Q 125 25 135 20" fill={c.gold} stroke={c.darkChoc} strokeWidth="2" />

            <path d="M50 50 Q 100 20 150 50 Q 170 80 160 130 Q 100 155 40 130 Q 30 80 50 50" fill={c.whiteFur} stroke={c.darkChoc} strokeWidth="4" />
            <path d="M100 35 Q 120 35 130 60 L 100 65 L 70 60 Q 80 35 100 35" fill={c.milkChoc} opacity="0.2" />

            {/* --- Expressions / Eyes --- */}
            <g transform={`translate(${expression === 'neutral' || expression === 'excited' ? mousePos.x : 0}, ${expression === 'neutral' || expression === 'excited' ? mousePos.y : 0})`}>
              {expression === 'wink' || expression === 'sleepy' || isBlinking ? (
                <path d="M60 85 Q 75 95 90 85" fill="none" stroke={c.darkChoc} strokeWidth="4" strokeLinecap="round" />
              ) : expression === 'happy' ? (
                 <path d="M60 85 Q 75 65 90 85" fill="none" stroke={c.darkChoc} strokeWidth="4" strokeLinecap="round" />
              ) : expression === 'love' ? (
                 <path d="M60 80 Q 65 70 75 80 Q 85 70 90 80 L 75 100 Z" fill="#FF1493" />
              ) : (
                <g>
                   <ellipse cx="75" cy="85" rx="20" ry="22" fill="white" stroke={c.darkChoc} strokeWidth="2" />
                   <ellipse cx="75" cy="85" rx="14" ry="16" fill="url(#eyeGradient)" />
                   <circle cx="75" cy="85" r="7" fill="black" />
                   <circle cx="70" cy="80" r="5" fill="white" opacity="0.9" />
                   <circle cx="80" cy="90" r="2" fill="white" opacity="0.7" />
                </g>
              )}
            </g>

            <g transform={`translate(${expression === 'neutral' || expression === 'excited' ? mousePos.x : 0}, ${expression === 'neutral' || expression === 'excited' ? mousePos.y : 0})`}>
              {expression === 'sleepy' || isBlinking ? (
                 <path d="M110 85 Q 125 95 140 85" fill="none" stroke={c.darkChoc} strokeWidth="4" strokeLinecap="round" />
              ) : expression === 'happy' || expression === 'wink' ? (
                 <path d="M110 85 Q 125 65 140 85" fill="none" stroke={c.darkChoc} strokeWidth="4" strokeLinecap="round" />
              ) : expression === 'love' ? (
                 <path d="M110 80 Q 115 70 125 80 Q 135 70 140 80 L 125 100 Z" fill="#FF1493" />
              ) : (
                <g>
                   <ellipse cx="125" cy="85" rx="20" ry="22" fill="white" stroke={c.darkChoc} strokeWidth="2" />
                   <ellipse cx="125" cy="85" rx="14" ry="16" fill="url(#eyeGradient)" />
                   <circle cx="125" cy="85" r="7" fill="black" />
                   <circle cx="120" cy="80" r="5" fill="white" opacity="0.9" />
                   <circle cx="130" cy="90" r="2" fill="white" opacity="0.7" />
                </g>
              )}
            </g>

            {expression === 'smart' && (
              <g opacity="0.8">
                <circle cx="75" cy="85" r="22" fill="none" stroke="#2D1B0E" strokeWidth="2" />
                <circle cx="125" cy="85" r="22" fill="none" stroke="#2D1B0E" strokeWidth="2" />
                <line x1="97" y1="85" x2="103" y2="85" stroke="#2D1B0E" strokeWidth="2" />
              </g>
            )}

            {expression === 'cool' && (
              <g>
                <path d="M50 75 Q 75 75 95 85 L 90 100 Q 70 95 55 85 Z" fill="#333" />
                <path d="M105 85 Q 125 75 150 75 L 145 85 Q 130 95 110 100 Z" fill="#333" />
                <line x1="95" y1="85" x2="105" y2="85" stroke="#333" strokeWidth="3" />
              </g>
            )}

            {expression === 'confused' && (
               <text x="150" y="50" fontSize="30" fill={c.darkChoc} fontWeight="bold" transform="rotate(15, 150, 50)">?</text>
            )}

            <ellipse cx="100" cy="115" rx="35" ry="20" fill={c.pink} stroke={c.darkChoc} strokeWidth="2" />
            <circle cx="90" cy="112" r="4" fill={c.milkChoc} />
            <circle cx="110" cy="112" r="4" fill={c.milkChoc} />

            <path 
              d={expression === 'excited' ? "M 90 125 Q 100 140 110 125" : "M 90 125 Q 100 135 110 125"} 
              fill="none" 
              stroke={c.darkChoc} 
              strokeWidth="2" 
              strokeLinecap="round" 
            />

            <g transform="translate(0, 135)">
               <circle cx="60" cy="5" r="6" fill="#FFA726" stroke="#E65100" strokeWidth="1"/>
               <circle cx="140" cy="5" r="6" fill="#FFA726" stroke="#E65100" strokeWidth="1"/>
               <circle cx="80" cy="10" r="7" fill="white" stroke="#FBC02D" strokeWidth="1"/>
               <circle cx="80" cy="10" r="2" fill="#FBC02D" />
               <circle cx="120" cy="10" r="7" fill="white" stroke="#FBC02D" strokeWidth="1"/>
               <circle cx="120" cy="10" r="2" fill="#FBC02D" />
               <circle cx="100" cy="15" r="8" fill="#FF7043" stroke="#BF360C" strokeWidth="1"/>
               <circle cx="100" cy="15" r="2" fill="#FFE082" />
            </g>

            <path d="M85 145 Q 100 155 115 145" fill="none" stroke={c.ribbon} strokeWidth="4" />
            <path d="M100 150 L 90 170 L 100 160 L 110 170 Z" fill={c.ribbon} />

            <g transform="translate(100, 165)">
               <path d="M-10 0 Q 0 -5 10 0 L 12 15 Q 0 20 -12 15 Z" fill={c.gold} stroke={c.darkChoc} strokeWidth="1.5" />
               <circle cx="0" cy="18" r="3" fill="#B8860B" />
            </g>
          </g>
        </svg>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};
