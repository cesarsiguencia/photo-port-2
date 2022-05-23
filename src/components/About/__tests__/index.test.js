import React from 'react';
import { render, cleanup } from '@testing-library/react'; // . this are functions from the react testing library, renders the componenent for the test, a sample one, cleanup removes componentts from the DOM to prevent memory leaking and data collisions
import '@testing-library/jest-dom/extend-expect'; // importing the extend-expect library from library jest-dom
import About from '..'; //importing actual component    

afterEach(cleanup); //keep our testing environment clean

describe('About component', () => { //declares component we are testing
      // First Test, to verify that component is rendering, you can also replace IT with TEST
  it('renders', () => {
    render(<About />);
  });

  // Second Test, the "test case", snapshots of the DOM node structure will be compared, or a serialized version of the DOM component

  it('matches snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render(<About />); //returns fragment of the About component
    expect(asFragment()).toMatchSnapshot(); // the actual test to see if we get our component math back, and when the test runs, it will give us a new snapshot folder that shows our rendered DOM component.
  });
  })