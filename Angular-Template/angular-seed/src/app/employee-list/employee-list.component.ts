import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IEmployee } from '../interfaces/IEmployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnChanges {
 
  filteredEmployees: IEmployee[];

  public pageTitle: string;
  public employees: IEmployee[];
  

  /**
   *
   */
 
  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(v: string) {
    this._listFilter = v;
    this.filteredEmployees = this._listFilter ? this.performFilter(this.listFilter): this.employees;
  }

  constructor() {
    this.pageTitle = 'PRODUCT LIST';
    this.employees = [
      {
        code: 'c-100',
        firstName: 'Anand',
        lastName: 'Jayaprakash',
        dob: '09/21/1977',
        salary: 1000,
        rank: 0
      },
      {
        code: 'c-100',
        firstName: 'Anand',
        lastName: 'Jayaprakash',
        dob: '09/21/1977',
        salary: 1000,
        rank: 0
      }
    ];
    
    this.filteredEmployees = this.employees;
    this.listFilter = 'anand';

  }

  ngOnInit() {
    console.log('in onInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
      }

      performFilter(filterBy: string): IEmployee[] {
        filterBy = filterBy.toLowerCase();
        return this.employees.filter((emp: IEmployee) => emp.firstName.toLowerCase().indexOf(filterBy)!== -1)
      }

      IncrementRank(emp: IEmployee): void {
        //console.log("incrementing rank");
        emp.rank++;
      }

      onRatingClicked(val: number, emp: IEmployee): void {
        emp.rank = emp.rank - val;
        //console.log(emp.firstName);
      }

}
