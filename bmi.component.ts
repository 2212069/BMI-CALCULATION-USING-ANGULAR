import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bmi',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  weight: number = 70;
  height: number = 1.75;
  bmi: number | null = null;
  category: string = '';

  calculateBMI() {
    if (this.height > 0) {
      this.bmi = this.weight / (this.height * this.height);
      this.categorizeBMI();
    } else {
      alert('Height must be greater than zero.');
    }
  }

  categorizeBMI() {
    if (this.bmi === null) return;
    
    if (this.bmi < 18.5) {
      this.category = "Underweight";
    } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
      this.category = "Normal weight";
    } else if (this.bmi >= 25 && this.bmi < 29.9) {
      this.category = "Overweight";
    } else {
      this.category = "Obese";
    }
  }
}
