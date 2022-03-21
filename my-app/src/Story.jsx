import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import data_json from "./raw_data";
import "./Story.css";
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
const Story = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const graph_viz = data_json.map((album, index)=>{
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
        <Radar data={album_data}
        id="chart"
        options={{ maintainAspectRatio: false }}
        />
        <br />
      </div>
    )
  })
  // <h3> {album["album"]}</h3>
  return (
    <>
      <header className="App-header">
       Taylor Swift Data Viz
      </header>
      <div className="section column 1989">
        <div className="full-graphic stick-middle">
          {graph_viz[0]}
        </div>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={0} key={0}>
            <div className="step-container skinny">
              <b>1989</b>
            </div>
          </Step>
          <Step data={1} key={1}>
            <div className="step-container skinny">
            red lips and rosy cheeks
            say you'll see me again
            even if it's just pretend
            </div>
          </Step>
        </Scrollama>
      </div>
      <div className="section column evermore">
        <div className="full-graphic stick-middle">
          {graph_viz[1]}
        </div>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={2} key={2}>
            <div className="step-container skinny">
              <b> evermore </b>
            </div>
          </Step>
          <Step data={3} key={3}>
            <div className="step-container skinny">
              crestfallen on the landing
              champagne problems
            </div>
          </Step>
        </Scrollama>
      </div>
      <div className="section column fearless">
        <div className="full-graphic stick-middle">
          {graph_viz[2]}
        </div>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={4} key={4}>
            <div className="step-container skinny">
              Fearless (Taylor's Version)
            </div>
          </Step>
          <Step data={5} key={5}>
            <div className="step-container skinny">
              you take my hand and drag me head first
              Fearless
            </div>
          </Step>
        </Scrollama>
      </div>
      <div className="section column folklore">
        <div className="full-graphic stick-middle">
          {graph_viz[3]}
        </div>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={6} key={6}>
            <div className="step-container skinny">
              folklore
            </div>
          </Step>
          <Step data={7} key={7}>
            <div className="step-container skinny">
              I want auroras and sad prose
              I want to watch wisteria grow right over my bare feet
            </div>
          </Step>
        </Scrollama>
      </div>
      <div className="section column lover">
        <div className="full-graphic stick-middle">
          {graph_viz[4]}
        </div>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={8} key={8}>
            <div className="step-container skinny">
              <b> Lover </b>
            </div>
          </Step>
          <Step data={9} key={9}>
            <div className="step-container skinny">
              I don't wanna think of anything else now that I thought of you
            </div>
          </Step>
        </Scrollama>
      </div>
      <div className="section column red">
        <div className="full-graphic stick-middle">
          {graph_viz[5]}
        </div>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={10} key={10}>
            <div className="step-container skinny">
              <b> Red </b>
            </div>
          </Step>
          <Step data={11} key={11}>
            <div className="step-container skinny">
              loving him is like driving a new Maserati down a dead-end street
            </div>
          </Step>
        </Scrollama>
      </div>
      <div className="section column reputation">
        <div className="full-graphic stick-middle">
          {graph_viz[6]}
        </div>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={12} key={12}>
            <div className="step-container skinny">
              reputation
            </div>
          </Step>
          <Step data={13} key={13}>
            <div className="step-container skinny">
              Is it chill that you're in my head?
              'Cause I know that it's delicate
            </div>
          </Step>
        </Scrollama>
      </div>
      <div className="section column TaylorSwift">
        <div className="full-graphic stick-middle">
          {graph_viz[7]}
        </div>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={14} key={14}>
            <div className="step-container skinny">
              Taylor Swift
            </div>
          </Step>
          <Step data={15} key={15}>
            <div className="step-container skinny">
            'Cause our song is the slamming screen door
            Sneakin' out late, tapping on his window
            </div>
          </Step>
        </Scrollama>
      </div>
    </>
  );
};

export default Story;
