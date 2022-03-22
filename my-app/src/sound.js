import React, {useState} from 'react';
import Sound from 'react-sound';

const PlaySound = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  return(
    <div>
      <Sound
      url="https://www.youtube.com/watch?v=e-ORhEE9VVg"
      playStatus={Sound.status.PLAYING}
      playFromPosition={300}
      onLoading={handleSongLoading}
      onPlaying={handleSongPlaying}
      handleSongFinishedPlaying={handleSongFinishedPlaying}
      />
    </div>

  )
}

export default PlaySound;
