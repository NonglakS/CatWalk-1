import { render, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Questions from '../../components/QA/Questions';
import QuestionsSection from '../../components/QA/QuestionsSection';
import data from './question-data';

afterEach(cleanup);

const { question } = data;

test('renders question section', () => {
  const root = document.createElement("div");
  ReactDOM.render(<QuestionsSection id={13025}/>, root);

  expect(root.querySelector("h3").textContent).toBe("Questions and Answers");
})
