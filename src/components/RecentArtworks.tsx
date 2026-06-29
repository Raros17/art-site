import { Link } from "react-router";
import { artworks } from "../data/artworks";
import { musicals } from "../data/musicals";

function RecentArtworks() {
  const recentArtworks = [...artworks]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 3);

  return (
    <section id="recent" className="recentSection">
      <div className="sectionHeader">
        <p className="eyebrow">Recently Added</p>
        <h2>최근 추가된 그림</h2>
      </div>

      <div className="recentArtworkGrid">
        {recentArtworks.map(artwork => {
          const musical = musicals.find(item => item.id === artwork.musicalId);
          const thumbnail = artwork.images[0];

          return (
            <Link
              className="recentArtworkCard"
              to={`/musicals/${artwork.musicalId}#${artwork.id}`}
              key={artwork.id}
            >
              <div className="recentArtworkImage">
                <img src={thumbnail} alt={artwork.caption} />
              </div>

              <div className="recentArtworkInfo">
                <p className="recentArtworkMeta">
                  {musical?.title ?? "Unknown"} · {artwork.year}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default RecentArtworks;
