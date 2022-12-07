const router = require('express').Router();
const controller = require('./controllers');

module.exports = router;

// router.get('/qa/questions')

// router.get('/qa/questions/:question_id/answers')

// router.post('/qa/questionss')

// router.post('/qa/questions/:question_id/answers')

// router.put('/qa/questions/:question_id/helpful')

// router.put('/qa/questions/:question_id/report')

// router.put('/qa/answers/:answer_id/helpful')

// router.put('/qa/answers/:answer_id/report')

const reviewControllers = require('./controllers/reviewsControllers.js');

router.get('/reviews', reviewControllers.getReviews);
router.get('/reviews/meta', reviewControllers.getMetaData);
router.post('/reviews', reviewControllers.postReview);
router.put('/reviews/helpful', reviewControllers.updateHelpful);
router.put('/reviews/report', reviewControllers.reportReview);
