// CryptoItem.tsx

const CryptoItem = ({ coin }: any) => {
  return (
    <li className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <img className="w-8 h-5 border" src={`${import.meta.env.BASE_URL}/svg/color/${coin.symbol}.svg`} alt={`${coin.name}`} />
        <a href={coin.symbol} className="hover:underline">
          <span>{coin.name}</span>
        </a>
      </div>
      <span>${coin.price}</span>
    </li>
  );
};
export default CryptoItem;

