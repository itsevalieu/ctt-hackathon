import { useEffect, useState } from "react";
import clockSubject, { ClockObserver } from "../../helpers/ClockSubject";
import styled from "styled-components";
export default function Clock() {
  const ClockSection = styled.section`
    border-bottom: 1px solid #fff;
    text-align: right;
    padding: 5px;
  `;

  const [currentTime, setCurrentTime] = useState<String>();
  const onTimeUpdated: ClockObserver = (time: String) => {
    setCurrentTime(time);
  };
  useEffect(() => {
    const initialTime = clockSubject.fetchClock();
    setCurrentTime(initialTime.time);
    clockSubject.updateClock();
    clockSubject.subscribe(onTimeUpdated);
    return () => clockSubject.unsubscribe(onTimeUpdated);
  }, []);
  return (
    <ClockSection>
      <span data-testid="current-time">{currentTime}</span>
    </ClockSection>
  );
}
