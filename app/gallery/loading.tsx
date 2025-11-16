export default function GalleryLoading() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 w-64 bg-muted rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-96 bg-muted rounded mx-auto animate-pulse"></div>
        </div>

        {/* Category Filter Skeleton */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-10 w-24 bg-muted rounded-full animate-pulse"></div>
          ))}
        </div>

        {/* Gallery Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="relative h-64 bg-muted rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    </section>
  )
}
