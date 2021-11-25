import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import * as CryptoJS from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class AllInOneService {

  //
  input_err_msg = "This field cannot be empty!"

  // secret key for encryption , decryption
  private secretKey: string = 't@stYs0ft@2021#';

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  // Set cookie function 
  setCookie(key: string, value: string) {
    const expiredDate = new Date();
    expiredDate.setTime(expiredDate.getTime() + (365 * 24 * 60 * 60 * 1000));
    this.cookieService.put(this.encrypt(key), this.encrypt(value), { expires: expiredDate, sameSite: 'lax', path: '/' })
  }

  // Get from cookie 
  getToken() {
    return this.decrypt(this.cookieService.get(this.encrypt("atoken"))) || "";
  }

  logout() {
    this.cookieService.removeAll();
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('/signin');
  }

  // data encryption
  encrypt(value: any) {
    var key = CryptoJS.enc.Utf8.parse(this.secretKey);
    var iv = CryptoJS.enc.Utf8.parse(this.secretKey);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

    return encrypted.toString();
  }


  // data decryption
  decrypt(value: any) {
    if (value) {
      var key = CryptoJS.enc.Utf8.parse(this.secretKey);
      var iv = CryptoJS.enc.Utf8.parse(this.secretKey);
      var decrypted = CryptoJS.AES.decrypt(value, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

      return decrypted.toString(CryptoJS.enc.Utf8);
    }
    else {
      return "";
    }
  }
}
