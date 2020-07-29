export class Model {
  user;
  items;
  tum;

  constructor() {
    this.user = "Arda"
    this.tum=false
    this.items = [
      new item("spor", false),
      new item("spor1", true),
      new item("spo2r", false),
      new item("spor3", false),
      new item("spor4", true),

    ]

  }

}

export class item {
  description;
  action;

  constructor(description, action) {
    this.description = description;
    this.action = action;
  }
}
