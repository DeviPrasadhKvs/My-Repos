import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTattooArtists() {
    return this.http.get('http://192.168.1.112:4300/tattooArtists/fetch')
  }

  getArtists() {
    return this.http.get('http://192.168.1.112:4300/fetchArtists');
  }

  getModels() {
    return this.http.get('http://192.168.1.112:4300/models/fetch');
  }

  getBodyMOD() {
    return this.http.get('http://192.168.1.112:4300/bodyMOD/fetch')
  }
  getPiercing() {
    return this.http.get('http://192.168.1.112:4300/piercing/fetch')
  }
  getVendors() {
    return this.http.get('http://192.168.1.112:4300/vendors/fetch')
  }

  getVenues() {
    return this.http.get('http://192.168.1.112:4300/venues/fetch')
  }
  getprfmArtists() {
    return this.http.get('http://192.168.1.112:4300/prfmArtists/fetch')
  }
  getArtistDataByID(id:string) {
    return this.http.get('http://192.168.1.112:4300/getArtistDetails/'+id)
  }
  getTattooArtistByID(id:string) {
    return this.http.get('http://192.168.1.112:4300/tattooArtists/getDetails/'+id)
  }
  getModelByID(id:string){
    return this.http.get('http://192.168.1.112:4300/models/getDetails/'+id)
  }
  getVenueByID(id:string){
    return this.http.get('http://192.168.1.112:4300/venues/getDetails/'+id)
  }
  getBodyMODByID(id:string){
    return this.http.get('http://192.168.1.112:4300/bodyMOD/getDetails/'+id)
  }
  getVendorByID(id:string){
    return this.http.get('http://192.168.1.112:4300/vendors/getDetails/'+id)    
  }
  getPiercingByID(id:string){
    return this.http.get('http://192.168.1.112:4300/piercing/getDetails/'+id)    
  }
  getprfmArtistByID(id:string){
    return this.http.get('http://192.168.1.112:4300/prfmArtists/getDetails/'+id)    
  }
  getArtistImagesByID(id:string){
    return this.http.get('http://192.168.1.112:4300/viewPictures/'+id)    
  }
  getTattooArtistImagesByID(id:string){
    return this.http.get('http://192.168.1.112:4300/tattooArtists/viewPictures/'+id)
  }
  getModelsImagesByID(id:string){
    return this.http.get('http://192.168.1.112:4300/models/viewPictures/'+id)
  }
  getVenueImagesbyID(id:string){
    return this.http.get('http://192.168.1.112:4300/venues/viewPictures/'+id)
  }
  getVendorsImagesbyID(id:string){
    return this.http.get('http://192.168.1.112:4300/vendors/viewPictures/'+id)
  }
  getBodyMODImagesbyID(id:string){
    return this.http.get('http://192.168.1.112:4300/bodyMOD/viewPictures/'+id)
  }
  getPiercingImagesbyID(id:string){
    return this.http.get('http://192.168.1.112:4300/piercing/viewPictures/'+id)
  }
  getPrfmArtistImagesbyID(id:string){
    return this.http.get('http://192.168.1.112:4300/prfmArtists/viewPictures/'+id)
  }



  deleteArtistImage(id:string, name: string){
      return this.http.delete('http://192.168.1.112:4300/deleteImage/'+id+'/'+name)
  }
  deleteTattooArtistImage(id:string, name: string){
    return this.http.delete('http://192.168.1.112:4300/tattooArtists/deleteImage/'+id+'/'+name)
  }
  deleteVenuesImage(id:string, name: string){
    return this.http.delete('http://192.168.1.112:4300/venues/deleteImage/'+id+'/'+name)
  }
  deleteVendorsImage(id:string, name: string){
    return this.http.delete('http://192.168.1.112:4300/vendors/deleteImage/'+id+'/'+name)
  }
  deletePrfmArtistsImage(id:string, name: string){
    return this.http.delete('http://192.168.1.112:4300/prfmArtists/deleteImage/'+id+'/'+name)
  }
  deletePiercingImage(id:string, name: string){
    return this.http.delete('http://192.168.1.112:4300/piercing/deleteImage/'+id+'/'+name)
  }
  deleteModelsImage(id:string, name: string){
    return this.http.delete('http://192.168.1.112:4300/models/deleteImage/'+id+'/'+name)
  }
  deleteBodyMODImage(id: string, name: string){
    return this.http.delete('http://192.168.1.112:4300/bodyMOD/deleteImage'+id+'/'+name)
  }
 
}
