import { renderHook } from '@testing-library/react-hooks';
import useConsole from './../useConsole';

describe('useConsole tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should work', () => {
    jest.spyOn(console, 'log');
    renderHook(() => useConsole('foo'));

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('foo');
  });
});
