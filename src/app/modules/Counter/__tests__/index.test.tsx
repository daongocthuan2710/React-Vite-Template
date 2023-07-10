import { render } from '@testing-library/react';
import Test from '../components/Test';

describe('Basic DatePicker Component', () => {
  it('should render the Basic Test Component', () => {
    const { container } = render(<Test />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
