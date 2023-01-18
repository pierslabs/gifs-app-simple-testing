import { renderHook, waitFor } from '@testing-library/react';
import useFetchGifts from '../../src/hooks/useFetchGifts';

describe('<useFetchGifts>', () => {
  const category = 'goku';

  test('should return initialState', () => {
    const { result } = renderHook(() => useFetchGifts(category));

    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return load images  && isLoading false', async () => {
    const { result } = renderHook(() => useFetchGifts(category));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 1000,
      }
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
