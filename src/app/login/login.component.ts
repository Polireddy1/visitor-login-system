import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selectedForm: string = 'employee';

  // Create form groups for each type of form
  employeeForm = new FormGroup({
    employeeEmail: new FormControl('', [Validators.required, Validators.email]),
    employeePassword: new FormControl('', [Validators.required])
  });

  adminForm = new FormGroup({
    adminUsername: new FormControl('', [Validators.required]),
    adminPassword: new FormControl('', [Validators.required])
  });

  visitorForm = new FormGroup({
    visitorFullName: new FormControl('', [Validators.required]),
    visitorEmail: new FormControl('', [Validators.required, Validators.email]),
    visitorMobile: new FormControl('', [Validators.required]),
    visitorPOC: new FormControl('', [Validators.required]),
    visitorReason: new FormControl('', [Validators.required]),
    visitorPOCDesignation: new FormControl('', [Validators.required])
  });

  constructor(private formBuilder: FormBuilder) {
   
  }

  showForm(formType: string) {
    this.selectedForm = formType;
  }

  submitEmployeeForm() {
    // Handle employee form submission
    if (this.employeeForm.valid) {
      const formData = this.employeeForm.value;
      // Submit the data or perform other actions
    }
  }

  submitAdminForm() {
    // Handle admin form submission
    if (this.adminForm.valid) {
      const formData = this.adminForm.value;
      // Submit the data or perform other actions
    }
  }

  submitVisitorForm() {
    // Handle visitor form submission
    if (this.visitorForm.valid) {
      const formData = this.visitorForm.value;
      // Submit the data or perform other actions
    }
  }

}
