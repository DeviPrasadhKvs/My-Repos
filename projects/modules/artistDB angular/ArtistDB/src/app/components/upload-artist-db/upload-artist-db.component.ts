import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-artist-db',
  templateUrl: './upload-artist-db.component.html',
  styleUrls: ['./upload-artist-db.component.css']
})
export class UploadArtistDbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
}
