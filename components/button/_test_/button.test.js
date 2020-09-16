import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../button'

test('test button component', () => {

  const component = renderer.create(
    <Button>test</Button>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})