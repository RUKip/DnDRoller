import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSavePartyComponent } from './dialog-save-party.component';

describe('DialogSavePartyComponent', () => {
  let component: DialogSavePartyComponent;
  let fixture: ComponentFixture<DialogSavePartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSavePartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSavePartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
