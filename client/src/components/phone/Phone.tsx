import { forwardRef } from 'react';
import { ISong } from '../../types';
import './Phone.scss';

type IProps = {
  currSong: ISong | null;
  pauseMusic: () => void;
  isPlaying: boolean;
  changeVolumneMusic: (e: React.FormEvent<HTMLInputElement>) => void;
  changeDurationMusic: (e: React.FormEvent<HTMLInputElement>) => void;
};

export default forwardRef<HTMLInputElement, IProps>(function Phone(
  { currSong, pauseMusic, isPlaying, changeVolumneMusic, changeDurationMusic },
  ref
) {
  return (
    <div className="outside-border">
      <div className="silencer"></div>
      <div className="volume-up"></div>
      <div className="volume-down"></div>
      <div className="button-on"></div>
      <div className="inside-border">
        <div className="time">19:53</div>

        <div className="t-r-info">
          <div className="dots">...</div>
          <div className="battery">
            <div className="bar"></div>
            <div className="dot"></div>
          </div>
        </div>

        <div className="date">Tuesday, 9 August</div>

        <div className="button__wrapper">
          <button>
            <i className="bx bx-skip-previous"></i>
          </button>
          <button onClick={pauseMusic}>
            <i
              className={`bx bx-play-circle ${!isPlaying ? 'none' : 'flex'}`}
            ></i>
            <i
              className={`bx bx-pause-circle ${!isPlaying ? 'flex' : 'none'}`}
            ></i>
          </button>
          <button>
            <i className="bx bx-skip-next"></i>
          </button>
        </div>

        <div className="music__content__wrapper ">
          <div className={`music__content ${isPlaying ? 'rotate' : ''}`}>
            <img src={currSong?.img} alt="song1" />
          </div>

          <span>{currSong?.name}</span>
          <span>{currSong?.artist}</span>

          <div className="slider__wrapper">
            <i className="bx bxs-volume-low"></i>
            <input
              type="range"
              min={1}
              max={100}
              className="slider volumne__slider"
              onChange={changeVolumneMusic}
            />
            <i className="bx bxs-volume-full"></i>
          </div>

          <input
            type="range"
            min={1}
            max={100}
            className="slider length__slider"
            onChange={changeDurationMusic}
            ref={ref}
          />
        </div>

        <div className="bottom-line"></div>
      </div>
    </div>
  );
});
