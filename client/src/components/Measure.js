import './Measure.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// 6)
// Basic yes, no options along with the description
// of the measure being voted on exists here.
// What has not been done is, after the vote has been
// cast, navigate the user back to the voting page
// so the user has an idea of what is happening,
// preventing any sort of confusion.
//
// Stil to do for documentation:
// - update the server documentation.
// It will be helpful for now to pay attention to
// the api calls and navigate through the code
// using the function names that are used for
// authentication in server/(verifyToken, router/auth, routes/vote)

const Measure = (props) => {
    const currDate = new Date().getTime();
    const endDate = new Date(props.data.endDate).getTime();
    const [counter, setCounter] = useState(currDate);
    const [votingOver, endVoting] = useState(false);
    const [yays, setYays] = useState(props.yeses);
    const [nays, setNays] = useState(props.nos);
    const myDate = new Date(props.data.endDate);
    var m = myDate.getMonth();
    var d = myDate.getDay();
    var y = myDate.getFullYear();
    var h = myDate.getUTCHours();
    var mi = myDate.getMinutes();

    h = h % 12;
    if (h === 0) {
        h = 12;
    }

    if (mi < 10) {
        mi = '0' + mi;
    }

    const getDayTime = (hour) => {
        if (hour > 12) {
            return 'PM';
        } else {
            return 'AM';
        }
    };

    var fulldate =
        m + '/' + d + '/' + y + '  ' + h + ':' + mi + ' ' + getDayTime(h);

    var userHasVoted = props.data.voters.includes(props.userId);
    const [voting, checkVote] = useState(false);
    const measureId = props.data._id;

    useEffect(() => {
        let time = setInterval(() => setCounter(currDate + 1000), 1000);
        if (currDate >= endDate) {
            endVoting(true);
        }
        // console.log(counter)
        // prevents memory leak
        // https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
        return () => clearTimeout(time);
    }, [currDate, endDate]);

    const retTime = (seconds) => {
        if (seconds > 60) {
            if (seconds > 3600) {
                return Math.round(seconds / 3600) + ' Hours';
            } else {
                return Math.round(seconds / 60) + ' Minutes';
            }
        } else {
            return Math.round(seconds) + ' Seconds';
        }
    };

    const castVote = (e) => {
        e.preventDefault();
        console.log(e.target.elements.choice.value);

        if (e.target.elements.choice.value !== '') {
            console.log('choice is not null');
            axios
                .post('/api/vote/cast-vote', {
                    decision: e.target.elements.choice.value,
                    userId: props.userId,
                    measureId: measureId,
                })
                .then((response) => {
                    console.log(response);
                });
            //keeping track of vote
            checkVote(true);
            if (e.target.elements.choice.value === 'yes') {
                setYays(yays + 1);
            } else {
                setNays(nays + 1);
            }
        }
        //no choice was selected
        else {
            console.log('choice is null');
        }
    };

    // measures expire in 24 hours. That functionality
    // exists within the Measure model.
    return (
        <div className="measure">
            <div className="sideTop">
                <div className="sideLeft">
                    <h3 className="measureText">{props.title}</h3>
                    <p className="measureText">{props.desc}</p>
                </div>
                <div className="sideRight">
                    {votingOver || userHasVoted || voting ? (
                        ''
                    ) : (
                        <form onSubmit={castVote} className="measureButtons">
                            <div className="voteChoice">
                                <input
                                    name="choice"
                                    type="radio"
                                    value="yes"
                                    id="yes"
                                    className="voteButton"
                                />
                                <label htmlFor="yes" className="voteLabel">
                                    Yay
                                </label>
                            </div>
                            <div className="voteChoice">
                                <input
                                    name="choice"
                                    type="radio"
                                    value="no"
                                    id="no"
                                    className="voteButton"
                                />
                                <label htmlFor="no" className="voteLabel">
                                    Nay
                                </label>
                            </div>
                            <button className="castButton">Cast Vote</button>
                        </form>
                    )}
                </div>
            </div>

            <div className="sideBottom">
                {votingOver ? (
                    <div>
                        <p>The voting period for this measure has ended</p>
                        <p>Expired on: {fulldate}</p>
                        <p>Votes in favor: {props.yeses}</p>
                        <p>Votes against: {props.nos}</p>
                    </div>
                ) : userHasVoted ? (
                    <div className="midBottom">
                        <p className="timer">
                            Time left: {retTime((endDate - counter) / 864)}
                        </p>
                        <p className="result">Votes in favor: {props.yeses}</p>
                        <p className="result">Votes against: {props.nos}</p>
                    </div>
                ) : voting ? (
                    <div className="midBottom">
                        <p className="timer">
                            Time left: {retTime((endDate - counter) / 864)}
                        </p>
                        <p className="result">Votes in favor: {yays}</p>
                        <p className="result">Votes against: {nays}</p>
                    </div>
                ) : (
                    <div className="midBottom">
                        <p className="timer">
                            Time left: {retTime((endDate - counter) / 864)}
                        </p>
                        <p className="result">
                            Cast your vote to see the results
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Measure;
