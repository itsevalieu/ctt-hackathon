import { useEffect, useState } from "react";
import clockSubject, { ClockObserver } from "../../helpers/ClockSubject";

export default function Event() {
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
    <section>
      <div>Event</div>
      Clock: <span data-testid="current-time">{currentTime}</span>
    </section>
  );
}
