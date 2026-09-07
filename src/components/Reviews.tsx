import React, { useRef, useState } from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';
import { REVIEWS } from '../data/menuiserieData';

export const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.offsetWidth * 0.85;
    const index = Math.round(scrollLeft / (itemWidth || 1));
    setActiveIndex(Math.min(Math.max(index, 0), REVIEWS.length - 1));
  };

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveIndex(index);
    }
  };

  return (
    <section id="avis" className="py-12 sm:py-16 bg-[#FAF7F2] border-b border-[#E5DACB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Compact without separate rating card */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#FDE68A] shadow-2xs mb-2.5">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>SATISFACTION CLIENT</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1C18] tracking-tight mb-2.5">
            Ce que disent nos clients
          </h2>
          <p className="text-sm sm:text-base text-[#615344] leading-relaxed max-w-2xl mx-auto">
            Découvrez les retours d'expérience de nos clients à Dozulé, Cabourg et Houlgate.
          </p>
        </div>

        {/* Mobile Swipeable Carousel & Desktop 3-Column Grid */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-4 lg:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-2 md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0"
        >
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="w-[85vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink md:snap-align-none bg-white rounded-2xl p-5 sm:p-6 border border-[#E2D6C5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative"
            >
              <div>
                {/* Header of review: Stars & Quote icon */}
                <div className="flex items-center justify-between mb-3">
                  <div
                    role="img"
                    aria-label={`Note de ${review.rating} sur 5 étoiles`}
                    className="flex text-[#F59E0B]"
                  >
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E5DACB]" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#4E4135] leading-relaxed mb-4 italic">
                  « {review.content} »
                </p>
              </div>

              {/* Review Author & Project */}
              <div className="pt-3 border-t border-[#F0E6D8]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-[#1F1C18]">
                    {review.author}
                  </span>
                  <span className="text-[11px] font-medium text-[#15803D] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Avis vérifié
                  </span>
                </div>
                <div className="text-xs text-[#786C5E] mb-2">
                  {review.location}
                </div>
                <div className="text-[11px] font-medium text-[#92400E] bg-[#FAF7F2] p-2 rounded-lg border border-[#EFE5D8] leading-snug">
                  Projet : {review.projectType}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Mobile pagination dots (only visible on mobile < md) */}
        <div className="flex md:hidden items-center justify-center gap-1 mt-4">
          {REVIEWS.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Aller au témoignage ${index + 1}`}
              className="p-2.5 inline-flex items-center justify-center focus:outline-hidden min-w-[36px] min-h-[36px]"
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 block ${
                  activeIndex === index ? 'w-6 bg-[#92400E]' : 'w-2 bg-[#D1C7BA]'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Discreet Google Profile Link */}
        <div className="mt-7 text-center">
          <a
            id="reviews-google-link"
            href="https://share.google/GICNJNUCEw7Ja8ckr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#92400E] hover:text-[#78350F] hover:underline underline-offset-4 transition-colors"
          >
            <span>Voir tous nos avis sur Google</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
