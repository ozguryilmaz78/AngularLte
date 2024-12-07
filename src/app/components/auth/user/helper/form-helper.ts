import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class FormHelper {
  static required(message: string = 'Bu alan zorunludur.'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value ? null : { required: message };
    };
  }

  static email(message: string = 'Geçerli bir e-posta adresi giriniz.'): ValidatorFn {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (control: AbstractControl): ValidationErrors | null => {
      return emailRegex.test(control.value) ? null : { email: message };
    };
  }

  static minLength(length: number, message: string = `En az ${length} karakter olmalıdır.`): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value && control.value.length >= length ? null : { minLength: message };
    };
  }

  static maxLength(length: number, message: string = `En fazla ${length} karakter olmalıdır.`): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value && control.value.length <= length ? null : { maxLength: message };
    };
  }

  static passwordMatch(passwordField: string, confirmPasswordField: string, message: string = 'Şifreler eşleşmiyor.'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get(passwordField)?.value;
      const confirmPassword = control.get(confirmPasswordField)?.value;
      return password === confirmPassword ? null : { passwordMismatch: message };
    };
  }
}
