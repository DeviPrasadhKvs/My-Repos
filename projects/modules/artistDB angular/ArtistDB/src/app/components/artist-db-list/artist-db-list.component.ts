import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataService } from '../../data.service'

@Component({
  selector: 'app-artist-db-list',
  templateUrl: './artist-db-list.component.html',
  styleUrls: ['./artist-db-list.component.css']
})
export class ArtistDbListComponent implements OnInit {
  public artistData: object;
  public updateURL: string;
  public viewURL: string;
  public deleteURL: string;
  public uploadURL: string;
  constructor(private rte:Router, private data: DataService) { }

  list:any = [
    {href:'artist',
    name:'artists',
    apiUrl:this.data.getArtists(),
    icons:[
      {
        icon:'fa fa-upload',
        name:'upload',
        url:'artists/upload'
      },
      {
        icon:'fa fa-pencil',
        name:'edit',
        url:'artists/edit'
      },
      {
        icon:'fa fa-trash',
        name:'delete',
        url:'artists/view'
      },
      {
        icon:'fa fa-eye',
        name:'view',
        url:'artists/view'
      }
    ]},
    {href:'tattoo',
    name:'tattoos',
    apiUrl:this.data.getTattooArtists(),
    icons:[
      {
        icon:'fa fa-upload',
        name:'upload',
        url:'tattoos/upload'
      },
      {
        icon:'fa fa-pencil',
        name:'edit',
        url:'tattoos/edit'
      },
      {
        icon:'fa fa-trash',
        name:'delete',
        url:'tattoos/view'
      },
      {
        icon:'fa fa-eye',
        name:'view',
        url:'tattoos/view'
      }
    ]},
    {href:'models',
    name:'models',
    apiUrl:this.data.getModels(),
    icons:[
      {
        icon:'fa fa-upload',
        name:'upload',
        url:'models/upload'
      },
      {
        icon:'fa fa-pencil',
        name:'edit',
        url:'models/edit'
      },
      {
        icon:'fa fa-trash',
        name:'delete',
        url:'models/view'
      },
      {
        icon:'fa fa-eye',
        name:'view',
        url:'models/view'
      }
    ]},
    {href:'venues',
    name:'venues',
    apiUrl:this.data.getVenues(),
    icons:[
      {
        icon:'fa fa-upload',
        name:'upload',
        url:'venues/upload'
      },
      {
        icon:'fa fa-pencil',
        name:'edit',
        url:'venues/edit'
      },
      {
        icon:'fa fa-trash',
        name:'delete',
        url:'venues/view'
      },
      {
        icon:'fa fa-eye',
        name:'view',
        url:'venues/view'
      }
    ]},
    {href:'bodymod',
    name:'bodyMOD',
    apiUrl:this.data.getBodyMOD(),
    icons:[
      {
        icon:'fa fa-upload',
        name:'upload',
        url:'bodyMOD/upload'
      },
      {
        icon:'fa fa-pencil',
        name:'edit',
        url:'bodyMOD/edit'
      },
      {
        icon:'fa fa-trash',
        name:'delete',
        url:'bodyMOD/view'
      },
      {
        icon:'fa fa-eye',
        name:'view',
        url:'bodyMOD/view'
      }
    ]},
    {href:'vendors',
    name:'vendors',
    apiUrl:this.data.getVendors(),
    icons:[
      {
        icon:'fa fa-upload',
        name:'upload',
        url:'vendors/upload'
      },
      {
        icon:'fa fa-pencil',
        name:'edit',
        url:'vendors/edit'
      },
      {
        icon:'fa fa-trash',
        name:'delete',
        url:'vendors/view'
      },
      {
        icon:'fa fa-eye',
        name:'view',
        url:'vendors/view'
      }
    ]},
    {href:'piercing',
    name:'piercing',
    apiUrl:this.data.getPiercing(),
    icons:[
      {
        icon:'fa fa-upload',
        name:'upload',
        url:'piercing/upload'
      },
      {
        icon:'fa fa-pencil',
        name:'edit',
        url:'piercing/edit'
      },
      {
        icon:'fa fa-trash',
        name:'delete',
        url:'piercing/view'
      },
      {
        icon:'fa fa-eye',
        name:'view',
        url:'piercing/view'
      }
    ]},
    {href:'prfm',
    name:'PRFM Artists',
    apiUrl:this.data.getprfmArtists(),
    icons:[
      {
        icon:'fa fa-upload',
        name:'upload',
        url:'prfm/upload'
      },
      {
        icon:'fa fa-pencil',
        name:'edit',
        url:'prfm/edit'
      },
      {
        icon:'fa fa-trash',
        name:'delete',
        url:'prfm/view'
      },
      {
        icon:'fa fa-eye',
        name:'view',
        url:'prfm/view'
      }
    ]}
  ]
  iconData:any = []
  result:any ={}
  fetchData(data){
    this.result = {}
    this.iconData = data.icons
    data.apiUrl.subscribe(result=>{
     if(result.status===1){
      this.result = result
     }
    })
  }
  ngOnInit() {
    setTimeout(()=>{
      document.getElementsByClassName('tab-pane')[0].classList.add('active')
      document.getElementsByClassName('tab-pane')[0].classList.add('show')
      document.getElementsByClassName('nav-link')[0].classList.add('active')
      this.fetchData(this.list[0])
    },300)
    // switch(this.rte.url.split('/')[1]) {
    //   case 'artists':  this.data.getArtists().subscribe(result=>{
    //                         console.log(result) ; 
    //                         if(result.status == 1) 
    //                         {
    //                           this.artistData = result.data
    //                           this.updateURL = "/artists/editartistdb/"
    //                           this.viewURL = "/artists/viewartistdb/"
    //                           this.deleteURL = "//"
    //                           this.uploadURL = "/artists/uploadartistdb"
    //                         }else{
    //                           console.log('some error in API');
    //                         }
    //                    });
    //                       break;
                    
    //     case 'models': this.data.getModels().subscribe(result=>{
    //                     console.log(result)
    //                     if(result.status ==1){
    //                       this.artistData = result.data
    //                       this.updateURL = "/models/editartistdb/"
    //                       this.viewURL = "/models/viewartistdb/"
    //                       this.deleteURL = "/models/"
    //                       this.uploadURL = "/models/uploadartistdb"
    //                     }else{
    //                       console.log('some error in API')
    //                     }
    //                   });
    //                   break;
              
    //     case 'tattoos': this.data.getModels().subscribe(result=>{
    //                     console.log(result)
    //                     if(result.status ==1){
    //                       this.artistData = result.data
    //                       this.updateURL = "/tattoos/editartistdb/"
    //                       this.viewURL = "/tattoos/viewartistdb/"
    //                       this.deleteURL = "/tattoos/"
    //                       this.uploadURL = "/tattoos/uploadartistdb"
    //                     }else{
    //                       console.log('some error in API')
    //                     }
    //                   });
    //                   break;

    //   case 'bodyMOD': this.data.getModels().subscribe(result=>{
    //                   console.log(result)
    //                   if(result.status ==1){
    //                     this.artistData = result.data
    //                     this.updateURL = "/bodyMOD/editartistdb/"
    //                     this.viewURL = "/bodyMOD/viewartistdb/"
    //                     this.deleteURL = "/bodyMOD/"
    //                     this.uploadURL = "/bodyMOD/uploadartistdb"
    //                   }else{
    //                     console.log('some error in API')
    //                   }
    //                 });
    //                 break;
    //   case 'venues': this.data.getModels().subscribe(result=>{
    //                   console.log(result)
    //                   if(result.status ==1){
    //                     this.artistData = result.data
    //                     this.updateURL = "/venues/editartistdb/"
    //                     this.viewURL = "/venues/viewartistdb/"
    //                     this.deleteURL = "/venues/"
    //                     this.uploadURL = "/venues/uploadartistdb"
    //                   }else{
    //                     console.log('some error in API')
    //                   }
    //                 });
    //                 break;
    //   case 'vendors': this.data.getModels().subscribe(result=>{
    //                   console.log(result)
    //                   if(result.status ==1){
    //                     this.artistData = result.data
    //                     this.updateURL = "/vendors/editartistdb/"
    //                     this.viewURL = "/vendors/viewartistdb/"
    //                     this.deleteURL = "/vendors/"
    //                     this.uploadURL = "/vendors/uploadartistdb"
    //                   }else{
    //                     console.log('some error in API')
    //                   }
    //                 });
    //                 break;

                    

    //   }


  
  }
  
  

}
