import Card from '@/components/Card';
import cardsData from '@/data/cards.json';

export default function Home() {
  const categories = ['All items', 'Birthday', 'Kids', 'Animals'];

  return (
    <main className="container py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">@air_cloud_msk</h1>
        <p className="mb-6">📌 Легче, чем воздух. Ярче, чем радуга</p>
        
        <nav className="categories">
          {categories.map((cat) => (
            <button 
              key={cat}
              className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      <div className="grid">
        {cardsData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
}
