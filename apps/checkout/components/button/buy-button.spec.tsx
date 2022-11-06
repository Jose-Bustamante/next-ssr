import { render } from '@testing-library/react';

import BuyButton from './button';

describe('BuyButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BuyButton />);
    expect(baseElement).toBeTruthy();
  });
});
