import { useRef, useState } from 'react';
import { Layout, Phone, Song, SongLists } from '../../components';
import { musicLists } from '../../lib';
import { ISong } from '../../types';

export default function SongPage() {
  const [currSong, setCurrSong] = useState<ISong | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const musicRef = useRef(new Audio());
  const durationToggleRef = useRef<HTMLInputElement | null>(null);

  const playMusic = (song: ISong) => {
    if (durationToggleRef.current) durationToggleRef.current.value = '0';
    musicRef.current.pause();
    setIsPlaying(false);

    setCurrSong(song);

    musicRef.current = new Audio(`../${song?.music}`);
    musicRef.current.play();
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    if (musicRef.current.duration > 0 && !musicRef.current.paused) {
      musicRef.current.pause();
      setIsPlaying(false);
    } else {
      musicRef.current.play();
      setIsPlaying(true);
    }
  };

  const changeVolumneMusic = (e: React.FormEvent<HTMLInputElement>) => {
    musicRef.current.volume = +e.currentTarget.value / 100;
  };

  const changeDurationMusic = (e: React.FormEvent<HTMLInputElement>) => {
    const seekTime = (musicRef.current.duration / 100) * +e.currentTarget.value;

    musicRef.current.currentTime = seekTime;
  };

  const goNextMusic = () => {
    musicRef.current.pause();
    const currIndex = musicLists.findIndex((element) => element === currSong);

    if (currIndex === musicLists.length - 1) {
      setCurrSong(musicLists[0]);
      musicRef.current = new Audio(`../${musicLists[0]?.music}`);
    } else {
      setCurrSong(musicLists[currIndex + 1]);
      musicRef.current = new Audio(`../${musicLists[currIndex + 1]?.music}`);
    }
    musicRef.current.play();
  };

  const goPrevMusic = () => {
    musicRef.current.pause();
    const currIndex = musicLists.findIndex((element) => element === currSong);

    if (currIndex === 0) {
      setCurrSong(musicLists[musicLists.length - 1]);
      musicRef.current = new Audio(
        `../${musicLists[musicLists.length - 1]?.music}`
      );
    } else {
      setCurrSong(musicLists[currIndex - 1]);
      musicRef.current = new Audio(`../${musicLists[currIndex - 1]?.music}`);
    }
    musicRef.current.play();
  };

  return (
    <Layout>
      <Song.Section>
        <SongLists songs={musicLists} playMusic={playMusic} />
        <Phone
          currSong={currSong}
          pauseMusic={pauseMusic}
          isPlaying={isPlaying}
          changeVolumneMusic={changeVolumneMusic}
          changeDurationMusic={changeDurationMusic}
          ref={durationToggleRef}
          goNextMusic={goNextMusic}
          goPrevMusic={goPrevMusic}
        />
      </Song.Section>
    </Layout>
  );
}
