import {View} from './View.js';
import {Model} from './Model.js';

export class Controller {
  constructor() {
    this.model = new Model(this);
    this.view = new View(this);

    this.view.render();
    this.model.getValue();
  }

  updateData(data, time) {
    this.view.update(data, time);
  }
}
