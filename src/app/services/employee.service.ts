import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, throwError } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http:HttpClient) { }

private apiUrl = 'http://localhost:3000/employees';

getEmployees() : Observable<Employee[]>{
  return this.http.get<Employee[]>(this.apiUrl).pipe(
    delay(1000),
    catchError( error => {
      console.error('Error fetching employees:', error);

      return throwError(()=>new Error('Failed to fetch employee data'));
    })
  );
}
}
