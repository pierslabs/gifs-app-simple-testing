import { getByRole, render, screen } from '@testing-library/react';
import GiffGridItem from '../../src/components/GiffGridItem';

describe('<GiffGridItem>', () => {
  const title = 'batman';
  const url = 'https://batman.com/batman.jpg';

  test('should match to snapshot', () => {
    const { container } = render(<GiffGridItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test('should show the image with url and ALT ', () => {
    render(<GiffGridItem title={title} url={url} />);

    const { alt, src } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should show the title of component ', () => {
    render(<GiffGridItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
