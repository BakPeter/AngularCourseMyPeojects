import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidetors } from './custom-validators';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  formProject: FormGroup;
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  // forbidenProjectNames = ['Test'];

  ngOnInit(): void {
    this.formProject = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidetors.projectForbidenName],
        CustomValidetors.asyncProjectForbidenName
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(
        this.projectStatuses[0],
        Validators.required
      ),
    });
  }

  onProjectSubmmit() {
    console.log(this.formProject);
  }

  // projectForbidenName(control: FormControl): { [s: string]: boolean } {
  //   if (this.forbidenProjectNames.indexOf(control.value) !== -1) {
  //     return { forbiddenProjectName: true };
  //   }

  //   return null;
  // }
  // projectForbidenName(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (this.forbidenProjectNames.indexOf(control.value) !== -1) {
  //         resolve({ forbiddenProjectName: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1500);
  //   });

  //   return promise;
  // }
}
