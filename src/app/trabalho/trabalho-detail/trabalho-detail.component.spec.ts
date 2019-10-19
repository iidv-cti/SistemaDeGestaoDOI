import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhoDetailComponent } from './trabalho-detail.component';

describe('TrabalhoDetailComponent', () => {
  let component: TrabalhoDetailComponent;
  let fixture: ComponentFixture<TrabalhoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
