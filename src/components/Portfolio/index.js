import React from 'react';
import gamer from '../../assets/cover/GrubbyLogo.png'
import run from '../../assets/cover/run-buddy.png'
import meeting from '../../assets/cover/digital-marketing-meeting.jpg'

function Portfolio() {
    return (
        <section id="portfolio" >
            <h2>Portfolio </h2>
            <div class="work-grid-container">
                <a href="https://project-sticky-bandits.github.io/The-Grubby-Gamer/" class="Sub-My-Food grid-item">
                    <div>
                        <h3>The Grubby Gamer</h3>
                        <img src={gamer} className="" style={{ width: "25%", maxHeight: "350px" }} alt="gamer" />
                    </div>
                    <span>HTML/CSS/JavaScript/APIs</span>

                </a>

                <div>
                    <a href="https://astribli.github.io/run-buddy/" class="Run-Buddy grid-item">
                        <div>
                            <h3>Run Buddy</h3>
                            <img src={run} className="" style={{ width: "25%", maxHeight: "350px" }} alt="gamer" />
                        </div>
                        <div>
                            <span>HTML/CSS</span>
                        </div>
                    </a>
                </div>

                <div>
                    <a href="https://astribli.github.io/horiseon-challenge1/" class="Horiseon grid-item">
                        <div>
                            <h3>Horiseon</h3>
                            <img src={meeting} className="" style={{ width: "25%", maxHeight: "350px" }} alt="people working" />
                        </div>
                        <div>
                        <span>HTML/CSS</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;