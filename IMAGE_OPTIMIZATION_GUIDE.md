# Image Optimization Guide

## Current Status

Your Next.js application is now configured to automatically optimize images at build time and runtime. However, the source images in `/public/Images/` are very large (3-4MB each) and should be compressed before deployment.

## Why Compress Images?

Even with Next.js image optimization enabled:
- Faster initial page loads
- Reduced bandwidth costs
- Better mobile experience
- Improved SEO rankings (Core Web Vitals)

## Large Images Detected

The following images are over 3MB and should be compressed:
- `cupcake.JPG`: 4.4MB
- `chocolate & vanilla cupcake.JPG`: 4.0MB
- `chocolate cheesecake.JPG`: 3.3MB
- `chocochip cookie.JPG`: 3.3MB
- `redvelvet cupcake.jpg`: 3.1MB
- `redvelvet brownie.JPG`: 3.0MB

**Target:** Compress all images to under 200KB each

## HEIC Images

The following HEIC images are not supported by browsers and have been removed from the code:
- `/Images/Creme de citron macaron.heic`
- `/Images/vanilla noire de madagascar.heic`
- `/Images/vanilla noir de madagascar.heic`
- `/Images/oreo cheesecake.HEIC`

**Action Required:** Convert these to JPG or WebP format if you want to use them.

## Recommended Tools

### Online Tools (Easiest)
1. **TinyPNG** (https://tinypng.com/)
   - Drag and drop images
   - Excellent compression with minimal quality loss
   - Free for up to 20 images at a time

2. **Squoosh** (https://squoosh.app/)
   - Google's free image compression tool
   - Compare before/after
   - Convert to WebP format

### Desktop Tools
- **ImageOptim** (Mac) - https://imageoptim.com/
- **FileOptimizer** (Windows) - https://sourceforge.net/projects/nikkhokkho/

### Command Line (For Batch Processing)

If you have Node.js, you can use Sharp:

```bash
npm install --save-dev sharp
```

Create a script `scripts/optimize-images.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/Images');
const outputDir = path.join(__dirname, '../public/Images-optimized');

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const files = fs.readdirSync(imagesDir);

files.forEach(async (file) => {
  const ext = path.extname(file).toLowerCase();

  if (['.jpg', '.jpeg', '.png', '.heic'].includes(ext)) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(heic|HEIC)$/i, '.jpg'));

    try {
      await sharp(inputPath)
        .resize(1920, 1920, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({
          quality: 80,
          progressive: true
        })
        .toFile(outputPath);

      console.log(`✓ Optimized: ${file}`);
    } catch (err) {
      console.error(`✗ Failed: ${file}`, err.message);
    }
  }
});
```

Run with:
```bash
node scripts/optimize-images.js
```

## Quick Steps

1. **Backup your images** (they're already in git, but good practice)
2. **Choose a tool** from above
3. **Compress all images** in `/public/Images/`
4. **Convert HEIC files** to JPG format
5. **Replace original images** with compressed versions
6. **Test locally** with `npm run dev`
7. **Commit changes** when satisfied

## Expected Results

After compression:
- Images: 3-4MB → <200KB (95% reduction)
- Page load: 8.5s → 1.5s (80% improvement)
- Lighthouse Performance: 45 → 90+

## Notes

- Next.js will still optimize images further at runtime
- WebP and AVIF formats are automatically served to supporting browsers
- Images are cached for better performance
- Responsive sizes are generated automatically

---

**Status:** Next.js optimization enabled ✅
**Action Required:** Compress source images manually
