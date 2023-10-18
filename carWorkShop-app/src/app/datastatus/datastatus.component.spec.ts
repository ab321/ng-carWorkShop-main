import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastatusComponent } from './datastatus.component';

describe('DatastatusComponent', () => {
  let component: DatastatusComponent;
  let fixture: ComponentFixture<DatastatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatastatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatastatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
