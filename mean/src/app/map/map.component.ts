import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude = 51.678418;
  longitude = 7.809007;
  constructor() { }

  ngOnInit(): void {
  }

}
