import { Component, OnInit } from '@angular/core';
import { PassangerService } from 'src/app/service/passanger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-passanger',
  templateUrl: './detail-passanger.component.html',
  styleUrls: ['./detail-passanger.component.scss']
})
export class DetailPassangerComponent implements OnInit {

  constructor(private service: PassangerService, private router: Router ) { }

  onSelectedPassanger(passanger: any) {
    this.service.setListArray(passanger);
  }

  onBack() {
    this.router.navigateByUrl('/passanger');
  }

  detailItem: any;

  ngOnInit(): void {
    this.service.selectedListArray$.subscribe(data => {
      this.detailItem = data;
    });

  }

}
