import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Coin } from '../interfaces/coin.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  ENDPOINT: string = environment.ENDPOINT_COINS;

  constructor(private http: HttpClient) { }

  getCoins() {
    return this.http.get<Coin>(this.ENDPOINT);
  }
}
