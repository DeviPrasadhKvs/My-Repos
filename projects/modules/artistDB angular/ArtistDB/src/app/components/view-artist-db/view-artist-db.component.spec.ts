import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArtistDbComponent } from './view-artist-db.component';

describe('ViewArtistDbComponent', () => {
  let component: ViewArtistDbComponent;
  let fixture: ComponentFixture<ViewArtistDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewArtistDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewArtistDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
