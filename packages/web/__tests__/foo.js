
import { render } from '@testing-library/react';
import Home from '../pages/index';
import React from 'react';

describe('test nextjs', () => {
  it('should work', async () => {
    const home = render(<Home/>);
    const title = await home.findByTestId('title');

    expect(title.textContent).toMatch('Welcome to Next.js!');
  });
});
