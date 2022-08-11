import { render } from '@testing-library/react';

import ShadredDataAccess from './shadred-data-access';

describe('ShadredDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShadredDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});
