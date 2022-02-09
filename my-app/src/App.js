import React from "react";
import data_json from "./raw_data";
import './App.css';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// 'rgba(255, 99, 132, 1)'
const all_albums_vis = data_json.map((album, index)=>{
  const album_data = {
    labels: ['danceability','energy','liveness','speechiness','acousticness'],
    datasets: [
      {
        label: '# of Votes',
        data: [album["danceability"], album["energy"], album["liveness"], album["speechiness"], album["acousticness"]],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#8a5066',
        borderWidth: 1,
      },
    ],
  };
  return(
    <div class="chart-wrapper">
    <h3> {album["album"]}</h3>
    <Radar data={album_data}
    id="chart"
    options={{ maintainAspectRatio: false }}
    />
    <br />
    </div>
  )
})

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
       Taylor Swift Data Viz
      </header>
      <body>
      <div>
      </div>
      {all_albums_vis}
      </body>
    </div>
  );
}
