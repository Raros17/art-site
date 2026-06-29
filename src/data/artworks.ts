export type Artwork = {
  id: string;
  musicalId: string;
  year: number;
  caption: string;
  createdAt: string;
  images: string[];
  music?: {
    title: string;
    youtubeId: string;
    start?: number;
  } | null;
};

export const artworks: Artwork[] = [
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
  {
    id: "baekjak-series-001",
    musicalId: "baekjak",
    year: 2026,
    createdAt: "2026-06-27",
    caption:
      "이 두 장은 같은 장면의 앞뒤처럼 이어지는 연작. 첫 장은 기다림, 두 번째 장은 마주친 순간.",
    images: ["/images/baekjak/002.png", "/images/baekjak/001.jpg"],
  },
];
