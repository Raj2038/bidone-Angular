import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  firstName: string = '';
  lastName: string = '';

  constructor(private http: HttpClient) { }

  submitForm(): void {
    const formData = {
      firstName: this.firstName,
      lastName: this.lastName
    };

    this.http.post('http://localhost:5698/api/form/submit', formData).subscribe(
      () => {
          alert('Form submitted successfully!');
          this.resetForm();
      },
      error => {
          console.log(error);
          alert('An error occurred while submitting the form.');
      }
  );
  }

  resetForm(): void {
    this.firstName = '';
    this.lastName = '';
  }
}

