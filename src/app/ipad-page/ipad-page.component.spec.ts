import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadPageComponent } from './ipad-page.component';

describe('IpadPageComponent', () => {
  let component: IpadPageComponent;
  let fixture: ComponentFixture<IpadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
