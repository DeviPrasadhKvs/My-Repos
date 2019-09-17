import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadArtistDbComponent } from './upload-artist-db.component';

describe('UploadArtistDbComponent', () => {
  let component: UploadArtistDbComponent;
  let fixture: ComponentFixture<UploadArtistDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadArtistDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadArtistDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
