import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IphonePageComponent } from './iphone-page.component';

describe('IphonePageComponent', () => {
  let component: IphonePageComponent;
  let fixture: ComponentFixture<IphonePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IphonePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IphonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
