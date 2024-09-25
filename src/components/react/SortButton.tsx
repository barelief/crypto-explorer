// SortButton.tsx
const SortButton = ({ label, sortingType, sortDirection, currentType, onClick }: any) => {
  const arrowDown = "M5 7.75a.75.75 0 0 0-.53 1.28l7 7a.75.75 0 0 0 1.06 0l7-7A.75.75 0 0 0 19 7.75z";
  const arrowUp = "M12.53 7.97a.75.75 0 0 0-1.06 0l-7 7A.75.75 0 0 0 5 16.25h14a.75.75 0 0 0 .53-1.28z";

  return (
    <div className="flex items-center space-x-1 text-lg cursor-pointer" onClick={onClick}>
      <div className="font-semibold">{label}</div>
      <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
          <path
            fill={currentType === sortingType ? '#000000' : '#c0c0c0'}
            d={currentType === sortingType && sortDirection[sortingType] === 'asc' ? arrowDown : arrowUp}
          />
        </svg>
      </div>
    </div>
  );
};
export default SortButton;

