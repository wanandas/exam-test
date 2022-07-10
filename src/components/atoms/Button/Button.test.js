import { render } from '@testing-library/react'
import Button from './Button'

describe('Button Component', () => {
  it('should render correctly', () => {
    const { container } = render(<Button>Test Text</Button>)

    expect(container).toMatchSnapshot()
  })

  it('should disable button correctly', () => {
    const { getByRole } = render(<Button disabled>Test Text</Button>)
    const button = getByRole('button')

    expect(button).toHaveAttribute('disabled')
  })

  it('can fired click event', () => {
    const mockFn = jest.fn()
    const { getByRole } = render(<Button onClick={mockFn}>Test Text</Button>)
    const button = getByRole('button')

    button.click()

    expect(mockFn).toBeCalled()
  })
})
