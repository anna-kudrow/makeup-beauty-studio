import { reviews } from "@/lib/reviews";
import { TitleCarousel } from "@/ui/TitleCarousel";

export const Reviews = () => {
  return (
    <div className="p-4">
      <TitleCarousel text="Часть отзывов клиентов" />
      <div className="pt-4 grid grid-cols-2 gap-2 items-center md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {reviews.map(review => (
          <img key={review.src}
            className="block hover:scale-105 transition-transform"
            src={review.src}
            alt={review.alt}
          />
        ))}
      </div>
    </div>
  );
};
