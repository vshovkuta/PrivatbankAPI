export class View {
  constructor(controller) {
    this.controller = controller;
    this.root = document.getElementById('root');
  }

  render() {
    this.root.innerHTML = `
      <div class="main-title">
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
      <div id="main-content"></div>
      <div id="updated-time">updated: --.--.----, --:--:--</div>
      <div id="updated-auto">
        <span>autoupdate:</span>
        <select id="updated-auto-value">
          <option selected value="disable">disable</option>
          <option value="10">10 sec</option>
          <option value="30">30 sec</option>
          <option value="60">1 min</option>
          <option value="300">5 min</option>
        </select>
      </div>`;

    this.timer = document.getElementById('updated-auto-value');
    this.timer.addEventListener('change', () => {
      this.controller.autoUpdateData(this.timer.value);
    });
  }

  update(data, time) {
    // let oldValue = [...document.getElementsByClassName('main-value')];
    // oldValue.forEach((item) => item.remove());
    let mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';


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
        mainContent.append(newDiv);
      }
    });

    this.addRandomBlinkClass();
    this.updateTime(time);
  }

  addRandomBlinkClass() {
    let divForegroundElem = document.querySelectorAll('.main-value .foreground div');
    let divLength = divForegroundElem.length;

    divForegroundElem[Math.floor(Math.random() * divLength)].classList.add('neon-blink');
  }

  updateTime(time) {
    document.getElementById('updated-time').innerText = `updated: ${time.toLocaleString()}`;
  }
}
