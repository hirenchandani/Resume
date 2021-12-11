import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { TooltipPosition } from "@angular/material/tooltip";
import { FormControl } from "@angular/forms";
import { FlatTreeControl } from "@angular/cdk/tree";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from "@angular/material/tree";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBar } from "@angular/material/snack-bar";

export interface PeriodicElement {
  name: string;
  position: number;
  percentage: number;
  University: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: "Vidyanidhi Info Tech (VITA MUMBAI)",
    percentage: 69.75,
    University: "CDAC",
  },
  {
    position: 2,
    name: "HJD Institute of Technical Education Research",
    percentage: 81,
    University: "GTU",
  },
  {
    position: 3,
    name: "Tolani Foundation Gandhidham Polytechnic",
    percentage: 72,
    University: "GTU",
  }
];


interface PeriodicElement1 {
  projectTitle: string;
  projectDesc: string;
}


//hiren
const ELEMENT_DATA1: PeriodicElement1[] = [
  {
    projectTitle: "Bookworm",
    projectDesc: "Angular 8 + Bootstrap , WebAPI, LINQ , C# , Entity Framework",
  },
  {
    projectTitle: "Emart",
    projectDesc: "ASP.NET MVC 5 + Bootstrap + C# + SQL Ado.Net",
  },
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "ResumeApp";
  panelOpenState = false;
  dataSourceTwo: MatTableDataSource<PeriodicElement1>;
  displayedColumnsTwo: string[] = ["projectTitle", "projectDesc"];
  @ViewChild("TableTwoPaginator", { static: true })
  tableTwoPaginator: MatPaginator;
  @ViewChild("TableTwoSort", { static: true }) tableTwoSort: MatSort;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.dataSourceTwo = new MatTableDataSource();
  }

  ngOnInit() {
    this.dataSourceTwo.data = ELEMENT_DATA1;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
  }

  columns = [
    {
      columnDef: "position",
      header: "No.",
      cell: (element: PeriodicElement) => `${element.position}`,
    },
    {
      columnDef: "name",
      header: "Name",
      cell: (element: PeriodicElement) => `${element.name}`,
    },
    {
      columnDef: "percentage",
      header: "percentage",
      cell: (element: PeriodicElement) => `${element.percentage}`,
    },
    {
      columnDef: "University",
      header: "University",
      cell: (element: PeriodicElement) => `${element.University}`,
    },
  ];
  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map((c) => c.columnDef);
  typesOfShoes: string[] = ["Java Script", "HTML", "CSS"];

  gepwork: string[] = [
    "Involved with resolution of complex software development issues that may arise in a production environment. Analyzes problems, conducts root cause analysis, helps in resolution of problems using defined problem management procedure",
    "AAAAAAAAAAAAA",
  ];

  openSnackBar(message: string) {
    this._snackBar.open(message,'', {
      duration: 2000,
    });  
  }
}
