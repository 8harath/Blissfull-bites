import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-[60vh] flex items-center justify-center p-4 bg-background">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary mb-2">404</h1>
            <div className="text-6xl mb-4">🧁</div>
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-foreground">
            Page Not Found
          </h2>
          <p className="text-foreground/70 mb-8">
            Oops! It looks like this page doesn't exist. Perhaps it's still in the oven?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Go to Homepage
            </Link>
            <Link href="/menu" className="btn-secondary">
              View Our Menu
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
