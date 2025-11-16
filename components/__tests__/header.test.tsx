import { render, screen } from '@testing-library/react'
import Header from '@/components/header'

describe('Header Component', () => {
  it('renders the logo', () => {
    render(<Header />)
    const logo = screen.getByAlt('Blissful Bites Logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Menu')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('has correct href attributes for navigation links', () => {
    render(<Header />)

    const homeLink = screen.getAllByText('Home')[0].closest('a')
    const menuLink = screen.getAllByText('Menu')[0].closest('a')

    expect(homeLink).toHaveAttribute('href', '/')
    expect(menuLink).toHaveAttribute('href', '/menu')
  })

  it('renders mobile menu button with accessible label', () => {
    render(<Header />)

    const menuButton = screen.getByLabelText(/menu/i)
    expect(menuButton).toBeInTheDocument()
  })

  it('has proper navigation structure', () => {
    render(<Header />)

    const nav = screen.getByRole('banner')
    expect(nav).toBeInTheDocument()
  })
})
