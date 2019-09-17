import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import { DataService } from '../../data.service'

@Component({
  selector: 'app-edit-artist-db',
  templateUrl: './edit-artist-db.component.html',
  styleUrls: ['./edit-artist-db.component.css']
})
export class EditArtistDbComponent implements OnInit {
public test: string;
public mydata: Object;
  constructor(private rte:Router, private data: DataService, private route: ActivatedRoute) { 
  }

  result:any ={}
  formAction:string = ''
  ngOnInit() {
    var section = this.route.params['_value'].section
    if(section==='artists'){
      this.formAction = 'http://192.168.1.112:4300/updateArtist/'
      this.data.getArtistDataByID(this.route.params['_value'].id).subscribe((result:any)=>{
        if(result.status===1){
          this.result = result
        }
      })
    }else if(section==='tattoos'){
      this.formAction = 'http://192.168.1.112:4300/tattooArtists/update/'
      this.data.getTattooArtistByID(this.route.params['_value'].id).subscribe((result:any)=>{
        if(result.status===1){
          this.result = result
        }
      })  
    }else if(section==='models'){
      this.formAction = 'http://192.168.1.112:4300/models/update/'
      this.data.getModelByID(this.route.params['_value'].id).subscribe((result:any)=>{
        if(result.status===1){
          this.result = result
        }
      })  
    }else if(section==='bodyMOD'){
      this.formAction = 'http://192.168.1.112:4300/bodyMOD/update/'
      this.data.getBodyMODByID(this.route.params['_value'].id).subscribe((result:any)=>{
        if(result.status===1){
          this.result = result
        }
      })
    } else if(section==='venues'){
        this.formAction = 'http://192.168.1.112:4300/venues/update/'
        this.data.getVenueByID(this.route.params['_value'].id).subscribe((result:any)=>{
          if(result.status===1){
            this.result = result
          }
        })  
    } else if(section==='vendors'){
      this.formAction = 'http://192.168.1.112:4300/vendors/update/'
      this.data.getVendorByID(this.route.params['_value'].id).subscribe((result:any)=>{
        if(result.status===1){
          this.result = result
        }
      })  
  }else if(section==='piercing'){
    this.formAction = 'http://192.168.1.112:4300/piercing/update/'
    this.data.getPiercingByID(this.route.params['_value'].id).subscribe((result:any)=>{
      if(result.status===1){
        this.result = result
      }
    })  
}else if(section==='prfm'){
  this.formAction = 'http://192.168.1.112:4300/prfmArtists/update/'
  this.data.getPiercingByID(this.route.params['_value'].id).subscribe((result:any)=>{
    if(result.status===1){
      this.result = result
    }
  })  
}
   
    // this.data.getTattooArtists().subscribe(result=>{
    //   if(result.status == 1){
    //     this.mydata = result.data;
    //     //console.log(this.mydata)
    //   }else{
    //     console.log('some error in the API')
    //   }
      
    // })

  }

}
