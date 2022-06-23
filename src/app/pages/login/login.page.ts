import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email: 'test13652358@dish.com.mx',
    password: 't3st3r'
  }

  constructor(
    private loginService: LoginService,
    private navController: NavController,
    private uiService: UiService) { }

  ngOnInit() {
  }

  async login(formLogin: NgForm) {
    // console.log(formLogin.valid);

    if (formLogin.invalid) {
      this.uiService.showInfAlert('Por favor, llenar los campos email y contraseña');
      return;
    }

    const isValido = await this.loginService.login(this.loginUser.email, this.loginUser.password);

    if (isValido) {
      this.navController.navigateRoot('/home', { animated: true });
    } else {
      this.uiService.showInfAlert('Por favor, validar email o contraseña');
    }
  }

}
