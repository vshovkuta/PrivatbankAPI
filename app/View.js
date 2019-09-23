export class View {
  constructor(controller) {
    this.controller = controller;
    this.root = document.getElementById('root');
  }

  render() {
    this.root.innerHTML = `
      <div class="main-value">
        <div class="background">
          <div class="value">888</div>
          <div class="screen">88.88</div>
          <div class="screen">88.88</div>
        </div>
        <div class="foreground">
          <div class="value">CUR</div>
          <div class="screen">BU Y </div>
          <div class="screen">SE LL</div>
        </div>
      </div>
      <div id="updated-time">updated: --.--.----, --:--:--</div>`
  }

  update(data, time) {
    data.forEach((item) => {
      if (item.base_ccy === 'UAH') {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
          <div class="main-value">
            <div class="background">
              <div class="value">888</div>
              <div class="screen">88.88</div>
              <div class="screen">88.88</div>
            </div>
            <div class="foreground">
              <div class="value">${item.ccy}</div>
              <div class="screen">${parseFloat(item.buy).toFixed(2).padStart(5, 0)}</div>
              <div class="screen">${parseFloat(item.sale).toFixed(2).padStart(5, 0)}</div>
            </div>
          </div>`;
        this.root.append(newDiv);
      }
    });
    this.addRandomBlinkClass();
    this.updateTime(time);
  }

  addRandomBlinkClass() {
    let divForegroundElem = document.querySelectorAll('.foreground div');
    let divLength = divForegroundElem.length;
    divForegroundElem[Math.floor(Math.random() * divLength)].classList.add('neon-blink');
  }

  updateTime(time) {
    document.getElementById('updated-time').innerText = `updated: ${time.toLocaleString()}`;
  }
}
