import { Employee } from '../../models/employee.model';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  loading = false;
  errorMessage = '';

  searchTerm : string = '';
  filterAge : number | null = null;
  constructor( private employeeService: EmployeeService){

  }

  ngOnInit(): void{
    this.fetchEmployees();
  }

  fetchEmployees(){
    this.loading = true;
    this.employeeService.getEmployees().subscribe({
      next : (data) => {
        this.employees = data;
        this.filteredEmployees = [...data];
        this.loading = false;
      },
      error : (error) => {
        this.errorMessage = error.message || 'Something went wrong';
        this.loading = false;
      }
    })
  }

  applyFilters(){
    const term = this.searchTerm.toLowerCase();
    this.filteredEmployees = this.employees.filter(
      emp => {
        const fullName = (emp.firstName + ' ' + emp.lastName).toLowerCase();
        const email = emp.email.toLowerCase();

        const nameOrEmalMatch =  fullName.includes(term) || email.includes(term);

        const ageMatch = this.filterAge? emp.age === +this.filterAge : true;

        return nameOrEmalMatch && ageMatch;
      }
    )
  }
}
