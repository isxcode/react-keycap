import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '../modal'

test('test button component', () => {

  const component = renderer.create(
    <Modal>test</Modal>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})