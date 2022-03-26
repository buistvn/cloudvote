import React from 'react';
import './About.css';

const About = (props) => {
    return (
        <div className="aboutWrapper">
            <div className="aboutPage">
                <div className="divider"></div>
                <div className="introductionSection">
                    <div className="introductionContext">
                        <h1>CLOUDVOTE</h1>
                        <p>A fast and easy way to share your thoughts</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="textSection">
                    <div className="textBox">
                        <p>
                            Cloudvote is an interactive voting website that
                            allows users to create measures and proposals for
                            issues that they care about. Simply create a measure
                            in the "Propose a Measure" tab, write down your
                            issue, give it a description, and then click submit!
                            You'll be able to both vote on your own measures,
                            and see how others have voted. But be fast——measures
                            expire after a limited amount of time. So get to it!
                        </p>
                    </div>
                </div>
                <div className="featureSection">
                    <div className="featureContainer">
                        <div className="featureBox">
                            <div className="featureImage">
                                <svg
                                    className="bi bi-text-left"
                                    width="64"
                                    height="64"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                                    />
                                </svg>
                            </div>
                            <div className="featureContext">
                                <h3>Propose a measure</h3>
                                <p>
                                    Within seconds, users can create their own
                                    measures and publish them to the site for
                                    others to see
                                </p>
                            </div>
                        </div>
                        <div className="featureBox">
                            <div className="featureImage">
                                <svg
                                    className="bi bi-eye-fill"
                                    width="64"
                                    height="64"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                                    />
                                </svg>
                            </div>
                            <div className="featureContext">
                                <h3>View other proposals</h3>
                                <p>
                                    You'll have the opportunity to see and vote
                                    on topics that other users have come up with
                                </p>
                            </div>
                        </div>
                        <div className="featureBox">
                            <div className="featureImage">
                                <svg
                                    className="bi bi-bar-chart-fill"
                                    width="64"
                                    height="64"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        width="4"
                                        height="5"
                                        x="1"
                                        y="10"
                                        rx="1"
                                    />
                                    <rect
                                        width="4"
                                        height="9"
                                        x="6"
                                        y="6"
                                        rx="1"
                                    />
                                    <rect
                                        width="4"
                                        height="14"
                                        x="11"
                                        y="1"
                                        rx="1"
                                    />
                                </svg>
                            </div>
                            <div className="featureContext">
                                <h3>See live results</h3>
                                <p>
                                    After casting your own vote on a certain
                                    topic, you'll be able to see how others have
                                    responded
                                </p>
                            </div>
                        </div>
                        <div className="featureBox">
                            <div className="featureImage">
                                <svg
                                    className="bi bi-clock-history"
                                    width="64"
                                    height="64"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
                                    />
                                </svg>
                            </div>
                            <div className="featureContext">
                                <h3>Keep ideas fresh</h3>
                                <p>
                                    Measures are designed to expire after 24
                                    hours so that users will get to interact
                                    with recent topics
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
