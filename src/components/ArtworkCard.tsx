import type { Artwork } from "../data/artworks";
import MusicPlayer from "./MusicPlayer";

type ArtworkCardProps = {
  artwork: Artwork;
  onImageClick: (imageIndex: number) => void;
};

function ArtworkCard({ artwork, onImageClick }: ArtworkCardProps) {
  const isSeries = artwork.images.length > 1;

  return (
    <article
      id={artwork.id}
      className={`artworkCard ${isSeries ? "series" : ""}`}
    >
      <div className={isSeries ? "seriesImages" : "singleImage"}>
        {artwork.images.map((image, index) => (
          <button
            className="artworkImageButton"
            type="button"
            key={`${artwork.id}-${index}`}
            onClick={() => onImageClick(index)}
          >
            <img src={image} alt={artwork.caption} />
          </button>
        ))}
      </div>

      <div className="artworkInfo">
        <p className="artworkYear">{artwork.year}</p>
        {isSeries && (
          <p className="seriesLabel">SERIES · {artwork.images.length} PIECES</p>
        )}
        <div className="speechBubble">{artwork.caption}</div>

        {artwork.music && (
          <MusicPlayer
            title={artwork.music.title}
            youtubeId={artwork.music.youtubeId}
            start={artwork.music.start}
          />
        )}
      </div>
    </article>
  );
}

export default ArtworkCard;
