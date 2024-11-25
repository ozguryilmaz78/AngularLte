import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwalService } from './swal.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private swal: SwalService
  ) { }
  errorHandler(err:HttpErrorResponse){
    if (err.status === 403)
    {    
      let errorMessage :string = "";
      for(const e of err.error.ErrorMessages)
      {
        errorMessage+=e + "\n";
      }
      this.swal.callToast("Hata!",errorMessage,"error");
    }
    else if (err.status === 500)
    {
      let errorMessage :string = "";
      for(const e of err.error.errorMessages)
        {
          errorMessage+=e + "\n";
        }
        this.swal.callToast("Hata!",errorMessage,"error");
    }
    else if (err.status === 400)
      {
        let errorMessage :string = "";
        for(const e of err.error.errorMessages)
          {
            errorMessage+=e + "\n";
          }
          this.swal.callToast("Hata!",errorMessage,"error");
      }
  }
}
