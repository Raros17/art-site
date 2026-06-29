import { useEffect, useRef, useState } from "react";

type MusicPlayerProps = {
  title: string;
  youtubeId: string;
  start?: number;
};

type YoutubePlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  destroy: () => void;
};

type YoutubeApi = {
  Player: new (
    elementId: string,
    options: {
      videoId: string;
      width: number;
      height: number;
      playerVars: {
        start: number;
        controls: number;
        modestbranding: number;
        rel: number;
      };
      events: {
        onReady: () => void;
        onStateChange: (event: { data: number }) => void;
      };
    },
  ) => YoutubePlayer;
  PlayerState: {
    PLAYING: number;
    PAUSED: number;
    ENDED: number;
  };
};

declare global {
  interface Window {
    YT?: YoutubeApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}

function loadYouTubeApi() {
  if (window.YT?.Player) {
    return Promise.resolve(window.YT);
  }

  return new Promise<YoutubeApi>(resolve => {
    const existingScript = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]',
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    }

    window.onYouTubeIframeAPIReady = () => {
      resolve(window.YT!);
    };
  });
}

function MusicPlayer({ title, youtubeId, start = 0 }: MusicPlayerProps) {
  const [playerElementId] = useState(
    () => `youtube-player-${crypto.randomUUID()}`,
  );
  const playerRef = useRef<YoutubePlayer | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let isMounted = true;

    loadYouTubeApi().then(YT => {
      if (!isMounted) return;

      playerRef.current = new YT.Player(playerElementId, {
        videoId: youtubeId,
        width: 200,
        height: 200,
        playerVars: {
          start,
          controls: 0,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: () => {
            if (isMounted) {
              setIsReady(true);
            }
          },
          onStateChange: event => {
            if (event.data === YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            }

            if (
              event.data === YT.PlayerState.PAUSED ||
              event.data === YT.PlayerState.ENDED
            ) {
              setIsPlaying(false);
            }
          },
        },
      });
    });

    return () => {
      isMounted = false;
      playerRef.current?.destroy();
    };
  }, [youtubeId, start, playerElementId]);

  const handleTogglePlay = () => {
    if (!playerRef.current || !isReady) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <div className="compactMusicPlayer">
      <div className="hiddenYoutubePlayer">
        <div id={playerElementId} />
      </div>

      <button
        className="compactMusicButton"
        type="button"
        onClick={handleTogglePlay}
        disabled={!isReady}
      >
        <span className="musicIcon">{isPlaying ? "Ⅱ" : "▶"}</span>

        <span className="musicText">
          <span className="musicTitle">{title}</span>
        </span>

        <span className="musicSource">YouTube</span>
      </button>
    </div>
  );
}

export default MusicPlayer;
