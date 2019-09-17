import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArtistDbComponent } from './edit-artist-db.component';

describe('EditArtistDbComponent', () => {
  let component: EditArtistDbComponent;
  let fixture: ComponentFixture<EditArtistDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArtistDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArtistDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
