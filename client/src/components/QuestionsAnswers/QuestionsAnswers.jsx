/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionEntry from './QuestionEntry.jsx';
import QuestionsList from './QuestionsList.jsx';
import NewQuestionForm from './NewQuestionForm.jsx';
import NewAnswerForm from './NewAnswerForm.jsx';
import SearchQuestions from './SearchQuestions.jsx';

const results = [{
  question_id: 37,
  question_body: 'Why is this product cheaper here than other sites?',
  question_date: '2018-10-18T00:00:00.000Z',
  asker_name: 'williamsmith',
  question_helpfulness: 4,
  reported: false,
  answers: {
    68: {
      id: 68,
      body: 'We are selling it here without any markup from the middleman!',
      date: '2018-08-18T00:00:00.000Z',
      answerer_name: 'Seller',
      helpfulness: 4,
      photos: [],
    }
  }
},
{
  question_id: 38,
  question_body: 'How long does it last?',
  question_date: '2019-06-28T00:00:00.000Z',
  asker_name: 'funnygirl',
  question_helpfulness: 2,
  reported: false,
  answers: {
    70: {
      id: 70,
      body: 'Some of the seams started splitting the first time I wore it!',
      date: '2019-11-28T00:00:00.000Z',
      answerer_name: 'sillyguy',
      helpfulness: 6,
      photos: [],
    },
    78: {
      id: 78,
      body: 'gsgahskjlhagkjlahsdg',
      date: '2019-11-12T00:00:00.000Z',
      answerer_name: 'iluvdogz',
      helpfulness: 16,
      photos: [],
    },
    74: {
      id: 74,
      body: 'Some of the seams started splitting the first time I wore it!',
      date: '2019-11-28T00:00:00.000Z',
      answerer_name: 'sillyguy',
      helpfulness: 4,
      photos: [],
    },
    79: {
      id: 79,
      body: '9 lives',
      date: '2019-11-12T00:00:00.000Z',
      answerer_name: 'iluvdogz',
      helpfulness: 81,
      photos: [],
    }
  }
}];

const QuestionsAnswers = (/* product_id */) => {

  const [questions, setQuestions] = useState(results);
  const [filterdQuestions, setFilteredQuestions] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [render, setRender] = useState(true);

  // useEffect(() => {
  //   axios.get('/qa/questions/product_id')
  //     .then((response) => {
  //       setQuestions(response.results);
  //     });
  // }, []);

  const reRender = () => {
    setRender(!render);
  };

  const doSearch = (query) => {
    if (query) {
      const searchQs = questions.filter((question) => (
        question.question_body.toLowerCase().includes(query.toLowerCase())
      ));
      setFiltered(true);
      if (searchQs.length > 0) {
        setFilteredQuestions(searchQs);
      } else {
        setNotFound(true);
      }
    } else {
      setFiltered(false);
    }
  };

  return (
    <div>
      <h2>Questions and Answers</h2>
      <SearchQuestions doSearch={doSearch} />
      <QuestionsList questions={filtered ? filterdQuestions : questions} />
      <button>Load more questions</button>
      <button>Add a question</button>
    </div>
  );
};

export default QuestionsAnswers;



// return (
//   <div>
//     <h2>Questions and Answers</h2>
//     <SearchQuestions doSearch={doSearch} />
//     {filtered ? questions.map((question, key) => (
//       <QuestionEntry question={question} key={key} />
//     ))}
//   </div>
// );
