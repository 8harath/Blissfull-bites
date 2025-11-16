export default function RootLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-4"></div>
        <div className="h-6 w-32 bg-muted rounded mx-auto animate-pulse"></div>
      </div>
    </div>
  )
}
