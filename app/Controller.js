import {View} from './View.js';
import {Model} from './Model.js';

export class Controller {
  constructor() {
    this.autoUpdateTimerId;
    this.model = new Model(this);
    this.view = new View(this);

    this.view.render();
    this.model.getValue();
  }

  updateData(data, time) {
    this.view.update(data, time);
  }

  autoUpdateData(delay) {
    clearInterval(this.autoUpdateTimerId);

    if (delay === "disable") {
      clearInterval(this.autoUpdateTimerId);
    } else {
      this.autoUpdateTimerId = setInterval(() => {this.model.getValue()}, delay*1000);
    }
  }
}
