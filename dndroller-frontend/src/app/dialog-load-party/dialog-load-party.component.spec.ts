import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoadPartyComponent } from './dialog-load-party.component';

describe('DialogLoadPartyComponent', () => {
  let component: DialogLoadPartyComponent;
  let fixture: ComponentFixture<DialogLoadPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLoadPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLoadPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
