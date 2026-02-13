
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
  "Have you heard about the cow who could write? She was remarkable!",
  "The Present Perfect is like a fresh bucket of milk—started in the past, still good now!",
  "Simple Past is for yesterday's hay. It's finished and gone!",
  "I'll be eating grass in the Future Continuous. Care to join?",
  "Stative verbs? I *know* you can handle them. No '-ing' allowed for 'know', dear!",
  "If I had known you'd be this good, I would have brought extra clover!",
  "A tense a day keeps the confusion away. Or is it an apple? I prefer grass.",
  "Don't have a cow over 'had had'. It's just the Past Perfect!",
  "I am teaching, you are learning. That's the Present Continuous in action!",
  "The Future Perfect: by the time you finish this, you will have mastered tenses!",
  "Since vs For? Since my first 'moo', I've for-seen your success!",
  "I had been chewing cud for hours when you arrived. Ah, Past Perfect Continuous!",
  "Verb forms are the building blocks of the Milky Way!",
  "Regular or irregular? Just like my spots, every verb has its place.",
  "Dr. Moo's diagnosis: You have a healthy grasp of the Present Tense!",
  "Time flies when you're having fun with grammar. Or should I say, 'Time mooo-ves'?",
  "Is 'will' a promise or a prediction? In your case, it's a promise of greatness!",
  "The Historical Present makes past events feel like they're happening right at the barn door.",
  "Don't let 'been' be your 'end'. It's just a participle!",
  "Conditionals are like fences—they tell us what happens if you jump over them!",
  "Your progress is not just simple; it's perfect!",
  "The Present Perfect Continuous: I have been mooing since sunrise!",
  "Yesterday is history, tomorrow is a mystery, but today is the Present Tense!",
  "Past Tense: I grazed. Present Tense: I graze. Future Tense: I will graze. Life is simple!",
  "When in doubt, think: Is the work done (Perfect) or still doing (Continuous)?",
  "I would go to the moon, but I prefer the Milky Way!",
  "Grammar is the grass of the mind. Keep grazing!",
  "A verb without a tense is like a cow without a field—lost!",
  "Helping verbs are like farmhands—they do the heavy lifting for the main verb!",
  "Structure is key! S+V+O is the backbone of the barn.",
  "If you study hard, you will pass. That's a Type 1 conditional, and a fact!",
  "The Past Continuous is for all those 'I was doing something' moments!",
  "Don't worry about 'shall'. 'Will' is the future of the future!",
  "Present Perfect: Have you finished your milk yet?",
  "I've seen the future, and your grammar is impeccable!",
  "Past, Present, or Future? As a time-traveler, I say: Why not all three?"
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
    silver: "#B0BEC5",   // Stethoscope color
    darkGrey: "#37474F", // Stethoscope tube
    petalPink: "#FF85A1",
    petalYellow: "#FFEB3B"
  };

  // Flower Component Helper for SVG
  const Flower = ({ x, y, size = 1 }: { x: number, y: number, size?: number }) => (
    <g transform={`translate(${x}, ${y}) scale(${size})`}>
      <circle cx="0" cy="-3" r="2.5" fill={c.petalPink} />
      <circle cx="3" cy="0" r="2.5" fill={c.petalPink} />
      <circle cx="0" cy="3" r="2.5" fill={c.petalPink} />
      <circle cx="-3" cy="0" r="2.5" fill={c.petalPink} />
      <circle cx="0" cy="0" r="2" fill={c.gold} />
    </g>
  );

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
              {/* Left Eyelashes */}
              <g transform="translate(75, 85)" opacity={expression === 'wink' || expression === 'sleepy' || isBlinking ? 0.3 : 1}>
                <path d="M-22,-15 Q-28,-22 -32,-18" fill="none" stroke={c.darkChoc} strokeWidth="1.5" strokeLinecap="round" />
                <path d="M-18,-20 Q-22,-30 -28,-25" fill="none" stroke={c.darkChoc} strokeWidth="1.5" strokeLinecap="round" />
                <path d="M-10,-22 Q-10,-32 -15,-30" fill="none" stroke={c.darkChoc} strokeWidth="1.5" strokeLinecap="round" />
              </g>

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
              {/* Right Eyelashes */}
              <g transform="translate(125, 85)" opacity={expression === 'sleepy' || isBlinking ? 0.3 : 1}>
                <path d="M22,-15 Q28,-22 32,-18" fill="none" stroke={c.darkChoc} strokeWidth="1.5" strokeLinecap="round" />
                <path d="M18,-20 Q22,-30 28,-25" fill="none" stroke={c.darkChoc} strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10,-22 Q10,-32 15,-30" fill="none" stroke={c.darkChoc} strokeWidth="1.5" strokeLinecap="round" />
              </g>

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

            {/* --- Stethoscope (Medical Professional Upgrade) --- */}
            {/* The binaural part around neck */}
            <path 
              d="M70 142 Q 100 165 130 142" 
              fill="none" 
              stroke={c.darkGrey} 
              strokeWidth="6" 
              strokeLinecap="round" 
            />
            {/* The tube connecting to chest piece */}
            <path 
              d="M100 158 L 100 178" 
              fill="none" 
              stroke={c.darkGrey} 
              strokeWidth="4" 
              strokeLinecap="round" 
            />

            {/* Floral decorations blooming from stethoscope belt/tubes */}
            <Flower x={75} y={145} size={0.7} />
            <Flower x={88} y={154} size={0.6} />
            <Flower x={112} y={154} size={0.5} />
            <Flower x={125} y={145} size={0.8} />
            <Flower x={104} y={168} size={0.6} />

            {/* Chest Piece */}
            <g transform="translate(100, 188)">
               <circle r="14" fill={c.silver} stroke={c.darkChoc} strokeWidth="2" />
               <circle r="10" fill="white" opacity="0.4" />
               <circle r="6" fill={c.silver} stroke={c.darkChoc} strokeWidth="1.5" />
               
               {/* Tiny flower on chest piece center */}
               <Flower x={0} y={0} size={0.5} />
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
