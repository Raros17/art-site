import { Link } from "react-router";
import { musicals } from "../data/musicals";
import { artworks } from "../data/artworks";
import RecentArtworks from "../components/RecentArtworks";

function HomePage() {
  const getPieceCount = (musicalId: string) => {
    return artworks
      .filter(artwork => artwork.musicalId === musicalId)
      .reduce((total, artwork) => total + artwork.images.length, 0);
  };
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Personal Archive · Musical Fanart Gallery</p>
        <h1>
          Musical
          <br />
          Archive
        </h1>

        <p className="heroText">
          에그 @vakegg
          <br />
          Since 2023
        </p>

        <div className="heroActions">
          <a href="#index" className="primaryButton">
            목차 보기
          </a>
          <a href="#recent" className="ghostButton">
            최근 그림
          </a>
        </div>
      </section>

      <section id="index" className="indexSection">
        <div className="sectionHeader">
          <p className="eyebrow">Index</p>
        </div>

        <div className="musicalGrid">
          {musicals.map(musical => (
            <Link
              className="musicalCard"
              to={`/musicals/${musical.id}`}
              key={musical.id}
            >
              {musical.coverImage && (
                <div className="musicalCardCover">
                  <img
                    src={musical.coverImage}
                    alt={`${musical.title} 대표 이미지`}
                  />
                </div>
              )}

              <div className="cardTop">
                <span>{musical.number}</span>
                <span>{getPieceCount(musical.id)} pieces</span>
              </div>

              <div className="musicalCardBody">
                <p className="cardMood">{musical.mood}</p>
                <h3>{musical.title}</h3>
                <p>{musical.description}</p>
              </div>

              <div className="yearList">
                {musical.years.map(year => (
                  <span key={year}>{year}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <RecentArtworks />
    </main>
  );
}

export default HomePage;
