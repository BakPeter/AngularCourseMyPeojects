import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidetors {
  static projectForbidenName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { forbiddenProjectName: true };
    }

    return null;
  }

  static asyncProjectForbidenName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Testproject') {
          resolve({ forbiddenProjectName: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
