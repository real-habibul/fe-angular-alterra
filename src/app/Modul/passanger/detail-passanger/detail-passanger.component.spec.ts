import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPassangerComponent } from './detail-passanger.component';

describe('DetailPassangerComponent', () => {
  let component: DetailPassangerComponent;
  let fixture: ComponentFixture<DetailPassangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPassangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPassangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
