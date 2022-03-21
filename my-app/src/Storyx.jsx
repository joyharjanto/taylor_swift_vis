import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import "./Story.css";
import originalBechdel from "./images/original-bechdel.png";
import behindCamera from "./images/behind-the-camera.png";
import intersectional from "./images/intersectional.png";
import compiledList from "./images/compiled-list.png";

const Story = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <>
      <h1>Practice with Scrollama !!! 🦙</h1>
      <h2>A walkthrough of FiveThirtyEight's "The New Bechdel Test"</h2>
      <p>Made with 💙 by Michelle</p>

      <div className="step-counter">Step # {currentStepIndex}</div>

      <div className="section">
        <div className="scroller">
          <Scrollama onStepEnter={onStepEnter}>
            <Step data={1} key={1}>
              <div className="step-container">
                In 2016, FiveThirtyEight wrote an{" "}
                <a
                  href="https://projects.fivethirtyeight.com/next-bechdel/"
                  target="_"
                >
                  essay
                </a>{" "}
                about the Bechdel Test, which asks two simple questions of a
                movie:
                <ol>
                  <li>Does it have at least 2 named female characters?</li>
                  <li>
                    And do those characters have at least one conversation that
                    is not about a man?
                  </li>
                </ol>
              </div>
            </Step>
            <Step data={2} key={2}>
              <div className="step-container">
                They took the top 50 movies of 2016 evaluated them using the
                Bechdel Test.
              </div>
            </Step>
            <Step data={3} key={3}>
              <div className="step-container">
                I like the simple dot visualization (when you hover over them,
                it shows you what movie it represents).
              </div>
            </Step>
          </Scrollama>
        </div>

        <div className="half-graphic">
          <img src={originalBechdel} className="image" />
        </div>
      </div>

      <div className="section column">
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={4} key={4}>
            <div className="step-container skinny">
              But then they took it further. They then reached out to over a
              dozen women in film/television and asked them:{" "}
              <strong>What does the next Bechdel Test look like?</strong> They
              created a bunch of new tests based on different criteria having to
              do with gender equity.
            </div>
          </Step>
        </Scrollama>

        <div className="full-graphic">
          <img src={behindCamera} className="image" />
        </div>

        <Scrollama onStepEnter={onStepEnter}>
          <Step data={5} key={5}>
            <div className="step-container skinny">
              They evaluated the same top 50 movies of 2016, which did decently
              on some tests, and super horribly on others (like this one).
            </div>
          </Step>
          <Step data={6} key={6}>
            <div className="step-container skinny">
              The tests are broken into categories. This one falls under "Tests
              that look behind the camera."
            </div>
          </Step>
        </Scrollama>
      </div>

      <div className="section column">
        <div className="full-graphic">
          <img src={intersectional} className="image" />
        </div>

        <Scrollama onStepEnter={onStepEnter}>
          <Step data={7} key={7}>
            <div className="step-container skinny no-top-margin">
              Here's one from the category "Tests that look beyond white women."
            </div>
          </Step>
        </Scrollama>
      </div>

      <div className="section column">
        <div className="full-graphic stick-middle">
          <img src={compiledList} className="image" />
        </div>

        <Scrollama onStepEnter={onStepEnter}>
          <Step data={8} key={8}>
            <div className="step-container skinny">
              At the end, they compiled all the tests and showed how each movie
              performed overall.
            </div>
          </Step>
          <Step data={9} key={9}>
            <div className="step-container skinny">
              The movies are sorted by how many tests they passed, so the ones
              we see here performed the best overall.
            </div>
          </Step>
        </Scrollama>
      </div>

      <div className="section column">
        <h2 className="conclusion-header">In conclusion...</h2>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={10} key={10}>
            <div className="step-container skinny no-top-margin">
              I love how this piece expanded my understanding of what goes into
              making movies that empower women.
            </div>
          </Step>
          <Step data={11} key={11}>
            <div className="step-container skinny">
              Everyone's always talking about having more female protagonists,
              but I hadn't thought about the effect of having a diverse
              supporting cast or a diverse crew.
            </div>
          </Step>
          <Step data={12} key={12}>
            <div className="step-container skinny">Thanks for reading! 🎬</div>
          </Step>
        </Scrollama>
      </div>
    </>
  );
};

export default Story;
