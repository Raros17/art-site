import { Link } from "react-router";
import type { Musical } from "../data/musicals";
import { artworks } from "../data/artworks";

type MusicalHeroProps = {
  musical: Musical;
};

function MusicalHero({ musical }: MusicalHeroProps) {
  const pieceCount = artworks
    .filter(artwork => artwork.musicalId === musical.id)
    .reduce((total, artwork) => total + artwork.images.length, 0);

  return (
    <section className="detailHero">
      <Link to="/" className="backLink">
        ← Archive
      </Link>

      <p className="eyebrow">
        {musical.number} · {musical.englishTitle}
      </p>

      <h1>{musical.title}</h1>

      <p className="heroText">{musical.description}</p>

      <div className="detailMeta">
        <span>
          {pieceCount} {pieceCount === 1 ? "piece" : "pieces"}
        </span>
        <span>{musical.years.join(" / ")}</span>
        <span>{musical.mood}</span>
      </div>
    </section>
  );
}

export default MusicalHero;
