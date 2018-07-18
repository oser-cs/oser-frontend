import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeocodingService, Geocoder } from 'app/core';

@Component({
  selector: 'app-visit-location-map',
  templateUrl: './visit-location-map.component.html',
  styleUrls: ['./visit-location-map.component.scss']
})
export class VisitLocationMapComponent implements OnInit {

  @Input() address: string;
  @Input() geocoder: Geocoder;
  lat = 50;
  lng = 3;

  constructor(
    private geocoding: GeocodingService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getVisitLocation();
  }

  getVisitLocation() {
    this.geocoding.locate(this.geocoder, this.address).subscribe(
      location => {
        this.lat = location.lat;
        this.lng = location.lng;
      }
    );
  }

}
