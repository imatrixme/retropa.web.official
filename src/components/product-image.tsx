import { Expand } from "lucide-react"

export function ProductImage({ image, alt, caption }: { image: string; alt: string; caption: string }) {
  return <figure className="product-figure">
    <a className="product-image-link" href={`/product/${image}.webp`} target="_blank" rel="noopener" aria-label={alt}>
      <img src={`/product/${image}.webp`} width="720" height="1557" alt={alt} loading="lazy" />
      <span className="image-expand" title={alt}><Expand size={18} /></span>
    </a>
    <figcaption>{caption}</figcaption>
  </figure>
}
