import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditArtistDbComponent } from './components/edit-artist-db/edit-artist-db.component';
import { ViewArtistDbComponent } from './components/view-artist-db/view-artist-db.component';
import { UploadArtistDbComponent } from './components/upload-artist-db/upload-artist-db.component';
import { ArtistDbListComponent } from './components/artist-db-list/artist-db-list.component';

const routes: Routes = [
  // { path: 'artists', 
  //    children: [
        {path: ':section/edit/:id', component: EditArtistDbComponent},
        { path: ':section/view/:id',  component: ViewArtistDbComponent },
        { path: ':section/upload/:id',  component: UploadArtistDbComponent },
        { path: ':section/list',  component: ArtistDbListComponent }
    ]   
    // },
    // {
    // path: 'tattoos', 
    //  children: [ {path: 'edit/:id', component: EditArtistDbComponent},
    //              { path: 'view',  component: ViewArtistDbComponent },
    //              { path: 'upload',  component: UploadArtistDbComponent },
    //              { path: 'list',  component: ArtistDbListComponent }
    //           ]   
    
    // },
    // {
    // path: 'bodyMOD', 
    //  children: [ {path: 'edit/:id', component: EditArtistDbComponent},
    //              { path: 'view',  component: ViewArtistDbComponent },
    //              { path: 'upload',  component: UploadArtistDbComponent },
    //              { path: 'list',  component: ArtistDbListComponent }
    //           ]   
    
    // },
    // {
    //   path: 'providers', 
    //    children: [ {path: 'edit/:id', component: EditArtistDbComponent},
    //                { path: 'view',  component: ViewArtistDbComponent },
    //                { path: 'upload',  component: UploadArtistDbComponent },
    //                { path: 'list',  component: ArtistDbListComponent }
    //             ]   
      
    //   },
    //   {
    //     path: 'venues', 
    //      children: [ {path: 'edit/:id', component: EditArtistDbComponent},
    //                  { path: 'view',  component: ViewArtistDbComponent },
    //                  { path: 'upload',  component: UploadArtistDbComponent },
    //                  { path: 'list',  component: ArtistDbListComponent }
    //               ]   
        
    //     },
    //     {
    //       path: 'vendors', 
    //        children: [ {path: 'edit/:id', component: EditArtistDbComponent},
    //                    { path: 'view',  component: ViewArtistDbComponent },
    //                    { path: 'upload',  component: UploadArtistDbComponent },
    //                    { path: 'list',  component: ArtistDbListComponent }
    //                 ]   
          
    //       },
    //       {
    //         path: 'models', 
    //          children: [ {path: 'edit/:id', component: EditArtistDbComponent},
    //                      { path: 'view',  component: ViewArtistDbComponent },
    //                      { path: 'upload',  component: UploadArtistDbComponent },
    //                      { path: 'list',  component: ArtistDbListComponent }
    //                   ]   
            
    //         },

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
