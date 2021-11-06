/* class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    };
    this.time = targetDate.getTime();
    this.id = selector;
    setInterval(this.counter.bind(this), 1000);
  }

  counter() {
    this.refs.days.textContent = Math.floor(
        (this.time - Date.now()) / (1000 * 60 * 60 * 24),
      )
      .toString()
      .padStart(2, '0');
    this.refs.hours.textContent = Math.floor(
        ((this.time - Date.now()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      .toString()
      .padStart(2, '0');
    this.refs.mins.textContent = Math.floor(
        ((this.time - Date.now()) % (1000 * 60 * 60)) / (1000 * 60),
      )
      .toString()
      .padStart(2, '0');
    this.refs.secs.textContent = Math.floor(
        ((this.time - Date.now()) % (1000 * 60)) / 1000,
      )
      .toString()
      .padStart(2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jule 17, 2020'),
});
 */
