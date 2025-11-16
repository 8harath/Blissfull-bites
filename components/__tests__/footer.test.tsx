import { render, screen } from '@testing-library/react'
import Footer from '@/components/footer'

describe('Footer Component', () => {
  it('renders the footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('displays business name and tagline', () => {
    render(<Footer />)

    expect(screen.getByText('Blissful Bites')).toBeInTheDocument()
    expect(screen.getByText(/Handcrafted sweetness, baked with heart/i)).toBeInTheDocument()
  })

  it('displays contact information', () => {
    render(<Footer />)

    expect(screen.getByText(/\+91 63623 95980/i)).toBeInTheDocument()
    expect(screen.getByText(/blissfulbites291@gmail.com/i)).toBeInTheDocument()
    expect(screen.getByText(/Bangalore, India/i)).toBeInTheDocument()
  })

  it('renders quick links section', () => {
    render(<Footer />)

    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    // Check for some navigation links
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('displays copyright information', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('contains FSSAI information', () => {
    render(<Footer />)

    expect(screen.getByText(/FSSAI-approved/i)).toBeInTheDocument()
  })
})
