import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identityApi, api } from '../../constants';
import { ResultModel } from '../../models/result.model';
import { AuthService } from '../auth/auth.service';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private error: ErrorService
  ) {}
//#region IDENTITY SERVICES
  postIdentity<T>(
    apiUrl: string,
    body: any,
    callBack: (res: T) => void,
    errorcallBack?: () => void
  ) {
    this.http
      .post<ResultModel<T>>(`${identityApi}/${apiUrl}`, body, {
        headers: {
          "Authorization": "Bearer " + this.auth.token,
        },
      })
      .subscribe({
        next: (res) => {
          if (res.data) {
            callBack(res.data);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.error.errorHandler(err);
          if (errorcallBack) {
            errorcallBack();
          }
        },
      });
  }

  getIdentity<T>(
    apiUrl: string,
    query?: Record<string, string>,
    callBack?: (res: T) => void,
    errorcallBack?: (err: any) => void
  ) {
    const params = query ? new HttpParams({ fromObject: query }) : undefined;
    this.http
    .get<ResultModel<T>>(`${identityApi}/${apiUrl}`, {
      headers: {
        Authorization: 'Bearer ' + 'token', // Bearer token'ı ekledik
      },
      params, // Query parametrelerini ekledik
    })
    .subscribe({
      next: (res) => {
        if (res.data && callBack) {
          callBack(res.data); // Başarılı yanıt
        }
      },
      error: (err: HttpErrorResponse) => {
        if (this.error?.errorHandler) {
          this.error.errorHandler(err); // Hata işleme mantığınız
        }
        if (errorcallBack) {
          errorcallBack(err); // Hata callback fonksiyonu
        } else {
          console.error('Hata oluştu:', err);
        }
      },
    });
  }
//#endregion

//#region CRUD SERVICES
  post<T>(
    apiUrl: string,
    body: any,
    callBack: (res: T) => void,
    errorcallBack?: () => void
  ) {
    this.http
      .post<ResultModel<T>>(`${api}/${apiUrl}`, body, {
        headers: {
          "Authorization": "Bearer " + this.auth.token,
        },
      })
      .subscribe({
        next: (res) => {
          if (res.data) {
            callBack(res.data);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.error.errorHandler(err);
          if (errorcallBack) {
            errorcallBack();
          }
        },
      });
  }

  get<T>(
    apiUrl: string,
    query?: Record<string, string>,
    callBack?: (res: T) => void,
    errorcallBack?: (err: any) => void
  ) {
    const params = query ? new HttpParams({ fromObject: query }) : undefined;
    this.http
    .get<ResultModel<T>>(`${api}/${apiUrl}`, {
      headers: {
        Authorization: 'Bearer ' + 'token', // Bearer token'ı ekledik
      },
      params, // Query parametrelerini ekledik
    })
    .subscribe({
      next: (res) => {
        if (res.data && callBack) {
          callBack(res.data); // Başarılı yanıt
        }
      },
      error: (err: HttpErrorResponse) => {
        if (this.error?.errorHandler) {
          this.error.errorHandler(err); // Hata işleme mantığınız
        }
        if (errorcallBack) {
          errorcallBack(err); // Hata callback fonksiyonu
        } else {
          console.error('Hata oluştu:', err);
        }
      },
    });
  }
//#endregion  
}
