export function Avatar() {
  return (
    <div className="w-[280px] h-[280px] rounded-full overflow-hidden relative">
      <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7ba8d4" />
            <stop offset="60%" stopColor="#c89b7b" />
            <stop offset="100%" stopColor="#5a6135" />
          </linearGradient>
        </defs>

        <rect width="280" height="280" fill="url(#skyGrad)" />

        {/* Clouds */}
        <ellipse cx="60" cy="50" rx="25" ry="8" fill="#fff" opacity="0.7" />
        <ellipse cx="220" cy="60" rx="30" ry="10" fill="#fff" opacity="0.6" />

        {/* Sun */}
        <circle cx="200" cy="80" r="18" fill="#f5e6a8" opacity="0.8" />

        {/* Body / jersey */}
        <path
          d="M 90 280 L 90 200 Q 90 185 105 185 L 175 185 Q 190 185 190 200 L 190 280 Z"
          fill="#c8553d"
        />
        <rect x="90" y="218" width="100" height="6" fill="#f1ead8" />
        <rect x="90" y="240" width="100" height="6" fill="#f1ead8" />
        <text
          x="140"
          y="270"
          textAnchor="middle"
          fontFamily="Fraunces, serif"
          fontSize="22"
          fontStyle="italic"
          fontWeight="500"
          fill="#f1ead8"
        >
          10
        </text>

        {/* Neck */}
        <rect x="130" y="172" width="20" height="16" fill="#d4a980" />

        {/* Head */}
        <circle cx="140" cy="140" r="42" fill="#d4a980" />

        {/* Hair */}
        <path
          d="M 100 122 Q 102 90 140 86 Q 178 90 180 122 L 178 138 Q 160 108 140 110 Q 120 108 102 138 Z"
          fill="#0e0d0b"
        />
        <path d="M 100 122 Q 98 145 102 165 L 108 165 Q 106 145 106 128 Z" fill="#0e0d0b" />
        <path d="M 180 122 Q 182 145 178 165 L 172 165 Q 174 145 174 128 Z" fill="#0e0d0b" />

        {/* Headphones */}
        <path
          d="M 102 108 Q 140 78 178 108"
          stroke="#0e0d0b"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="100" cy="135" r="11" fill="#0e0d0b" />
        <circle cx="180" cy="135" r="11" fill="#0e0d0b" />
        <circle cx="100" cy="135" r="5" fill="#d4a93a" />
        <circle cx="180" cy="135" r="5" fill="#d4a93a" />

        {/* Eyes */}
        <circle cx="125" cy="142" r="2.5" fill="#0e0d0b" />
        <circle cx="155" cy="142" r="2.5" fill="#0e0d0b" />

        {/* Smile */}
        <path
          d="M 128 158 Q 140 165 152 158"
          stroke="#0e0d0b"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Cheeks */}
        <ellipse cx="118" cy="153" rx="5" ry="3" fill="#c8553d" opacity="0.4" />
        <ellipse cx="162" cy="153" rx="5" ry="3" fill="#c8553d" opacity="0.4" />
      </svg>
    </div>
  );
}
