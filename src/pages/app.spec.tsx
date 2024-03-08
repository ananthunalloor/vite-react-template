import { render, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AppEntry } from './app';

describe('App', () => {
  it('should render app component', async () => {
    const { baseElement } = render(<AppEntry />);
    await waitFor(() => baseElement);
    expect(baseElement).toBeTruthy();
  });
});
