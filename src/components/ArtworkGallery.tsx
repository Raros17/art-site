import { useMemo, useState } from "react";
import type { Artwork } from "../data/artworks";
import ArtworkCard from "./ArtworkCard";
import Lightbox from "./Lightbox";
import type { LightboxItem } from "./Lightbox";

type ArtworkGalleryProps = {
  artworks: Artwork[];
};

type GalleryImage = LightboxItem & {
  artworkId: string;
  imageIndex: number;
};

function ArtworkGallery({ artworks }: ArtworkGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const galleryImages = useMemo<GalleryImage[]>(() => {
    return artworks.flatMap(artwork =>
      artwork.images.map((image, imageIndex) => ({
        src: image,
        caption: artwork.caption,
        alt: artwork.caption || `artwork-${imageIndex + 1}`,
        artworkId: artwork.id,
        imageIndex,
      })),
    );
  }, [artworks]);

  if (artworks.length === 0) {
    return (
      <section className="artworkSection">
        <div className="sectionHeader">
          <p className="eyebrow">Gallery</p>
        </div>

        <p className="emptyText">아직 등록된 그림이 없습니다.</p>
      </section>
    );
  }

  return (
    <section className="artworkSection">
      <div className="sectionHeader">
        <p className="eyebrow">Gallery</p>
      </div>

      <div className="artworkList">
        {artworks.map(artwork => (
          <ArtworkCard
            artwork={artwork}
            key={artwork.id}
            onImageClick={imageIndex => {
              const globalIndex = galleryImages.findIndex(
                image =>
                  image.artworkId === artwork.id &&
                  image.imageIndex === imageIndex,
              );

              if (globalIndex !== -1) {
                setSelectedImageIndex(globalIndex);
              }
            }}
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <Lightbox
          items={galleryImages}
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onMove={setSelectedImageIndex}
        />
      )}
    </section>
  );
}

export default ArtworkGallery;
