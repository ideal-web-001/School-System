import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionSectionComponent } from './opinion-section.component';

describe('OpinionSectionComponent', () => {
  let component: OpinionSectionComponent;
  let fixture: ComponentFixture<OpinionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpinionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
