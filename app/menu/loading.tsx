export default function MenuLoading() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 w-48 bg-muted rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-96 bg-muted rounded mx-auto mb-2 animate-pulse"></div>
          <div className="h-4 w-64 bg-muted rounded mx-auto mb-6 animate-pulse"></div>
          <div className="h-12 w-56 bg-muted rounded mx-auto animate-pulse"></div>
        </div>

        {/* Menu Categories Skeleton */}
        <div className="space-y-12">
          {[...Array(5)].map((_, categoryIdx) => (
            <div key={categoryIdx} className="border-b border-border pb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="h-8 w-48 bg-muted rounded animate-pulse"></div>
                <div className="h-6 w-32 bg-muted rounded animate-pulse mt-2 md:mt-0"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, itemIdx) => (
                  <div key={itemIdx} className="card-base border border-accent">
                    <div className="h-6 w-32 bg-muted rounded animate-pulse mb-2"></div>
                    <div className="h-4 w-24 bg-muted rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
