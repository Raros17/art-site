import { Link, useParams } from "react-router";
import { musicals } from "../data/musicals";
import { artworks } from "../data/artworks";
import MusicalHero from "../components/MusicalHero";
import ArtworkGallery from "../components/ArtworkGallery";
import { useEffect } from "react";

function MusicalPage() {
  const { musicalId } = useParams();

  const musical = musicals.find(item => item.id === musicalId);
  useEffect(() => {
    if (!musical || !window.location.hash) return;

    const targetId = window.location.hash.replace("#", "");

    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 0);
  }, [musical, musicalId]);
  if (!musical) {
    return (
      <main className="page">
        <section className="detailHero">
          <Link to="/" className="backLink">
            ← Archive
          </Link>
          <h1>없는 페이지</h1>
          <p className="heroText">아직 등록되지 않은 뮤지컬입니다.</p>
        </section>
      </main>
    );
  }

  const musicalArtworks = artworks.filter(
    artwork => artwork.musicalId === musical.id,
  );

  return (
    <main className="page">
      <MusicalHero musical={musical} />
      <ArtworkGallery artworks={musicalArtworks} />
    </main>
  );
}

export default MusicalPage;
