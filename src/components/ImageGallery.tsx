'use client';

import { useState } from 'react';
import { SEOImage } from './SEOImage';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  width?: number;
  height?: number;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
  description?: string;
  className?: string;
  columns?: 2 | 3 | 4;
  showCaptions?: boolean;
  lightbox?: boolean;
}

export default function ImageGallery({
  images,
  title,
  description,
  className = '',
  columns = 3,
  showCaptions = true,
  lightbox = true
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const openLightbox = (index: number) => {
    if (lightbox) {
      setSelectedImage(index);
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  // Schema markup للمعرض
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": title || "معرض صور شركة أحمد نور للإيبوكسي",
    "description": description || "معرض صور لأعمال ومشاريع شركة أحمد نور للإيبوكسي في جدة",
    "author": {
      "@type": "Organization",
      "name": "شركة أحمد نور للإيبوكسي"
    },
    "image": images.map(img => ({
      "@type": "ImageObject",
      "url": img.src,
      "description": img.alt,
      "name": img.title || img.alt
    }))
  };

  return (
    <section className={`py-8 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gallerySchema)
        }}
      />
      
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
          )}
        </div>
      )}

      <div className={`grid gap-6 ${gridCols[columns]}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            onClick={() => openLightbox(index)}
          >
            <div className="relative overflow-hidden">
              <SEOImage
                src={image.src}
                alt={image.alt}
                title={image.title}
                width={image.width || 400}
                height={image.height || 300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {lightbox && (
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            
            {showCaptions && (image.caption || image.title) && (
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {image.title || image.alt}
                </h3>
                {image.caption && (
                  <p className="text-sm text-gray-600">{image.caption}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="إغلاق المعرض"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  aria-label="الصورة السابقة"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  aria-label="الصورة التالية"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image */}
            <SEOImage
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              title={images[selectedImage].title}
              className="max-w-full max-h-full object-contain"
              width={800}
              height={600}
              priority
            />

            {/* Caption */}
            {(images[selectedImage].caption || images[selectedImage].title) && (
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="text-lg font-semibold mb-1">
                  {images[selectedImage].title || images[selectedImage].alt}
                </h3>
                {images[selectedImage].caption && (
                  <p className="text-sm opacity-90">{images[selectedImage].caption}</p>
                )}
              </div>
            )}

            {/* Image counter */}
            {images.length > 1 && (
              <div className="absolute top-4 left-4 text-white text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

// مكون معرض صور المشاريع
export function ProjectGallery({ projects }: { projects: GalleryImage[] }) {
  return (
    <ImageGallery
      images={projects}
      title="معرض مشاريعنا المنجزة"
      description="اطلع على مجموعة من أفضل مشاريع العزل والإيبوكسي التي نفذتها شركة أحمد نور في جدة"
      columns={3}
      showCaptions={true}
      lightbox={true}
    />
  );
}

// مكون معرض صور الخدمات
export function ServiceGallery({ services }: { services: GalleryImage[] }) {
  return (
    <ImageGallery
      images={services}
      title="خدماتنا المتخصصة"
      description="تعرف على مجموعة الخدمات المتخصصة التي نقدمها في مجال العزل والإيبوكسي"
      columns={2}
      showCaptions={true}
      lightbox={true}
    />
  );
}

// مكون معرض صور قبل وبعد
export function BeforeAfterGallery({ comparisons }: { comparisons: { before: GalleryImage; after: GalleryImage }[] }) {
  const images = comparisons.flatMap(comp => [
    { ...comp.before, caption: 'قبل العمل' },
    { ...comp.after, caption: 'بعد العمل' }
  ]);

  return (
    <ImageGallery
      images={images}
      title="قبل وبعد - شاهد الفرق"
      description="مقارنات توضح جودة عملنا والتحسن الواضح بعد تطبيق خدماتنا"
      columns={2}
      showCaptions={true}
      lightbox={true}
    />
  );
}
