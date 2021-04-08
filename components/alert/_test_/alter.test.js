import React from 'react';
import ReactDOM from 'react-dom'
import Alert from '../alert'

test('test alter component', () => {

  const mountNode = document.createElement('div');

  const alertNode = (
    <Alert>test</Alert>
  );

  ReactDOM.render(alertNode, mountNode);
})