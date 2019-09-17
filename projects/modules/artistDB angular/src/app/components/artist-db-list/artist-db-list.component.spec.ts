import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDbListComponent } from './artist-db-list.component';

describe('ArtistDbListComponent', () => {
  let component: ArtistDbListComponent;
  let fixture: ComponentFixture<ArtistDbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
