import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PtableComponent } from 'src/app/components/passanger/ptable/ptable.component';
import { PassangerService } from 'src/app/service/passanger.service';

@Component({
  selector: 'app-passanger',
  templateUrl: './passanger.component.html',
  styleUrls: ['./passanger.component.scss']
})
export class PassangerComponent implements OnInit {
  @ViewChild(PtableComponent) viewData !: PtableComponent;

  constructor(private service: PassangerService) { }

  in_id: any;
  in_nama: any;
  in_kota: any;

  // passangerData = { id: "", nama: "", kota: "" };
  passangerData: any;

  isEdit = false;
  formPassangerTitle: string = this.isEdit ? 'Edit Passanger' : 'Add Passanger';

  resetField() {
    this.in_id = '';
    this.in_nama = '';
    this.in_kota = '';
  }

  onSubmit() {
    this.passangerData = { id: this.in_id, nama: this.in_nama, kota: this.in_kota };
    this.service.saveData(this.passangerData);
    this.resetField();
  }

  onUpdate(obj: any) {
    this.in_id = obj.id;
    this.in_nama = obj.nama;
    this.in_kota = obj.kota;
  }

  onEdit() {
    this.passangerData = { id: this.in_id, nama: this.in_nama, kota: this.in_kota };
    this.service.updateData(this.passangerData);
    this.resetField();
    this.isEdit = false;
  }

  dataFromChild(eventData : any) {
    this.isEdit = eventData.isEdit;
    this.formPassangerTitle = eventData.formPassangerTitle;
  }

  ngOnInit(): void {
  }

}
