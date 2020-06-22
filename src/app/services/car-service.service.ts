import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../car';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:8080/cars';
  }

  public getListCar(): Observable<Car[]>{
    return this.httpClient.get<Car[]>(this.baseUrl);
  }

  public getListCarByDate(sinceDate: number, toDate: number): Observable<Car[]>{
    return this.httpClient.get<Car[]>(this.baseUrl + '/' + sinceDate + '/' + toDate);
  }

  public addCar(car: Car) {
    return this.httpClient.post<Car>(this.baseUrl, car);
  }


}
