const artworks = [
  {
    id: 0,
    title: "Night Forager",
    animal: "Raccoon",
    scientific: "Procyon lotor",
    category: "Omnivore",
    habitat: "Forests, wetlands, and urban areas across North America. Highly adaptable, raccoons thrive near water sources and are equally comfortable in wild and human environments.",
    notes: "I wanted to capture the raccoon in its natural nighttime element — sneaking through the grass under a full moon. The striped tail and eye mask were the most fun details to illustrate.",
    svg: `<img src="images/racoon.png" alt="Raccoon illustration" style="width:100%;height:100%;object-fit:cover;display:block;"/>`
  },
  {
    id: 1,
    title: "Silent Hunter",
    animal: "Owl",
    scientific: "Strix varia",
    category: "Bird of Prey",
    habitat: "Dense forests and woodland edges across North America. Owls prefer old-growth trees for nesting and roosting, hunting in open clearings at night using exceptional hearing and silent flight.",
    notes: "The owl was all about stillness and patience. I focused on the wide eyes and the layered feathers — each one a different tone that creates incredible depth in the illustration.",
    svg: `<svg viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="450" fill="#1a1a2e"/>
      <circle cx="480" cy="80" r="35" fill="#f5f0c0" opacity="0.85"/>
      <circle cx="100" cy="60" r="2" fill="#fff" opacity="0.8"/>
      <circle cx="200" cy="40" r="1.5" fill="#fff" opacity="0.6"/>
      <circle cx="320" cy="55" r="1.5" fill="#fff" opacity="0.7"/>
      <circle cx="420" cy="35" r="1" fill="#fff" opacity="0.5"/>
      <rect x="0" y="370" width="600" height="80" fill="#2a1f0a"/>
      <rect x="0" y="350" width="600" height="30" fill="#3a2d10"/>
      <ellipse cx="300" cy="280" rx="70" ry="90" fill="#8a7a5a"/>
      <ellipse cx="300" cy="240" rx="50" ry="60" fill="#9a8a6a"/>
      <ellipse cx="300" cy="220" rx="36" ry="36" fill="#7a6a4a"/>
      <circle cx="285" cy="215" r="14" fill="#f5f0e0"/>
      <circle cx="315" cy="215" r="14" fill="#f5f0e0"/>
      <circle cx="285" cy="215" r="8" fill="#2a1a08"/>
      <circle cx="315" cy="215" r="8" fill="#2a1a08"/>
      <circle cx="283" cy="213" r="3" fill="#fff" opacity="0.8"/>
      <circle cx="313" cy="213" r="3" fill="#fff" opacity="0.8"/>
      <polygon points="300,228 294,238 306,238" fill="#c8a030"/>
      <ellipse cx="255" cy="260" rx="28" ry="55" fill="#8a7a5a" transform="rotate(-15,255,260)"/>
      <ellipse cx="345" cy="260" rx="28" ry="55" fill="#8a7a5a" transform="rotate(15,345,260)"/>
      <line x1="275" y1="350" x2="260" y2="380" stroke="#6a5a3a" stroke-width="5" stroke-linecap="round"/>
      <line x1="285" y1="352" x2="272" y2="382" stroke="#6a5a3a" stroke-width="5" stroke-linecap="round"/>
      <line x1="315" y1="352" x2="328" y2="382" stroke="#6a5a3a" stroke-width="5" stroke-linecap="round"/>
      <line x1="325" y1="350" x2="340" y2="380" stroke="#6a5a3a" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="268" cy="185" rx="10" ry="14" fill="#8a7a5a"/>
      <ellipse cx="332" cy="185" rx="10" ry="14" fill="#8a7a5a"/>
      <text x="300" y="435" text-anchor="middle" font-family="serif" font-size="11" fill="#888" letter-spacing="2">PLACEHOLDER — OWL ILLUSTRATION COMING SOON</text>
    </svg>`
  },
  {
    id: 2,
    title: "Ember Coat",
    animal: "Red Fox",
    scientific: "Vulpes vulpes",
    category: "Carnivore",
    habitat: "Forests, grasslands, mountains, and urban areas worldwide. One of the most adaptable mammals on Earth, the red fox is found on every continent except Antarctica.",
    notes: "The fox was about contrast — that vivid rusty red against a moody background. I spent a lot of time on the bushy tail and the alert, intelligent expression in the eyes.",
    svg: `<svg viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="450" fill="#2a1a0a"/>
      <circle cx="500" cy="70" r="25" fill="#f5c040" opacity="0.3"/>
      <rect x="0" y="360" width="600" height="90" fill="#1a2a0a"/>
      <rect x="0" y="340" width="600" height="28" fill="#243818"/>
      <ellipse cx="300" cy="310" rx="90" ry="40" fill="#b84a18"/>
      <path d="M210 310 Q240 240 300 230 Q360 240 390 310" fill="#c85a20"/>
      <ellipse cx="300" cy="240" rx="40" ry="45" fill="#c85a20"/>
      <ellipse cx="300" cy="235" rx="28" ry="30" fill="#d06828"/>
      <ellipse cx="285" cy="228" rx="12" ry="12" fill="#1a0a04"/>
      <ellipse cx="315" cy="228" rx="12" ry="12" fill="#1a0a04"/>
      <circle cx="285" cy="226" r="5" fill="#3a2010" opacity="0.8"/>
      <circle cx="315" cy="226" r="5" fill="#3a2010" opacity="0.8"/>
      <circle cx="283" cy="224" r="2" fill="#fff" opacity="0.7"/>
      <circle cx="313" cy="224" r="2" fill="#fff" opacity="0.7"/>
      <ellipse cx="300" cy="250" rx="14" ry="8" fill="#f0d0a0"/>
      <ellipse cx="288" cy="205" rx="10" ry="16" fill="#c85a20"/>
      <ellipse cx="312" cy="205" rx="10" ry="16" fill="#c85a20"/>
      <path d="M210 320 Q160 310 130 330 Q120 350 150 345 Q170 355 190 340" fill="#f0e8d8" stroke="#c85a20" stroke-width="1"/>
      <line x1="250" y1="340" x2="235" y2="368" stroke="#b84a18" stroke-width="8" stroke-linecap="round"/>
      <line x1="268" y1="342" x2="256" y2="372" stroke="#b84a18" stroke-width="8" stroke-linecap="round"/>
      <line x1="332" y1="342" x2="344" y2="372" stroke="#b84a18" stroke-width="8" stroke-linecap="round"/>
      <line x1="350" y1="340" x2="365" y2="368" stroke="#b84a18" stroke-width="8" stroke-linecap="round"/>
      <text x="300" y="435" text-anchor="middle" font-family="serif" font-size="11" fill="#888" letter-spacing="2">PLACEHOLDER — FOX ILLUSTRATION COMING SOON</text>
    </svg>`
  },
  {
    id: 3,
    title: "Eucalyptus Dream",
    animal: "Koala",
    scientific: "Phascolarctos cinereus",
    category: "Herbivore",
    habitat: "Eucalyptus forests and woodlands of eastern and southeastern Australia. Koalas spend up to 22 hours a day resting to conserve energy from their low-nutrient leaf diet.",
    notes: "The koala was about softness — those rounded ears, the fluffy grey body, the sleepy eyes. I wanted it to feel gentle and still, perched quietly in its eucalyptus tree.",
    svg: `<svg viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="450" fill="#0a1a10"/>
      <circle cx="100" cy="70" r="2" fill="#fff" opacity="0.6"/>
      <circle cx="250" cy="45" r="1.5" fill="#fff" opacity="0.5"/>
      <circle cx="400" cy="60" r="1.5" fill="#fff" opacity="0.7"/>
      <circle cx="530" cy="40" r="1" fill="#fff" opacity="0.4"/>
      <rect x="260" y="80" width="18" height="370" fill="#5a3a18"/>
      <rect x="270" y="80" width="10" height="370" fill="#6a4a22"/>
      <ellipse cx="260" cy="200" rx="60" ry="8" fill="#3a6a28" transform="rotate(-30,260,200)"/>
      <ellipse cx="310" cy="280" rx="55" ry="7" fill="#2a5a1e" transform="rotate(25,310,280)"/>
      <ellipse cx="230" cy="320" rx="50" ry="7" fill="#3a6a28" transform="rotate(-20,230,320)"/>
      <ellipse cx="320" cy="290" rx="90" ry="70" fill="#8a8a9a"/>
      <ellipse cx="320" cy="255" rx="52" ry="58" fill="#9a9aaa"/>
      <ellipse cx="320" cy="242" rx="38" ry="38" fill="#8a8a9a"/>
      <ellipse cx="300" cy="232" rx="18" ry="18" fill="#aaaabc"/>
      <ellipse cx="340" cy="232" rx="18" ry="18" fill="#aaaabc"/>
      <ellipse cx="300" cy="232" rx="10" ry="11" fill="#2a2a3a"/>
      <ellipse cx="340" cy="232" rx="10" ry="11" fill="#2a2a3a"/>
      <circle cx="298" cy="230" r="4" fill="#0a0a18" opacity="0.8"/>
      <circle cx="338" cy="230" r="4" fill="#0a0a18" opacity="0.8"/>
      <circle cx="296" cy="228" r="2" fill="#fff" opacity="0.7"/>
      <circle cx="336" cy="228" r="2" fill="#fff" opacity="0.7"/>
      <ellipse cx="320" cy="252" rx="20" ry="12" fill="#6a6a7a"/>
      <ellipse cx="320" cy="252" rx="12" ry="7" fill="#4a3a3a"/>
      <ellipse cx="285" cy="208" rx="16" ry="20" fill="#9a9aaa"/>
      <ellipse cx="355" cy="208" rx="16" ry="20" fill="#9a9aaa"/>
      <path d="M270 300 Q240 295 235 320 Q232 340 260 330" fill="#8a8a9a"/>
      <path d="M370 300 Q400 295 405 320 Q408 340 380 330" fill="#8a8a9a"/>
      <text x="300" y="435" text-anchor="middle" font-family="serif" font-size="11" fill="#888" letter-spacing="2">PLACEHOLDER — KOALA ILLUSTRATION COMING SOON</text>
    </svg>`
  }
];
