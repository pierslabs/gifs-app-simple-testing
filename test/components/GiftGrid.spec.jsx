import { render, screen } from '@testing-library/react';
import GiftGrid from '../../src/components/GiftGrid';
import useFetchGifts from '../../src/hooks/useFetchGifts';

jest.mock('../../src/hooks/useFetchGifts');

describe('<GiftGrid>', () => {
  const category = 'goku';

  test('should show loading', () => {
    useFetchGifts.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GiftGrid category={category} />);

    screen.getByText('cargando...');
  });

  test('should show items when load images', () => {
    const gifs = [
      {
        title: 'Abc',
        url: 'https://...',
        id: '123456',
      },
      {
        title: 'Goku',
        url: 'https://goku',
        id: '2234567',
      },
    ];

    useFetchGifts.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GiftGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
