import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ENDPOINT: string = environment.ENPOINT_LOGIN;

  constructor(private http: HttpClient) { }

  async login(email: string, password: string) {
    return new Promise<any>((resolve) => {
      this.http.post(this.ENDPOINT, {email, password})
        .subscribe(async(resp) => {
          console.log(resp);
          if (resp['statusCode'] === 200) {
            resolve(true)
          } else {
            resolve(false)
          }
        });
      });
    }

}
