import React from "react";
import "./WorkProcess.css";
import WorkProcessVid from "../../assets/videos/business1.mp4";
// import { ControlBar, Player, PlayToggle } from 'video-react';
import 'video-react/dist/video-react.css';
import ReactPlayer from 'react-player'

const WorkProcess = () => {
    return (
        <div id="process" className="workprocess section__padding">
            <div className="container">
                <div className="workprocess__content text__center">
                    <h2 className="section__title text__cap">Our work process</h2>
                    <p className="para__text">
                    "We believe in keeping our work progress transparent and results-oriented. With utmost dedication, we continue to innovate and move forward, ensuring that each step taken brings success to your project. Monitor our developments at every stage, as your satisfaction remains our top priority."
                    </p>

                    <div className="player-wrapper">
                        {/* <Player autoPlay loop src = {WorkProcessVid}>
                            <ControlBar autoHide = {false} disableDefaultControls = {true}>
                                <PlayToggle />
                            </ControlBar>
                        </Player> */}
                        <ReactPlayer
                            className='react-player'
                            url={WorkProcessVid}
                            controls
                            
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkProcess;