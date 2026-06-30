export type Artwork = {
  id: string;
  musicalId: string;
  year: string;
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
    year: "2026",
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
    year: "2026",
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
    year: "2026",
    createdAt: "2026-06-30",
    caption: `그때!
	한 우주가
	바다에 뛰어 들었습니다.`,
    images: ["/images/stone/001.webp", "/images/stone/003.webp"],
  },
  {
    id: "stone-002",
    musicalId: "stone",
    year: "2026",
    createdAt: "2026-06-30",
    caption: "얼굴이 없는 이방인",
    images: ["/images/stone/002.webp"],
  },
  {
    id: "stone-004",
    musicalId: "stone",
    year: "2026 - LSH 콘서트에서",
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
    year: "2026 - LSH 콘서트에서",
    createdAt: "2026-06-30",
    caption: `어느 낯선 타지에서
	우연한 발견`,
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
    year: "2026 - LSH 콘서트에서",
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
    year: "2026",
    createdAt: "2026-06-30",
    caption: "같은 지옥에서 나뒹구는 행위",
    images: ["/images/stone/007.webp"],
  },
  {
    id: "stone-008",
    musicalId: "stone",
    year: "2026",
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
    year: "2026",
    createdAt: "2026-06-30",
    caption: `사라지는 건가? 
	가라앉는 거지.`,
    images: ["/images/stone/009.webp"],
  },
  {
    id: "stone-010",
    musicalId: "stone",
    year: "2026",
    createdAt: "2026-06-30",
    caption: "꿈속에도 출구 없는 용광로",
    images: ["/images/stone/010.webp"],
  },
  {
    id: "stone-011",
    musicalId: "stone",
    year: "2026",
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
 * 이프아이월유
 */
const ifIWereYouArtworks: Artwork[] = [];

/**
 * 기타
 */
const etcArtworks: Artwork[] = [];

export const artworks: Artwork[] = [
  ...baekjakArtworks,
  ...stoneArtworks,
  ...truestoryArtworks,
  ...mahagoniArtworks,
  ...ifIWereYouArtworks,
  ...etcArtworks,
];
