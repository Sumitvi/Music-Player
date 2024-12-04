import React, { useEffect, useState } from 'react';

const LastFmApp = () => {
  const [tracks, setTracks] = useState([]);
  const [artistName, setArtistName] = useState('Adele');
  const apiKey = process.env.REACT_APP_LASTFM_API_KEY;  // Access from .env file

  useEffect(() => {
    const fetchTopTracks = async () => {
      // URL to get top tracks for the artist
      const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName}&api_key=${apiKey}&format=json`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setTracks(data.toptracks.track);
      } catch (error) {
        console.error('Error fetching Last.fm data:', error);
      }
    };

    fetchTopTracks();
  }, [artistName]);

  return (
    <div>
      <h1>Top Tracks for {artistName}</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.name}>
            {track.name} - {track.artist.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastFmApp;
