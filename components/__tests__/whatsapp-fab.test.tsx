import { render, screen } from '@testing-library/react'
import WhatsAppFab from '@/components/whatsapp-fab'

describe('WhatsAppFab Component', () => {
  it('renders the WhatsApp button', () => {
    render(<WhatsAppFab />)

    const button = screen.getByRole('link', { name: /chat on whatsapp/i })
    expect(button).toBeInTheDocument()
  })

  it('has correct WhatsApp URL', () => {
    render(<WhatsAppFab />)

    const button = screen.getByRole('link', { name: /chat on whatsapp/i })
    expect(button).toHaveAttribute('href', 'https://wa.me/916362395980')
  })

  it('opens in new tab', () => {
    render(<WhatsAppFab />)

    const button = screen.getByRole('link', { name: /chat on whatsapp/i })
    expect(button).toHaveAttribute('target', '_blank')
  })

  it('has accessible label', () => {
    render(<WhatsAppFab />)

    const button = screen.getByLabelText(/chat on whatsapp/i)
    expect(button).toBeInTheDocument()
  })

  it('contains WhatsApp icon SVG', () => {
    const { container } = render(<WhatsAppFab />)

    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
