// import * as React from 'react';
import * as ReactDOM from 'react-dom';


describe('it', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<Thing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
