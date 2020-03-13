import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadicalInnovationComponent } from './radical-innovation.component';

describe('RadicalInnovationComponent', () => {
  let component: RadicalInnovationComponent;
  let fixture: ComponentFixture<RadicalInnovationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadicalInnovationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadicalInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
