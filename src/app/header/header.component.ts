import { Component } from '@angular/core';
import {DatatstorageService} from 'app/shared/datatstorage.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private datastorage:DatatstorageService){}
  saveData()
  {
    this.datastorage.saveDataToDataFireBase()
  }
  setData()
  {
    this.datastorage.getDataFromFireBase()
  }
}
