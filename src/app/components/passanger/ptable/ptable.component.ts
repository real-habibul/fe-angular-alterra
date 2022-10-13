import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IPassanger } from 'src/app/models/IPassanger';
import { PassangerService } from 'src/app/service/passanger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ptable',
  templateUrl: './ptable.component.html',
  styleUrls: ['./ptable.component.scss']
})
export class PtableComponent implements OnInit {

  listArray: IPassanger[] = [];

  constructor(private service: PassangerService, private router: Router) { }
    // this.listArray = this.service.getData();

  // listArray: any;

  @Output() updateEvent = new EventEmitter<any>();

  @Output() prosesEdit = new EventEmitter<{ isEdit: boolean, formPassangerTitle: string }>();
  isEdit: boolean = true;
  formPassangerTitle: string = 'Edit Passanger';

  onProsesEdit() {
    this.prosesEdit.emit({
      isEdit: this.isEdit,
      formPassangerTitle: this.formPassangerTitle
    });
  }

  onDelete(id: any) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.service.deleteData(id);
    }
  }

  ngOnInit(): void {
    this.listArray = this.service.getData();
  }

  onDetails(data: any) {
    this.service.setListArray(data);
    this.router.navigateByUrl('/passanger/detail-passanger');


    // this.service.listArray$.next(data);

    // this.service.selectedListArray$.subscribe(data => {
    //   this.listArray = data;
    // });
  }

}
