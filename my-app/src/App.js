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

export const nineteen_eighteen = {
  labels: ['danceability','energy','liveness','speechiness','acousticness'],
  datasets: [
    {
      label: 'score',
      data: [0.62, 0.7, 0.16, 0.7, 0.14],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

export const evermore = {
  labels: ['danceability','energy','liveness','speechiness','acousticness'],
  datasets: [
    {
      label: '# of Votes',
      data: [0.53, 0.49, 0.11, 0.06, 0.79],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const album_data = {
  labels: ['danceability','energy','liveness','speechiness','acousticness'],
  datasets: [
    {
      label: '# of Votes',
      data: [data_json[0]["danceability"], data_json[0]["energy"], data_json[0]["liveness"], data_json[0]["speechiness"], data_json[0]["acousticness"]],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const all_albums_vis = data_json.map((album, index)=>{
  const album_data = {
    labels: ['danceability','energy','liveness','speechiness','acousticness'],
    datasets: [
      {
        label: '# of Votes',
        data: [album["danceability"], album["energy"], album["liveness"], album["speechiness"], album["acousticness"]],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
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


// <h3> 1989 </h3>
// <div class="chart-container-aa">
// <Radar data={nineteen_eighteen}
// id="chart"
// height="400px"
// options={{ maintainAspectRatio: false }} />
// </div>
// </div>
// <div>
// <h3> evermore </h3>
// <div class="chart-container-bb">
// <Radar data={evermore}
// id="chart"
// height="400px"
// options={{ maintainAspectRatio: false }} />
// </div>
