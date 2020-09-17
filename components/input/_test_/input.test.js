import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../input'

test('test button component', () => {

  const component = renderer.create(
    <Input>test</Input>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})