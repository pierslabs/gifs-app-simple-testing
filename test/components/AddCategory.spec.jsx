import { fireEvent, render, screen } from '@testing-library/react';
import AddCategory from '../../src/components/AddCategory';

describe('<AddCategory>', () => {
  test('should change value text in inputex', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Spiderman' } });

    expect(input.value).toBe('Spiderman');
  });

  test('should execute onNewCategory if input has new value', () => {
    const onNewCategory = jest.fn();

    const inputValue = 'Hulk';

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });

    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalledTimes(1);
  });

  test('should not execute onNewCategory if input has void', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
