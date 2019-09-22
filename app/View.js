export class View {
  constructor(controller) {
    this.controller = controller;
    this.root = document.getElementById('root');
  }

  render() {
    this.root.innerHTML = `
      <div class="main-value">
        <div class="background">
          <span>888</span>
          <span>88.88</span>
          <span>88.88</span>
        </div>
        <div class="foreground">
          <span>CUR</span>
          <span class="value">BU Y </span>
          <span class="value">SE LL</span>
        </div>
      </div>`
  }

  update(data) {
    data.forEach((item) => {
      if (item.base_ccy === 'UAH') {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
          <div class="main-value">
            <div class="background">
              <span>888</span>
              <span>88.88</span>
              <span>88.88</span>
            </div>
            <div class="foreground">
              <span>${item.ccy}</span>
              <span class="value">${parseFloat(item.buy).toFixed(2).padStart(5, 0)}</span>
              <span class="value">${parseFloat(item.sale).toFixed(2).padStart(5, 0)}</span>
            </div>
          </div>`;
        this.root.append(newDiv);
      }
    });
    this.addRandomBlinkClass();
  }

  addRandomBlinkClass() {
    let spanForegroundElem = document.querySelectorAll('.foreground span');
    let spanLength = spanForegroundElem.length;
    spanForegroundElem[Math.floor(Math.random() * spanLength)].classList.add('neon-blink');
  }

}
