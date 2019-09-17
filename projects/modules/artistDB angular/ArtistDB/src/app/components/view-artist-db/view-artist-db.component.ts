import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-artist-db',
  templateUrl: './view-artist-db.component.html',
  styleUrls: ['./view-artist-db.component.css']
})
export class ViewArtistDbComponent implements OnInit {

  constructor(private rte:Router, private data: DataService, private route: ActivatedRoute, private sanitizer:DomSanitizer) { 
    
  }

  result:any
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl('http://'+url);
  }
  deleteCallBack:Function

  ngOnInit() {
    var section = this.route.params['_value'].section
    if(section==='artists'){
      this.data.getArtistImagesByID(this.route.params['_value'].id).subscribe((result:any)=>{
        console.log(result);
        this.deleteCallBack = this.deleteArtistsImage
        if(result.status===1){
          this.result = result
        }
      })
    }else if(section==='tattoos'){
      this.data.getTattooArtistImagesByID(this.route.params['_value'].id).subscribe((result:any)=>{
        this.deleteCallBack = this.deleteTattooArtistImage
        if(result.status===1){
          this.result = result
        }
      })  
    }else if(section==='models'){
      this.data.getModelsImagesByID(this.route.params['_value'].id).subscribe((result:any)=>{
        console.log(result)
        this.deleteCallBack = this.deleteModelsImage
        if(result.status===1){
          this.result = result
        }
      })  
    }else if(section==='bodyMOD'){
      this.data.getBodyMODByID(this.route.params['_value'].id).subscribe((result:any)=>{
        this.deleteCallBack = this.deleteBodyMODImage
        if(result.status===1){
          this.result = result
        }
      })
    } else if(section==='venues'){
        this.data.getVenueImagesbyID(this.route.params['_value'].id).subscribe((result:any)=>{
          this.deleteCallBack = this.deleteVenuesImage
          if(result.status===1){
            this.result = result
          }
        })  
    } else if(section==='vendors'){
      this.data.getVendorsImagesbyID(this.route.params['_value'].id).subscribe((result:any)=>{
        this.deleteCallBack = this.deleteVendorsImage
        if(result.status===1){
          this.result = result
        }
      })  
  }else if(section==='piercing'){
    this.data.getPiercingImagesbyID(this.route.params['_value'].id).subscribe((result:any)=>{
      this.deleteCallBack = this.deletePiercingImage
      if(result.status===1){
        this.result = result
      }
    })  
  }else if(section==='prfm'){
    this.data.getPrfmArtistImagesbyID(this.route.params['_value'].id).subscribe((result:any)=>{
      this.deleteCallBack = this.deletePrfmArtistsImage
      if(result.status===1){
        this.result = result
      }
    })
    }

   

}

 deleteArtistsImage(id,name) {
   console.log('called')
  this.data.deleteArtistImage(id,name).subscribe((res: any)=>{
    if(res.status===1){
      location.reload();
      console.log('image deleted');
      
    }
  })
}

deleteTattooArtistImage(id,name){
  this.data.deleteTattooArtistImage(id,name).subscribe((res: any)=>{
    if(res.status===1){
      location.reload();
      console.log('image deleted');
    }
  })
}

deletePiercingImage(id,name){
  this.data.deletePiercingImage(id,name).subscribe((res: any)=>{
    if(res.status===1){
      location.reload();
      console.log('image deleted');
    }
  })
}
deleteModelsImage(id,name){
  this.data.deleteModelsImage(id,name).subscribe((res: any)=>{
    if(res.status===1){
      location.reload();
      console.log('image deleted');
    }
  })
}
deleteVendorsImage(id,name){
  this.data.deleteVendorsImage(id,name).subscribe((res: any)=>{
    if(res.status===1){
      location.reload();
      console.log('image deleted');
    }
  })
}
deleteVenuesImage(id,name){
  this.data.deleteVenuesImage(id,name).subscribe((res: any)=>{
    if(res.status===1){
      location.reload();
      console.log('image deleted');
    }
  })
}
deletePrfmArtistsImage(id,name){
  this.data.deletePrfmArtistsImage(id,name).subscribe((res: any)=>{
    if(res.status===1){
      location.reload();
      console.log('image deleted');
    }
  })
}
deleteBodyMODImage(id,name){
  this.data.deleteBodyMODImage(id,name).subscribe((res: any)=>{
    if(res.status===1){
      location.reload();
      console.log('image deleted');
    }
  })
}

}
