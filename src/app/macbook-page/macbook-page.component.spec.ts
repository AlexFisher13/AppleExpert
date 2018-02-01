import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacbookPageComponent } from './macbook-page.component';

describe('MacbookPageComponent', () => {
  let component: MacbookPageComponent;
  let fixture: ComponentFixture<MacbookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacbookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacbookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
