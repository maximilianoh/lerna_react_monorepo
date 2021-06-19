import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';

test('Button primary enabled', () => {
  const component = renderer.create(
    <Button
      type="button"
    >
      soy un boton
    </Button>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
