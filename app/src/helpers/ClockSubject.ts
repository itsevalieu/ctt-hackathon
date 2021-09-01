export type ClockObserver = (time: String) => void;

class ClockSubject {
  private observers: ClockObserver[] = [];
  private intervalId: null | ReturnType<typeof setTimeout> = null;

  public subscribe(observer: ClockObserver) {
    this.observers.push(observer);
  }
  public unsubscribe(observerToRemove: ClockObserver) {
    this.observers = this.observers.filter(
      (observer) => observerToRemove !== observer
    );
  }
  public updateClock() {
    this.intervalId = setInterval(() => {
      const clock = this.fetchClock();
      this.notify(clock.time);
      console.log("clock", clock.time);
    }, 1000);
  }
  public cleanUpdates() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  public fetchClock() {
    const dateTime = new Date();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    // console.log("dateTime", dateTime.getHours());
    return { time: `${hours}:${minutes}` };
  }
  private notify(time: String) {
    this.observers.forEach((observer) => observer(time));
  }
}
const clockSubject = new ClockSubject();
export default clockSubject;
