import { Button } from './Button';

export const Controls = ({
  onPrev,
  onNext,
  isNextDisabled,
  isPrevDisabled,
}) => {
  return (
    <div>
      <Button onClick={onPrev} isDisabled={isPrevDisabled}>
        Prev
      </Button>
      <Button onClick={onNext} isDisabled={isNextDisabled}>
        Next
      </Button>
    </div>
  );
};
