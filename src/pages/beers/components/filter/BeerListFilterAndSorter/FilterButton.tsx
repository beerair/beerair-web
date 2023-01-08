import Icon from '@/components/Icon';

interface FilterButtonProps {
  hasAppliedFilter: boolean;
  onClick: () => void;
}

const FilterButton = ({ hasAppliedFilter, onClick }: FilterButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      <Icon name={hasAppliedFilter ? 'FilterApplied' : 'Filter'} />
    </button>
  );
};

export default FilterButton;
