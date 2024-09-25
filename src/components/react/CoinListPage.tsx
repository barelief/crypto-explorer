// File: CoinListPage.tsx
// Displays a list of data fetched from a remote API, with loading and error handling.

import { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { sortingTypeStore, sortDirectionStore, setSortingType, initializeSorting } from '../../stores/sortingStore';
import SortButton from './SortButton';
import CryptoItem from './CryptoItem';

// Define the structure for the Coin interface
interface Coin {
  name: string;
  price: number;
  symbol: string;
}

const CoinListPage = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const sortingType = useStore(sortingTypeStore);
  const sortDirection = useStore(sortDirectionStore);

  // Initialize sorting from localStorage on component mount
  useEffect(() => {
    initializeSorting();
  }, []);

  const fetchCoins = async (forceRefresh = false) => {
    const token = sessionStorage.getItem('authTokenCoins');

    // Check if data is in localStorage and if not forcing refresh
    const storedCoins = localStorage.getItem('coins');
    if (storedCoins && !forceRefresh) {
      setCoins(JSON.parse(storedCoins));
      setLoading(false);
      return;
    }

    // If no stored data or refreshing
    try {
      const response = await fetch('https://blon.lt/micro/coins/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setCoins(data);
      localStorage.setItem('coins', JSON.stringify(data)); // Save to localStorage
    } catch (error) {
      alert(`Failed to fetch coins. \nMost likely you\'re not connected to Internet\n${error}`);
    } finally {
      setLoading(false); // loading state is cleared 
    }
  };

  // On component mount, check if coins exist in localStorage and fetch if necessary
  useEffect(() => {
    fetchCoins();
  }, []);

  // This block sorts the coin data based on the current sorting type and direction
  const sortedCoins = [...(coins || [])].sort((a, b) => {
    if (!sortingType) return 0;

    // (1 for ascending, -1 for descending)
    const direction = sortDirection[sortingType] === 'asc' ? 1 : -1;

    if (sortingType === 'name') {
      return a.name.localeCompare(b.name) * direction;
    }

    if (sortingType === 'price') {
      return (a.price - b.price) * direction;
    }

    return 0;
  });


  if (loading) {
    return (
      <main className="flex justify-center">
        <div className="flex items-center h-screen">Fetching rates of cryptocurrencies... </div>
      </main>
    );
  }


  return (
    <>
      <div className="container p-4 mx-auto md:w-1/2">
        <div className="text-center space-y-4 my-10">
          <h1 className="text-5xl font-bold">Crypto rates</h1>
          <p>The current price of hot cryptocurrencies.</p>
          <button
            onClick={() => {
              setLoading(true); // Set loading to true while fetching
              fetchCoins(true); // Force refresh
            }}
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold text-xs py-2 px-4 rounded"
          >
            Update Rates ↻
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-center">

              {/* Sort by Name Button */}
              <SortButton
                label="Cryptocurrency"
                sortingType="name"
                sortDirection={sortDirection}
                currentType={sortingType}
                onClick={() => setSortingType('name')}
              />
              <SortButton
                label="Price"
                sortingType="price"
                sortDirection={sortDirection}
                currentType={sortingType}
                onClick={() => setSortingType('price')}
              />

            </div>
          </div>

          {/* render coin list*/}
          <ul className="divide-y divide-gray-200">
            {sortedCoins.map((coin, index) => {
              return <CryptoItem key={index} coin={coin} />;
            })}
          </ul>
        </div>
      </div >

    </>
  );
};

export default CoinListPage;

