import { Component } from '@angular/core';
import { CoinsService } from '../services/coins.service';
import { Data } from '../interfaces/coin.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  coins: Data[] = [];

  constructor(private coinsService: CoinsService) {}

  ngOnInit(): void {
    this.getCoins();

  }

  getCoins() {
    this.coinsService.getCoins()
      .subscribe(coins => {
        // console.log(coins);
        this.coins = coins.data
      });
  }

}
