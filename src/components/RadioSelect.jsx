export const RadioSelect = ({ coffeeSize, onChange }) => {

  return (
    <>
      <h1>Select coffee size</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === 'sm'}
          onChange={(evt) => onChange(evt.target.value)}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === 'md'}
          onChange={(evt) => onChange(evt.target.value)}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === 'lg'}
          onChange={(evt) => onChange(evt.target.value)}
        />
        Large
      </label>
    </>
  );
};
