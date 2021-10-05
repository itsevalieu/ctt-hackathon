import { useEffect, useState } from "react";
import styled from "styled-components";
import clockSubject, { ClockObserver } from "../../helpers/ClockSubject";

export default function Event() {
  const EventSection = styled.section`
    border-bottom: 1px solid #fff;
    display: flex;
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
    <EventSection>
      <div>Event</div>
      <span data-testid="current-time">{currentTime}</span>
    </EventSection>
  );
}
