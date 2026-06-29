import { useEffect } from "react";

export type LightboxItem = {
  src: string;
  caption: string;
  alt: string;
};

type LightboxProps = {
  items: LightboxItem[];
  currentIndex: number;
  onClose: () => void;
  onMove: (nextIndex: number) => void;
};

function Lightbox({ items, currentIndex, onClose, onMove }: LightboxProps) {
  const currentItem = items[currentIndex];
  const hasMultipleImages = items.length > 1;

  const movePrev = () => {
    const nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onMove(nextIndex);
  };

  const moveNext = () => {
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onMove(nextIndex);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft" && hasMultipleImages) {
        movePrev();
      }

      if (event.key === "ArrowRight" && hasMultipleImages) {
        moveNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, hasMultipleImages, items.length]);

  if (!currentItem) {
    return null;
  }

  return (
    <div className="lightboxOverlay" onClick={onClose}>
      <button className="lightboxClose" type="button" onClick={onClose}>
        ×
      </button>

      {hasMultipleImages && (
        <button
          className="lightboxArrow lightboxArrowLeft"
          type="button"
          onClick={event => {
            event.stopPropagation();
            movePrev();
          }}
        >
          ‹
        </button>
      )}

      <div
        className="lightboxContent"
        onClick={event => event.stopPropagation()}
      >
        <img src={currentItem.src} alt={currentItem.alt} />

        <div className="lightboxCaption">
          <span>{currentItem.caption}</span>
          <span>
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>

      {hasMultipleImages && (
        <button
          className="lightboxArrow lightboxArrowRight"
          type="button"
          onClick={event => {
            event.stopPropagation();
            moveNext();
          }}
        >
          ›
        </button>
      )}
    </div>
  );
}

export default Lightbox;
