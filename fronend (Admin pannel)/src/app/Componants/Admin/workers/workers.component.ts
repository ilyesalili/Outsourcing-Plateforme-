import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { fadeInAnimation } from 'src/app/Animations/fade-in.animation';
import { MatTableDataSource } from '@angular/material/table';
import axios from 'axios';
export interface Element {
  firstName: string,
  lastName: string,
  email: string,
  // position: number,
  // weight: number,
  signUpDate:Date,
  
  status:string,
  userId:string
  
}


@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  animations: [fadeInAnimation],
})
export class WorkersComponent {
  constructor(){
    this.fetchWorkers();
  }
position=0;
   DATA: Element[]=[];
  dataLoaded: boolean | undefined;
  ngOnInit(): void {
    
    if ((this.dataSource = new MatTableDataSource(this.DATA))) {
      this.dataLoaded = true;
    }
  }

  //fetch workers from server
   fetchWorkers(){
    const token=localStorage.getItem('Token')
    axios.get('http://localhost:7777/workers/admin/workers',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    )
      .then(response => {
        // Handle the response
        this.DATA = response.data;
        console.log(this.DATA);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  }



  displayedColumns = ['position', 'name','email', 'createdAt', 'status','symbol'];
  
  
  dataSource = new MatTableDataSource<Element>(this.DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    });
  }
  editItem(item: any): void {
    // Afficher une boîte de dialogue ou une page de modification pour l'élément
    console.log("Modifier l'élément :", item);
  }

  deleteItem(item: any): void {
    console.log("Supprimer l'élément :", item);
  }
  deleteRow(rowData: any): void {
    const index = this.dataSource.data.indexOf(rowData);
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription(); // Refresh the data source
    }
    this.deleteItem(rowData);
  }

  blockItem(item: any): void {
    console.log("Bloquer l'élément :", item);
  }
  firstPage() {
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }

  searchText: string = '';

  // filterElements() {
  //   if (!this.searchText || this.searchText === null) {
  //     this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  //     this.ngAfterViewInit();
  //   } else {
  //     const filteredData = ELEMENT_DATA.filter(
  //       (element) =>
  //         element.position.toString().includes(this.searchText) ||
  //         element.name.toLowerCase().includes(this.searchText.toLowerCase())
  //     );
  //     if (filteredData.length === 0) {
  //       let nullElement: any = {
  //         name: 'null',
  //         position: 'null',
  //         weight: 'null',
  //         symbol: 'null',
  //       };
  //       this.dataSource.data.push(nullElement);
  //     } else {
  //       this.dataSource = new MatTableDataSource(filteredData);
  //     }
  //   }
  // }
  
  filterElements() {
    if (!this.searchText) {
      this.dataSource = new MatTableDataSource(this.DATA);
      this.ngAfterViewInit();
    } else {
      // const filteredData = this.DATA.filter(element =>
      //   // element.position.toString().includes(this.searchText) ||
      //   // element.name.toLowerCase().includes(this.searchText.toLowerCase())
      // );
      // this.dataSource = new MatTableDataSource(filteredData);
    }
  }
}
