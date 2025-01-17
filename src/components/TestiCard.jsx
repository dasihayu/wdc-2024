import { number, string } from "prop-types";

export default function TestiCard({
  src = "",
  alt = "",
  name = "",
  year = number,
  testimony = "",
}) {
  return (
    <div className="min-w-[280px] md:min-w-[320px] max-w-sm bg-neutral-secondary rounded-lg border border-grey-border flex-shrink-0 mx-2 overflow-hidden text-black p-4 md:p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14">
          <img
            src={src}
            alt={alt}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-grey text-sm">{year}</p>
        </div>
      </div>

      <p className="text-sm md:text-base leading-relaxed">{testimony}</p>
    </div>
  );
}

TestiCard.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
  name: string.isRequired,
  year: number.isRequired,
  testimony: string.isRequired,
};