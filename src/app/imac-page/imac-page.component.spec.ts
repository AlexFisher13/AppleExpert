import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImacPageComponent } from './imac-page.component';

describe('ImacPageComponent', () => {
  let component: ImacPageComponent;
  let fixture: ComponentFixture<ImacPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImacPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImacPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
