// route for voting.
// not yet functional
const router = require('express').Router();
const verify = require('../verifyToken');
const Measure = require('../model/Measure');

router.post('/create-measure', verify, async (req, res) => {
    console.log(`vote req: ${req.body}`);

    const measure = new Measure({
        name: req.body.name,
        description: req.body.desc,
        creator: 'created by [user]',
        votes: {
            yes: req.body.votes['yes'],
            no: req.body.votes['no'],
        },
        voters: [],
    });

    const newMeasure = await measure.save();

    res.status(200).send(newMeasure);
});

// to do. check whether or not the user has
// aready cast their vote
router.post('/cast-vote', (req, res) => {
    console.log(`vote cast ${req.body.decision}`);
    console.log(`for measure: ${req.body.measureId}`);
    const measure = req.body.measureId;

    Measure.findById(req.body.measureId, (err, measure) => {
        if (err) throw err;
        for (let j = 0; j < measure.voters.length; ++j) {
            console.log(measure.voters[j]);
            if (measure.voters[j] === req.body.userId) {
                return res.status(400).send('You have already voted');
            }
        }
        measure.voters.push(req.body.userId);
        if (req.body.decision === 'yes') {
            measure.votes.yes++;
        } else {
            measure.votes.no++;
        }
        measure.save();
        console.log(measure);
        res.status(200).send('vote cast');
    });
});

router.get('/view-measures', (req, res) => {
    // populate ui with existing db
    Measure.find((err, measure) => {
        if (err) {
            return res.status(400).send('no measures in db');
        }
        res.status(200).send(measure);
    });
});

module.exports = router;
