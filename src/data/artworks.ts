export type Artwork = {
  id: string;
  musicalId: string;
  year: number;
  yearLabel?: string;
  caption: string;
  createdAt: string;
  images: string[];
  music?: {
    title: string;
    youtubeId: string;
    start?: number;
  } | null;
};

/**
 * 백작
 */
const baekjakArtworks: Artwork[] = [
  {
    id: "baekjak-001",
    musicalId: "baekjak",
    year: 2026,
    createdAt: "2026-06-29",
    caption: "오래 기다려왔어, 너를 기다려왔어.",
    images: ["/images/baekjak/002.png"],
    music: {
      title: "오래 기다려왔어",
      youtubeId: "hqx8RrlZaGc",
      start: 0,
    },
  },
  {
    id: "baekjak-002",
    musicalId: "baekjak",
    year: 2026,
    createdAt: "2026-06-28",
    caption: "자님 백작 짱",
    images: ["/images/baekjak/001.jpg"],
  },
];

/**
 * 스톤
 */
const stoneArtworks: Artwork[] = [
  {
    id: "stone-001",
    musicalId: "stone",
    year: 2026,
    createdAt: "2026-06-30",
    caption: `그때!
한 우주가
바다에 뛰어 들었습니다.`,
    images: ["/images/stone/001.webp", "/images/stone/003.webp"],
  },
  {
    id: "stone-002",
    musicalId: "stone",
    year: 2026,
    createdAt: "2026-06-30",
    caption: "황금바다의 이방인",
    images: ["/images/stone/002.webp"],
  },
  {
    id: "stone-004",
    musicalId: "stone",
    year: 2026,
    yearLabel: "2026 - LSH 콘서트에서",
    createdAt: "2026-06-30",
    caption: "경계선 위에 서서",
    images: ["/images/stone/004.webp"],
    music: {
      title: "바람",
      youtubeId: "1Ys9yu-RZhM",
      start: 0,
    },
  },
  {
    id: "stone-005",
    musicalId: "stone",
    year: 2026,
    yearLabel: "2026 - LSH 콘서트에서",
    createdAt: "2026-06-30",
    caption: `먼 훗날의
어느 낯선 도시에서`,
    images: ["/images/stone/005.gif"],
    music: {
      title: "She",
      youtubeId: "ZWG8enSfkCY",
      start: 0,
    },
  },
  {
    id: "stone-006",
    musicalId: "stone",
    year: 2026,
    yearLabel: "2026 - LSH 콘서트에서",
    createdAt: "2026-06-30",
    caption: `내가 항상 여기 서 있을게
걷다가 지친 네가 나를 볼 수 있게
저기 저 별 위에 그릴 거야
내가 널 사랑하는 마음 볼 수 있게`,
    images: ["/images/stone/006.webp"],
    music: {
      title: "서시",
      youtubeId: "fI1DDeuiIWg",
      start: 0,
    },
  },
  {
    id: "stone-007",
    musicalId: "stone",
    year: 2026,
    createdAt: "2026-06-30",
    caption: "같은 지옥에서 뒹구는 마음이란...",
    images: ["/images/stone/007.webp"],
  },
  {
    id: "stone-008",
    musicalId: "stone",
    year: 2026,
    createdAt: "2026-06-30",
    caption: `하얀 눈이 내린다
밤새도록 내린다
자작나무 가지에
붉은 꽃이 피었다`,
    images: ["/images/stone/008.webp"],
  },
  {
    id: "stone-009",
    musicalId: "stone",
    year: 2026,
    createdAt: "2026-06-30",
    caption: `사라지는 건가?
가라앉는 거지.`,
    images: ["/images/stone/009.webp"],
  },
  {
    id: "stone-010",
    musicalId: "stone",
    year: 2026,
    createdAt: "2026-06-30",
    caption: "꿈속에도 출구 없는 용광로",
    images: ["/images/stone/010.webp"],
  },
  {
    id: "stone-011",
    musicalId: "stone",
    year: 2026,
    createdAt: "2026-06-30",
    caption: "수상한 앤틱샵 주인들.",
    images: ["/images/stone/011.webp", "/images/stone/012.webp"],
  },
];

/**
 * 트루스토리
 */
const truestoryArtworks: Artwork[] = [];

/**
 * 마하고니
 */
const mahagoniArtworks: Artwork[] = [];

/**
 * 이프 아이 워 유
 */
const ifIWereYouArtworks: Artwork[] = [
  {
    id: "if-i-were-you-001",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "찾았다! 내...",
    images: ["/images/if-i-were-you/001.webp"],
    music: null,
  },
  {
    id: "if-i-were-you-002",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "브리아노 패러디",
    images: [
      "/images/if-i-were-you/002.webp",
      "/images/if-i-were-you/003.webp",
    ],
    music: null,
  },
  {
    id: "if-i-were-you-004",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "죽은 사람이 매일밤 나를 찾아옵니다.",
    images: ["/images/if-i-were-you/004.webp"],
    music: null,
  },
  {
    id: "if-i-were-you-005",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "둘만의 세상",
    images: ["/images/if-i-were-you/005.webp"],
    music: null,
  },
  {
    id: "if-i-were-you-006",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "빛",
    images: ["/images/if-i-were-you/006.webp"],
    music: null,
  },
  {
    id: "if-i-were-you-007",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: `이 소설은 저 강물에 버려.
	깊은 곳에 빠뜨려서, 아무도 못 찾게 해.`,
    images: ["/images/if-i-were-you/007.webp"],
    music: {
      title: "안개",
      youtubeId: "RyCd1MCVp0E",
      start: 0,
    },
  },
  {
    id: "if-i-were-you-008",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "시작할까요, 선생님?",
    images: ["/images/if-i-were-you/008.webp"],
    music: null,
  },
  {
    id: "if-i-were-you-009",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "이 이야기의 결말",
    images: ["/images/if-i-were-you/009.webp"],
    music: null,
  },
  {
    id: "if-i-were-you-010",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "1945년, 눈이 내리는 취조실에서",
    images: ["/images/if-i-were-you/010.webp"],
    music: null,
  },
  {
    id: "if-i-were-you-011",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "아주 특별한 날",
    images: [
      "/images/if-i-were-you/011.webp",
      "/images/if-i-were-you/012.webp",
    ],
    music: null,
  },
  {
    id: "if-i-were-you-013",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "푸짐하고 거대하고 뚱쭝한 냥수현",
    images: ["/images/if-i-were-you/013.webp"],
    music: null,
  },
  {
    id: "if-i-were-you-014",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "쫑태 페어 후기 낙서",
    images: ["/images/if-i-were-you/014.webp"],
    music: null,
  },
  {
    id: "if-i-were-you-015",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "톰과 제리",
    images: [
      "/images/if-i-were-you/015.webp",
      "/images/if-i-were-you/016.webp",
    ],
    music: null,
  },
  {
    id: "if-i-were-you-017",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "이거 강인호 학대라고요",
    images: [
      "/images/if-i-were-you/017.webp",
      "/images/if-i-were-you/018.webp",
    ],
    music: null,
  },
  {
    id: "if-i-were-you-019",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "자네가, 나에게 와줘서 고맙네.",
    images: ["/images/if-i-were-you/019.webp"],
    music: null,
  },
  {
    id: "if-i-were-you-020",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "3작가3인호(햇수현 못사일 때)의 해외 예능 생존기",
    images: ["/images/if-i-were-you/020.webp"],
    music: null,
  },
  {
    id: "if-i-were-you-021",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "엔딩",
    images: ["/images/if-i-were-you/021.webp"],
    music: null,
  },
  {
    id: "if-i-were-you-022",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "같은 밤",
    images: ["/images/if-i-were-you/022.webp"],
    music: null,
  },
  {
    id: "if-i-were-you-023",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: `"タンタン、と鳴り響いた心の奥に溢れてた"`,
    images: ["/images/if-i-were-you/023.webp"],
    music: {
      title: "상상 포레스트",
      youtubeId: "0g5KxQJptf8",
      start: 0,
    },
  },
  {
    id: "if-i-were-you-026",
    musicalId: "if-i-were-you",
    year: 2024,
    createdAt: "2026-07-01",
    caption: "족족 인호 & 앵무 수현",
    images: [
      "/images/if-i-were-you/026.webp",
      "/images/if-i-were-you/027.webp",
      "/images/if-i-were-you/025.webp",
      "/images/if-i-were-you/024.webp",
    ],
    music: null,
  },
];
/**
 * 기타
 */
const etcArtworks: Artwork[] = [];

/**
 * 미드나잇
 */
const midnightArtworks: Artwork[] = [
  {
    id: "midnight-013",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: "도토리전자음의 악마(혹은 천사 그 사이 무엇 어쩌구)",
    images: ["/images/midnight/013.webp"],
  },
  {
    id: "midnight-014",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: `"감히 나에게 명령을 해?"`,
    images: ["/images/midnight/014.webp"],
  },
  {
    id: "midnight-015",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: `회개할 시간에, 선악과 하나 먹어!
- 단종매물 선악과`,
    images: ["/images/midnight/015.webp"],
  },
  {
    id: "midnight-016",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: "별이 다섯 개!",
    images: ["/images/midnight/016.webp"],
  },
  {
    id: "midnight-017",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!",
    images: ["/images/midnight/017.webp"],
  },
  {
    id: "midnight-018",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: "새해에는 죄악을... 와그작!",
    images: ["/images/midnight/018.webp"],
  },
  {
    id: "midnight-019",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: `웬만해선 인간들 사정을 좀 봐드리고 싶은데
이번 타락으로 저희 측도 손해를 많이 봐서요...`,
    images: ["/images/midnight/019.webp", "/images/midnight/020.webp"],
  },
  {
    id: "midnight-021",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: "문 밖에서 죽음이 다가오는 소리",
    images: ["/images/midnight/021.webp"],
  },
  {
    id: "midnight-023",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: "@SPRINGGIRLs_xx님 미드나잇 배경 사용",
    images: ["/images/midnight/022.webp", "/images/midnight/023.webp"],
  },
  {
    id: "midnight-024",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: `먼지 속에 공기 속에
햇빛 속에 모든 곳에`,
    images: ["/images/midnight/024.webp"],
  },
  {
    id: "midnight-025",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: `"왜 그렇게 생각하는지 전혀 모르겠네?"`,
    images: ["/images/midnight/025.webp"],
  },
  {
    id: "midnight-026",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: "세스코지터 할당량 달성!",
    images: ["/images/midnight/026.webp"],
  },
  {
    id: "midnight-027",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: "귀엽다시잖아!",
    images: ["/images/midnight/027.webp"],
  },
  {
    id: "midnight-028",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: "대령님 의사도 들어봐야 하나요?",
    images: ["/images/midnight/028.webp", "/images/midnight/029.webp"],
  },
  {
    id: "midnight-030",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: `왜 내가 여기에만 있을 거라고 생각하지?`,
    images: ["/images/midnight/030.webp"],
  },
  {
    id: "midnight-031",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: "빗속에 눈물은 다 씻어버려!",
    images: ["/images/midnight/031.webp"],
  },
  {
    id: "midnight-032",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: "天使",
    images: ["/images/midnight/032.webp"],
  },
  {
    id: "midnight-033",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: `너희는 모두 이리로 와,
내 살과 피를 받아 마셔라.`,
    images: ["/images/midnight/033.webp"],
  },
  {
    id: "midnight-034",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: "노래하고, 춤추고, 사랑합시다!",
    images: ["/images/midnight/034.webp"],
  },
  {
    id: "midnight-035",
    musicalId: "midnight",
    year: 2025,
    createdAt: "2026-06-30",
    caption: "home sweet home",
    images: ["/images/midnight/035.webp"],
  },
];

export const artworks: Artwork[] = [
  ...baekjakArtworks,
  ...stoneArtworks,
  ...truestoryArtworks,
  ...mahagoniArtworks,
  ...ifIWereYouArtworks,
  ...midnightArtworks,
  ...etcArtworks,
];
