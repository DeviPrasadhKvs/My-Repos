import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { DomSanitizer } from '@angular/platform-browser';

declare var $:any


@Component({
  selector: 'app-upload-artist-db',
  templateUrl: './upload-artist-db.component.html',
  styleUrls: ['./upload-artist-db.component.css']
})
export class UploadArtistDbComponent implements OnInit {

  constructor(private rte:Router, private data: DataService, private route: ActivatedRoute) { }

  uploadData(){

  }
  formAction:string
  ngOnInit() {
    var section = this.route.params['_value'].section
    var id = this.route.params['_value'].id
    if(section==='artists'){
      this.formAction = 'http://192.168.1.112:4300/upload/'+id
    }else if(section==='tattoos'){
      this.formAction = 'http://192.168.1.112:4300/tattooArtists/upload/'+id
    }else if(section==='models'){
      this.formAction = 'http://192.168.1.112:4300/models/viewPictures/upload/'+id
    }else if(section==='bodyMOD'){
      this.formAction = 'http://192.168.1.112:4300/bodyMOD/upload/'+id
    } else if(section==='venues'){
        this.formAction = 'http://192.168.1.112:4300/venues/viewPictures/upload/'+id
    } else if(section==='vendors'){
      this.formAction = 'http://192.168.1.112:4300/vendors/viewPictures/upload/'+id
    }else if(section==='piercing'){
        this.formAction = 'http://192.168.1.112:4300/piercing/viewPictures/upload/'+id
    }else if(section==='prfm'){
      this.formAction = 'http://192.168.1.112:4300/prfmArtists/viewPictures/upload/'+id
    }
  }
  
}
