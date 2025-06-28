'use client';

import Image from 'next/image';
import { useState } from 'react';

interface SEOImageProps {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  caption?: string;
  schema?: boolean;
}

export default function SEOImage({
  src,
  alt,
  title,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  loading = 'lazy',
  placeholder = 'empty',
  blurDataURL,
  caption,
  schema = false
}: SEOImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // إنشاء alt text محسن للـ SEO
  const optimizedAlt = alt || `صورة ${title || 'خدمات شركة أحمد نور للإيبوكسي في جدة'}`;
  
  // إنشاء title محسن
  const optimizedTitle = title || alt || 'شركة أحمد نور للإيبوكسي - خدمات العزل والإيبوكسي في جدة';

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Schema markup للصورة
  const imageSchema = schema ? {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": src,
    "description": optimizedAlt,
    "name": optimizedTitle,
    "width": width,
    "height": height,
    "encodingFormat": "image/jpeg",
    "author": {
      "@type": "Organization",
      "name": "شركة أحمد نور للإيبوكسي"
    },
    "copyrightHolder": {
      "@type": "Organization",
      "name": "شركة أحمد نور للإيبوكسي"
    },
    "license": "https://www.3azlepoxy.com/terms",
    "acquireLicensePage": "https://www.3azlepoxy.com/contact"
  } : null;

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width: width || '100%', height: height || 'auto' }}
        role="img"
        aria-label={optimizedAlt}
      >
        <span className="text-gray-500 text-sm">فشل في تحميل الصورة</span>
      </div>
    );
  }

  const imageProps = {
    src,
    alt: optimizedAlt,
    title: optimizedTitle,
    className: `${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`,
    priority,
    quality,
    onLoad: handleLoad,
    onError: handleError,
    sizes,
    placeholder: placeholder as any,
    blurDataURL,
    loading,
  };

  const ImageComponent = () => {
    if (fill) {
      return (
        <Image
          {...imageProps}
          fill
          style={{ objectFit: 'cover' }}
        />
      );
    }

    return (
      <Image
        {...imageProps}
        width={width}
        height={height}
      />
    );
  };

  return (
    <figure className="relative">
      {schema && imageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(imageSchema)
          }}
        />
      )}
      
      <div className="relative overflow-hidden">
        <ImageComponent />
        {isLoading && (
          <div 
            className="absolute inset-0 bg-gray-200 animate-pulse"
            style={{ width: width || '100%', height: height || 'auto' }}
          />
        )}
      </div>
      
      {caption && (
        <figcaption className="text-sm text-gray-600 mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// مكون للصور المحسنة مع lazy loading
export function LazyImage(props: SEOImageProps) {
  return (
    <SEOImage
      {...props}
      loading="lazy"
      placeholder="blur"
    />
  );
}

// مكون للصور عالية الأولوية (Hero images)
export function PriorityImage(props: SEOImageProps) {
  return (
    <SEOImage
      {...props}
      priority={true}
      loading="eager"
      placeholder="blur"
    />
  );
}

// مكون للصور مع Schema
export function SchemaImage(props: SEOImageProps) {
  return (
    <SEOImage
      {...props}
      schema={true}
    />
  );
}

// مكون للصور المتجاوبة
export function ResponsiveImage(props: SEOImageProps) {
  return (
    <SEOImage
      {...props}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className={`w-full h-auto ${props.className || ''}`}
    />
  );
}

// مكون لصور الخدمات
export function ServiceImage(props: Omit<SEOImageProps, 'alt' | 'title'> & { serviceName: string }) {
  const { serviceName, ...otherProps } = props;
  
  return (
    <SEOImage
      {...otherProps}
      alt={`خدمة ${serviceName} - شركة أحمد نور للإيبوكسي في جدة`}
      title={`${serviceName} | أفضل شركة عزل في جدة`}
      schema={true}
    />
  );
}

// مكون لصور المشاريع
export function ProjectImage(props: Omit<SEOImageProps, 'alt' | 'title'> & { projectName: string; location?: string }) {
  const { projectName, location = 'جدة', ...otherProps } = props;
  
  return (
    <SEOImage
      {...otherProps}
      alt={`مشروع ${projectName} في ${location} - شركة أحمد نور للإيبوكسي`}
      title={`${projectName} | مشاريع شركة أحمد نور للإيبوكسي في ${location}`}
      schema={true}
    />
  );
}
