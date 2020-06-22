import {Component, OnInit} from '@angular/core';
import {Car} from './car';
import {CarServiceService} from './services/car-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'teai71Front';

  carList: Car[];
  car: Car;
  productionDates = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
    2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  sinceDate: number;
  toDate: number;

  constructor(private carServiceService: CarServiceService) {
    this.car = new Car();
  }

  ngOnInit(): void {
    this.carServiceService.getListCar().subscribe(value => {
      this.carList = value;
    });
  }

  onSubmit(){
    this.carServiceService.getListCarByDate(this.sinceDate, this.toDate).subscribe(value => {
      this.carList = value;
    });
  }

  onSubmitAdd(){
    this.carServiceService.addCar(this.car).subscribe();
  }
}
