import { useEffect, useState } from "react";
import clockSubject, { ClockObserver } from "../../helpers/ClockSubject";

export interface ActionProps {
  name: string;
}
export interface IActions {
  actions: ActionProps[];
}
export default function Action({ actions }: IActions) {
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
      <div>Action</div>
      Clock: <span data-testid="current-time">{currentTime}</span>
      {actions.map((action, index) => (
        <button key={index}>{action.name}</button>
      ))}
    </section>
  );
}
