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
      <div className="chart-wrapper">
        <Radar data={album_data}
        id="chart"
        options={{ maintainAspectRatio: false }}
        />
        {console.log(album_data)}
        <br />
      </div>
    )
  })
  return (
    <>
      <header className="App-header">
       <h2> An Overview of Taylor Swift's Albums !!</h2>
       <div> <a href ="https://twitter.com/JoyHarjanto">by: Joy Harjanto </a></div>

      </header>
      <div className="section column 1989">
        <div className="full-graphic stick-middle">
          {graph_viz[0]}
        </div>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={0} key={0}>
            <div className="step-container skinny">
              1989
            </div>
          </Step>
        </Scrollama>
      </div>
      <div className="section 1989pt2">
        <div className="scroller">
        <Scrollama onStepEnter={onStepEnter}>
        <Step data={2} key={2}>
          <div className="step-container">
            red lips and rosy cheeks
            say you'll see me again
            even if it's just in your wildest dreams
          </div>
        </Step>
        </Scrollama>
        </div>
        <div className="half-graphic">
          <img src="https://media.giphy.com/media/1mYA57VOSC7C0/giphy.gif" />
        </div>
      </div>
      <div className="section column evermore">
        <div className="full-graphic stick-middle">
          {graph_viz[1]}
        </div>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={2} key={2}>
            <div className="step-container skinny">
              evermore
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

        </Scrollama>
      </div>
      <div className="section fearlesspt2">
      <div className="half-graphic">
      <img src ="https://media.giphy.com/media/3o6gg2VslsUCY1rcLS/giphy.gif"/>
      </div>
        <div className="scroller">
        <Scrollama onStepEnter={onStepEnter}>
        <Step data={5} key={5}>
          <div className="step-container">
          you take my hand and drag me head first
          fearless
          </div>
        </Step>
        </Scrollama>
        </div>
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
              Lover
            </div>
          </Step>
        </Scrollama>
      </div>
      <div className="section loverpt2">
      <div className="half-graphic">
        <img src ="https://media.giphy.com/media/dAcePXakSsiRzvdUEf/giphy.gif"/>
      </div>
        <div className="scroller">
        <Scrollama onStepEnter={onStepEnter}>
        <Step data={9} key={9}>
          <div className="step-container">
          I don't wanna think of anything else now that I thought of you
          </div>
        </Step>
        </Scrollama>
        </div>
      </div>
      <div className="section column red">
        <div className="full-graphic stick-middle">
          {graph_viz[5]}
        </div>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={10} key={10}>
            <div className="step-container skinny">
              Red
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
        </Scrollama>
      </div>
      <div className="section reputation2">
        <div className="scroller">
        <Scrollama onStepEnter={onStepEnter}>
        <Step data={13} key={13}>
          <div className="step-container">
          Is it chill that you're in my head?
          'Cause I know that it's delicate
        </div>
        </Step>
        </Scrollama>
        </div>
        <div className="half-graphic">
        <iframe src="https://giphy.com/embed/LP5FLyAK0pr43qMSuH"
        width="480"
        height="232"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen/>
        </div>
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
      <div className="App-header">
      <div className="end-text">
        How I made this:
        I used R + React + chartJS + scrollama. This is my first time using all three tools :D
        inspired by this <a href ="https://mmcghee18.github.io/harry-potter-spells/">project </a>.
        Dataset is from  <a href ="https://taylor.wjakethompson.com/"> here</a>.
        also made possible by my lovely boyfriend who forced me to stop procrastinating and finish this in one sitting. ily hehe
      </div>
      </div>
    </>
  );
};

export default Story;
