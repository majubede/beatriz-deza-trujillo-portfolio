import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface SeriesCardProps {
  slug: string;
  title: string;
  year: string;
  description: string;
  thumbnailSrc: string;
  featured?: boolean;
}

const SeriesCard: React.FC<SeriesCardProps> = ({
  slug,
  title,
  year,
  description,
  thumbnailSrc,
  featured = false,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      to={slug === 'mujer-x' ? '/mujer-x' : `/obra/${slug}`}
      className={`group block ${featured ? 'col-span-2 row-span-2' : ''}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4">
        <img
          src={thumbnailSrc}
          alt={title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {!loaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
      </div>
      <div className="space-y-1">
        <h3 className="font-serif text-lg md:text-xl group-hover:opacity-70 transition-opacity duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </Link>
  );
};

export default SeriesCard;
