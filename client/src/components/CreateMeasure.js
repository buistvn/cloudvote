import React from 'react';
import axios from 'axios';
import './CreateMeasure.css';

// 5a)
// First, to locate where the data is flowing,
// look at the api call.
// The token, created and issued after login,
// is passed to the protected route, /api/vote.
// This will be the solution for the registration
// path, just haven't added that code.
// Once a measure is created, it is available
// in the ViewMeasures component.
//
// Go to step 6, found in client/../../Measure.js

const CreateMeasure = (props) => {
    //Figuring out how to clear text input w/o state
    //www.seanbehan.com/how-to-reset-and-clear-form-fields-and-textareas-with-react-stateless-components/
    let form = {};
    const update = (e) => {
        form[e.target.name] = e.target;
    };

    const submitProposal = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const desc = e.target.elements.description.value;

        console.log(`id in create: ${props.userId}`);

        const tokenReq = axios.create({
            baseURL: 'http://localhost:3000/',
            headers: {
                'auth-token': props.token,
            },
            method: 'post',
        });
        tokenReq
            .post('/api/vote/create-measure', {
                name: name,
                userId: props.id,
                desc: desc,
                votes: {
                    yes: 0,
                    no: 0,
                },
            })
            .then((response) => {
                console.log(`res in createmeasure: ${response.data.name}`);
                form['name'].value = '';
                form['description'].value = '';
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="createMeasure">
                <div className="createMeasureBox">
                    <div className="topSection">
                        <h2 className="formHeader">Propose a Measure</h2>
                    </div>
                    <div className="middleSection"></div>
                    <div className="bottomSection">
                        <p className="formText">
                            To create your own measure, please provide the
                            requested information in the form
                        </p>
                        <form
                            onSubmit={submitProposal}
                            className="createMeasureForm"
                        >
                            <div className="row">
                                <div className="colLeft">
                                    <label className="formText">Name</label>
                                </div>
                                <div className="colRight">
                                    <input
                                        name="name"
                                        type="text"
                                        className="userInput"
                                        placeholder="Your measure name..."
                                        onChange={update}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="colLeft">
                                    <label className="formText">
                                        Description
                                    </label>
                                </div>
                                <div className="colRight">
                                    <textarea
                                        name="description"
                                        className="userInput"
                                        placeholder="Your proposal overview..."
                                        onChange={update}
                                    ></textarea>
                                </div>
                            </div>
                            <button className="submitButton">
                                Submit Measure
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateMeasure;
