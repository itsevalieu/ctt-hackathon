import { useEffect, useState } from "react";
import styled from "styled-components";
import clockSubject, { ClockObserver } from "../../helpers/ClockSubject";

export interface ActionProps {
  name: string;
}
export interface IActions {
  actions: ActionProps[];
}
export default function Action({ actions }: IActions) {
  const ActionSection = styled.section`
    display: flex;
  `;
  const ActionButton = styled.button`
    background-color: #000;
    color: #fff;
    border: 1px solid #fff;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
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
    <ActionSection>
      {actions.map((action, index) => (
        <ActionButton key={index}>{action.name}</ActionButton>
      ))}
      <span data-testid="current-time">{currentTime}</span>
    </ActionSection>
  );
}
