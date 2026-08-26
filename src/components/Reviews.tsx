import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquareText, ThumbsUp } from 'lucide-react';
import { REVIEWS } from '../data/menuiserieData';

export const Reviews: React.FC = () => {
  return (
    <section id="avis" className="py-20 bg-[#FAF7F2] border-b border-[#E5DACB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#FDE68A] shadow-2xs mb-3">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>SATISFACTION CLIENT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1F1C18] tracking-tight mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-base sm:text-lg text-[#615344] leading-relaxed">
            La réputation d’un artisan se forge sur la satisfaction de chaque foyer. 
            Découvrez les retours d’expérience de nos clients à Dozulé, Cabourg et Houlgate.
          </p>

          {/* Rating Badge */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-[#E0D3C0] shadow-xs">
            <div className="flex text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#F59E0B]" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-[#1F1C18]">5.0 / 5 — 100% Avis Positifs</div>
              <div className="text-[11px] text-[#6B7280]">Recommandé par nos clients en Normandie</div>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="bg-white rounded-2xl p-7 border border-[#E2D6C5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative"
            >
              <div>
                {/* Header of review: Stars & Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#F59E0B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#E5DACB]" />
                </div>

                {/* Highlight banner if exists */}
                {review.highlight && (
                  <div className="text-xs font-bold text-[#92400E] bg-[#FEF3C7] px-3 py-1 rounded-md mb-3 inline-block">
                    "{review.highlight}"
                  </div>
                )}

                {/* Review Text */}
                <p className="text-sm text-[#4E4135] leading-relaxed mb-6 italic">
                  « {review.content} »
                </p>
              </div>

              {/* Review Author & Project */}
              <div className="pt-4 border-t border-[#F0E6D8]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-[#1F1C18]">
                    {review.author}
                  </span>
                  <span className="text-[11px] text-[#9CA3AF]">
                    {review.date}
                  </span>
                </div>
                <div className="text-xs text-[#786C5E] flex items-center justify-between">
                  <span>{review.location}</span>
                  <span className="text-[11px] font-semibold text-[#15803D] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Avis Vérifié
                  </span>
                </div>
                <div className="mt-2 text-[11px] font-medium text-[#92400E] bg-[#FAF7F2] p-1.5 rounded-sm">
                  Projet : {review.projectType}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Small trust banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#786C5E] inline-flex items-center gap-1.5">
            <MessageSquareText className="w-4 h-4 text-[#92400E]" />
            Vous avez réalisé un chantier avec Jimmy Datin ? Partagez également votre avis sur notre page Facebook.
          </p>
        </div>

      </div>
    </section>
  );
};
