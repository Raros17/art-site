import { useParams } from "react-router";
import { musicals } from "../data/musicals";
import { artworks } from "../data/artworks";
import MusicalHero from "../components/MusicalHero";
import ArtworkGallery from "../components/ArtworkGallery";
import PasswordGate from "../components/PasswordGate";

const privatePagePasswords: Record<string, string> = {
  "if-i-were-you": "xoxo",
};

function MusicalPage() {
  const { musicalId } = useParams();

  const musical = musicals.find(item => item.id === musicalId);

  if (!musical || !musicalId) {
    return (
      <main className="page">
        <p>존재하지 않는 페이지입니다.</p>
      </main>
    );
  }

  const musicalArtworks = artworks
    .filter(artwork => artwork.musicalId === musical.id)
    .sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;

      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  const pageContent = (
    <main className="page">
      <MusicalHero musical={musical} />
      <ArtworkGallery artworks={musicalArtworks} />
    </main>
  );

  const password = privatePagePasswords[musicalId];

  if (password) {
    return (
      <PasswordGate
        pageId={musicalId}
        password={password}
        title={musical.title}
      >
        {pageContent}
      </PasswordGate>
    );
  }

  return pageContent;
}

export default MusicalPage;
