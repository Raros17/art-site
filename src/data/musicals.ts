export type Musical = {
  id: string;
  number: string;
  title: string;
  englishTitle: string;
  description: string;
  years: string[];
  mood: string;
  coverImage?: string;
};

export const musicals: Musical[] = [
  {
    id: "baekjak",
    number: "01",
    title: "백작",
    englishTitle: "The Count",
    description: "오래 기다려왔어, 너를 기다려왔어",
    years: ["2026", "2025"],
    mood: "Vampire · Castle · Eternal",
    coverImage: "/images/covers/baekjak.jpg",
  },
  {
    id: "truestory",
    number: "02",
    title: "트루스토리",
    englishTitle: "True Story",
    description: "그리움이란 이런 거야",
    years: ["2026"],
    mood: "Mask · Longing · Truth",
    coverImage: "/images/covers/truestory.jpg",
  },
  {
    id: "stone",
    number: "03",
    title: "스톤",
    englishTitle: "The Stone",
    description: "이건 내 얘긴데",
    years: ["2026"],
    mood: "Road · Freedom · Stone",
    coverImage: "/images/covers/stone.jpg",
  },
  {
    id: "mahagoni",
    number: "04",
    title: "마하고니",
    englishTitle: "Mahagoni",
    description: "어서 와요 나의 낙원에",
    years: ["2025"],
    mood: "E · S · F · D",
    coverImage: "/images/covers/mahagoni.jpg",
  },
  {
    id: "if-i-were-you",
    number: "05",
    title: "이프아이월유",
    englishTitle: "If I Were You",
    description: "무명자의 시",
    years: ["2025"],
    mood: "Murder · Manuscript · Revenge",
    coverImage: "/images/covers/ifiiwy.jpg",
  },
  {
    id: "etc",
    number: "06",
    title: "기타",
    englishTitle: "ETC",
    description: "-",
    years: ["2025"],
    mood: "ETC",
    coverImage: "/images/covers/etc.jpg",
  },
  {
    id: "midnight",
    number: "07",
    title: "미드나잇",
    englishTitle: "Midmight",
    description: "그날이 찾아왔어",
    years: ["2026"],
    mood: "11:59 · Sin · Choice",
    coverImage: "/images/covers/",
  },
];
