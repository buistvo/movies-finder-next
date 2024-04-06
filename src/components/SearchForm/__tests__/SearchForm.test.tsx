import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchForm } from '../SearchForm';

describe('SearchForm component', () => {
  const placeHolderText = 'What do you want to watch?';
  it('renders an input with the value equal to initial value passed in props', () => {
    const initialValue = 'initial value';
    render(<SearchForm initialValue={initialValue} onSearch={() => {}} />);
    const inputElement = screen.getByPlaceholderText(placeHolderText);
    expect(inputElement).toHaveValue(initialValue);
  });

  it('after typing to the input and a "click" event on the Submit button, the "onSearch" prop is called with proper value', async () => {
    const mockOnSearch = jest.fn();
    render(<SearchForm onSearch={mockOnSearch} />);
    const inputElement = screen.getByPlaceholderText(placeHolderText);
    const submitButton = screen.getByText('SEARCH');
    userEvent.type(inputElement, 'test');
    await waitFor(() => {
      expect(inputElement).toHaveValue('test');
    });
    fireEvent.click(submitButton);
    expect(mockOnSearch).toHaveBeenCalledWith('test');
  });

  it('after typing to the input and pressing Enter key, the "onSearch" prop is called with proper value', async () => {
    const mockOnSearch = jest.fn();
    render(<SearchForm onSearch={mockOnSearch} />);
    const inputElement = screen.getByPlaceholderText(placeHolderText);
    userEvent.type(inputElement, 'test{enter}');
    await waitFor(() => {
      expect(inputElement).toHaveValue('test');
      expect(mockOnSearch).toHaveBeenCalledWith('test');
    });
  });
});
