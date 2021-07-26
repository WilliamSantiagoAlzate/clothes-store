import { renderHook, act } from '@testing-library/react-hooks';
import { useWindowSize } from '../../customHooks/useWindowSize';

describe('useWindowSize', () => {
  test('Get window size', () => {
    const { result } = renderHook(() => useWindowSize());
    const windowSize = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
    expect(result.current).toEqual(windowSize);
  });
  test('Get window size when window was resize', () => {
    const { result } = renderHook(() => useWindowSize());
    act(() => {
      window.dispatchEvent(new Event('resize'));
    })
    const windowSize = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
    expect(result.current).toEqual(windowSize);
  });
});