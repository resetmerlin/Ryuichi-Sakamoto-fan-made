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
    pause();

    setCurrSong(song);

    musicRef.current = new Audio(`../${song?.music}`);
    play();
  };

  const pauseMusic = () => {
    if (musicRef.current.duration > 0 && !musicRef.current.paused) {
      pause();
    } else {
      play();
    }
  };

  /** Change volumn via input range */
  const changeVolumneMusic = (e: React.FormEvent<HTMLInputElement>) => {
    musicRef.current.volume = +e.currentTarget.value / 100;
  };

  /** Change duration via input range */
  const changeDurationMusic = (e: React.FormEvent<HTMLInputElement>) => {
    const seekTime = (musicRef.current.duration / 100) * +e.currentTarget.value;
    musicRef.current.currentTime = seekTime;
  };

  const goNextMusic = () => {
    musicRef.current.pause();
    const currIndex = musicLists.findIndex((element) => element === currSong);

    if (currIndex === musicLists.length - 1) {
      settingMusic(0);
    } else {
      const nextIndex = currIndex + 1;
      settingMusic(nextIndex);
    }
    musicRef.current.play();
  };

  const goPrevMusic = () => {
    musicRef.current.pause();
    const currIndex = musicLists.findIndex((element) => element === currSong);

    if (currIndex === 0) {
      const lastIndex = musicLists.length - 1;
      settingMusic(lastIndex);
    } else {
      const prevIndex = currIndex - 1;
      settingMusic(prevIndex);
    }
    musicRef.current.play();
  };

  const settingMusic = (index: number) => {
    setCurrSong(musicLists[index]);
    musicRef.current = new Audio(`../${musicLists[index]?.music}`);
  };

  const pause = () => {
    musicRef.current.pause();
    setIsPlaying(false);
  };

  const play = () => {
    musicRef.current.play();
    setIsPlaying(true);
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
