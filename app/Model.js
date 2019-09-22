export class Model {
  constructor(controller) {
    this.controller = controller;
    this.baseApiURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

    this.getValue();
    };

    getValue() {
      fetch(this.baseApiURL).then((result) => result.json())
                            .then((resultJSON) => {
                              this.controller.updateData(resultJSON);
                            });
    }

}
