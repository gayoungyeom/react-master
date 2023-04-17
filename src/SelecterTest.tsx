import { FormEvent } from 'react';
import { hourSelector, minuteState } from './atoms';
import { useRecoilState } from 'recoil';

const SelectorTest = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);

  const handleMinutesChange = (e: FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value);
  };

  const handleHoursChange = (e: FormEvent<HTMLInputElement>) => {
    setHours(+e.currentTarget.value);
  };

  return (
    <div>
      <input
        value={minutes}
        onChange={handleMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={handleHoursChange}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
};

export default SelectorTest;
