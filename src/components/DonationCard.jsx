import { number, string } from "prop-types";

export default function DonationCard({
  src = "",
  alt = "",
  title = "",
  description = "",
  currentAmount = "",
  targetAmount = "",
  donation = "",
  progress = 0,
}) {
  return (
    <div className="min-w-[280px] md:min-w-[320px] max-w-sm bg-white rounded-xl shadow-lg flex-shrink-0 mx-2 overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 space-y-4">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 line-clamp-2">
          {title}
        </h2>

        {/* description */}
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

        {/* Progress section */}
        <div className="space-y-2">
          <div className="text-sm text-gray-600 flex justify-between">
            <span>{currentAmount}</span>
            <span>Target: {targetAmount}</span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-300 bg-green-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Donor count */}
        <div className="flex items-center gap-2 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <span className="text-sm">{donation} orang berdonasi</span>
        </div>
      </div>
    </div>
  );
}

DonationCard.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  currentAmount: string.isRequired,
  targetAmount: string.isRequired,
  donation: string.isRequired,
  progress: number.isRequired,
};