import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  filterNames = [];

  constructor() { }

  ngOnInit() {
  }

  setNames(data: Array<string>) {
    this.filterNames = data;
  }

}
