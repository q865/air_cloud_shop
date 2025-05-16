import Image from 'next/image';

interface Media {
  path: string;
  type: string;
}

interface Reaction {
  emoji: string;
  count: number;
}

interface CardProps {
  card: {
    id: number;
    text: string;
    date: string;
    media: Media[];
    reactions: Reaction[];
    views: number;
  };
}

export default function Card({ card }: CardProps) {
  const priceMatch = card.text?.match(/\d+р\.?/);
  const price = priceMatch ? priceMatch[0] : '';
  const title = card.text?.split('\n')[0] || '';
  const mainMedia = card.media[0];

  return (
    <div className="card bg-white shadow-md">
      <div className="media-container">
        {mainMedia.type === 'image' ? (
          <Image
            src={mainMedia.path}
            alt={title}
            width={300}
            height={300}
            className="card-image w-full"
          />
        ) : (
          <video controls className="card-video w-full">
            <source src={mainMedia.path} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="card-content">
        <h3 className="text-lg font-semibold">{title}</h3>
        {price && <p className="price text-lg">{price}</p>}
        
        <div className="reactions">
          {card.reactions.map((reaction, idx) => (
            <span key={idx} className="text-sm">
              {reaction.emoji} {reaction.count}
            </span>
          ))}
        </div>

        <div className="stats text-sm">
          <span>👁️ {card.views}</span>
          <span>📅 {new Date(card.date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
