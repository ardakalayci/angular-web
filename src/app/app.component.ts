import {Component} from '@angular/core';
import {Model, item} from "./modern";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secilidizi;
  title = 'Deneme';
  name = "dede"
  isim;
  duzen;
  duzenvar;
  model = new Model();

  getName() {
    return this.model.user
  }

  getItems() {
    if (this.model.tum == false)
      return this.model.items.filter(item => !item.action);
    else
      return this.model.items;


  }

  ekleItem(value) {
    if (value != "") {
      this.model.items.push(new item(value, false))


    }


  }

  secili(dizi: item): void {
    this.secilidizi = dizi;
    if (dizi.action == "false")
      this.isim = "bitti"
    else
      this.isim = "bitmedi"

  }

  duzenle(dizi: item): void {
    this.duzenvar = true;
    this.duzen = dizi;
  }

  guncelle(item) {
    this.duzenvar = false;
    this.secilidizi.description = item


  }
}

