function OpenBook({ x = 55, y = 82, color = '#8d69d8', page = '#fff8ef' }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M4 7 C18 0 30 3 43 12 L43 50 C30 41 18 38 4 46 Z" fill={color} stroke="#202033" strokeWidth="3" />
      <path d="M43 12 C57 3 70 0 84 7 L84 46 C70 38 57 41 43 50 Z" fill={color} stroke="#202033" strokeWidth="3" />
      <path d="M12 12 C24 8 34 12 43 18 L43 43 C33 36 23 34 12 38 Z" fill={page} stroke="#202033" strokeWidth="2" />
      <path d="M43 18 C53 12 64 8 76 12 L76 38 C64 34 54 36 43 43 Z" fill={page} stroke="#202033" strokeWidth="2" />
      <path d="M21 22 H35 M20 30 H35 M55 22 H69 M55 30 H70" stroke="#d98b56" strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

function Pencil({ x = 128, y = 62, rotate = 22 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <rect x="0" y="0" width="11" height="48" rx="4" fill="#ffd75c" stroke="#202033" strokeWidth="2" />
      <rect x="0" y="0" width="11" height="9" rx="3" fill="#ff9caf" stroke="#202033" strokeWidth="2" />
      <path d="M0 48 H11 L5.5 61 Z" fill="#ffe3bd" stroke="#202033" strokeWidth="2" />
      <path d="M3.2 55 H7.8 L5.5 61 Z" fill="#202033" />
      <path d="M5.5 12 V43" stroke="#f3a32d" strokeWidth="1.5" />
    </g>
  );
}

function Glasses({ stroke = '#275f3d' }) {
  return (
    <g>
      <circle cx="67" cy="53" r="15" fill="rgba(255,255,255,0.45)" stroke={stroke} strokeWidth="3" />
      <circle cx="102" cy="53" r="15" fill="rgba(255,255,255,0.45)" stroke={stroke} strokeWidth="3" />
      <path d="M82 53 H87" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

function Face({ color = '#183728', blush = '#ff9ba2' }) {
  return (
    <g>
      <circle cx="67" cy="53" r="3.5" fill={color} />
      <circle cx="102" cy="53" r="3.5" fill={color} />
      <path d="M80 63 Q85 69 91 63" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="51" cy="61" rx="9" ry="6" fill={blush} opacity="0.65" />
      <ellipse cx="118" cy="61" rx="9" ry="6" fill={blush} opacity="0.65" />
    </g>
  );
}

function DinoReader() {
  return (
    <svg viewBox="0 0 180 150" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <path d="M37 92 C25 84 18 67 24 49 C31 27 54 17 78 20 C105 23 127 42 134 68 C139 86 134 111 116 123 C93 139 56 126 37 92Z" fill="#9ee6a6" stroke="#1f3b28" strokeWidth="3" />
      <path d="M33 83 C19 84 12 94 15 106 C18 119 34 121 43 111" fill="#9ee6a6" stroke="#1f3b28" strokeWidth="3" />
      <path d="M111 115 C124 119 138 114 142 100" fill="none" stroke="#1f3b28" strokeWidth="7" strokeLinecap="round" />
      <path d="M58 20 L65 8 L72 22 M78 20 L86 7 L92 24 M98 27 L108 16 L111 35" fill="#9ee6a6" stroke="#1f3b28" strokeWidth="3" strokeLinejoin="round" />
      <Glasses />
      <Face />
      <path d="M34 78 Q47 83 56 98" fill="none" stroke="#1f3b28" strokeWidth="8" strokeLinecap="round" />
      <path d="M128 75 Q119 87 112 102" fill="none" stroke="#1f3b28" strokeWidth="8" strokeLinecap="round" />
      <OpenBook x={44} y={77} color="#8d62d8" />
      <Pencil x={132} y={70} rotate={18} />
    </svg>
  );
}

function BunnyReader() {
  return (
    <svg viewBox="0 0 180 150" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <path d="M57 39 C48 13 53 -3 66 2 C78 7 80 31 77 48" fill="#ffc8cf" stroke="#202033" strokeWidth="3" />
      <path d="M105 48 C101 31 103 7 116 2 C129 -3 134 13 123 39" fill="#ffc8cf" stroke="#202033" strokeWidth="3" />
      <path d="M39 83 C31 57 47 32 81 28 C115 24 139 45 139 76 C139 112 111 130 77 126 C53 123 44 103 39 83Z" fill="#ffc8cf" stroke="#202033" strokeWidth="3" />
      <ellipse cx="55" cy="63" rx="11" ry="7" fill="#ff9eaa" opacity="0.75" />
      <ellipse cx="120" cy="63" rx="11" ry="7" fill="#ff9eaa" opacity="0.75" />
      <circle cx="70" cy="56" r="4" fill="#202033" />
      <circle cx="103" cy="56" r="4" fill="#202033" />
      <path d="M84 64 Q88 69 93 64" fill="none" stroke="#202033" strokeWidth="3" strokeLinecap="round" />
      <path d="M38 86 Q50 91 59 102" fill="none" stroke="#202033" strokeWidth="8" strokeLinecap="round" />
      <path d="M132 84 Q121 91 115 103" fill="none" stroke="#202033" strokeWidth="8" strokeLinecap="round" />
      <OpenBook x={47} y={80} color="#ef6d72" page="#fff7ea" />
    </svg>
  );
}

function ChickReader() {
  return (
    <svg viewBox="0 0 180 150" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <path d="M39 82 C39 47 60 27 91 27 C123 27 145 49 145 83 C145 115 124 132 91 132 C59 132 39 114 39 82Z" fill="#ffe36f" stroke="#202033" strokeWidth="3" />
      <path d="M76 29 L85 12 L93 29 M92 29 L103 14 L107 33" fill="#ffe36f" stroke="#202033" strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="61" cy="68" rx="10" ry="7" fill="#ffad80" opacity="0.7" />
      <ellipse cx="120" cy="68" rx="10" ry="7" fill="#ffad80" opacity="0.7" />
      <circle cx="76" cy="61" r="4" fill="#202033" />
      <circle cx="106" cy="61" r="4" fill="#202033" />
      <path d="M87 69 L96 69 L91.5 76 Z" fill="#ff9b35" stroke="#202033" strokeWidth="2" strokeLinejoin="round" />
      <path d="M39 79 Q24 65 19 48" fill="none" stroke="#202033" strokeWidth="8" strokeLinecap="round" />
      <path d="M143 78 Q158 63 163 47" fill="none" stroke="#202033" strokeWidth="8" strokeLinecap="round" />
      <Pencil x={16} y={35} rotate={-22} />
      <Pencil x={154} y={35} rotate={22} />
      <OpenBook x={47} y={82} color="#4d80df" page="#fff8ee" />
    </svg>
  );
}

function BlueReader() {
  return (
    <svg viewBox="0 0 180 150" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <path d="M38 83 C38 47 62 25 93 28 C124 31 142 53 140 84 C138 114 116 130 88 128 C58 126 38 111 38 83Z" fill="#abe4ff" stroke="#202033" strokeWidth="3" />
      <Face color="#0c4a6e" blush="#f4a4d5" />
      <path d="M38 83 Q49 90 58 103" fill="none" stroke="#202033" strokeWidth="8" strokeLinecap="round" />
      <path d="M137 84 Q124 91 116 103" fill="none" stroke="#202033" strokeWidth="8" strokeLinecap="round" />
      <OpenBook x={47} y={80} color="#5c8ee8" page="#fff8ef" />
    </svg>
  );
}

export const Characters = {
  PCI: DinoReader,
  PCG: DinoReader,
  SCI: DinoReader,
  SCG: BlueReader,
  PEI: BunnyReader,
  PEG: BunnyReader,
  SEI: ChickReader,
  SEG: ChickReader,
};
