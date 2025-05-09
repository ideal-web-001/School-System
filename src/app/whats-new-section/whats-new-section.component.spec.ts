import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsNewSectionComponent } from './whats-new-section.component';

describe('WhatsNewSectionComponent', () => {
  let component: WhatsNewSectionComponent;
  let fixture: ComponentFixture<WhatsNewSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsNewSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsNewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
