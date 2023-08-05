import { Injectable } from '@angular/core';
import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytes,
  list,
} from '@angular/fire/storage';
@Injectable({
  providedIn: 'root',
})
export class ImageService {
  url: string = '';
  nuevoNombre: string = '';

  constructor(private storage: Storage) {}

  public uploadImage($event: any, name: string) {
    //this.getImages()
    const file = $event.target.files[0];
    console.log(name);
    if(name === 'perfil_undefined'){
      name = this.generateRandomString(10);
    }
    const imgRef = ref(this.storage, 'imagen/' + name);
    uploadBytes(imgRef, file)
      .then((response) => {
        // Obtener la URL de descarga de la imagen recién cargada
        getDownloadURL(imgRef)
          .then((url) => {
            console.log(url);
            // Asignar la URL de la imagen a this.url
            this.url = url;
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => console.log(error));
  }

  getImages() {
    const imagesRef = ref(this.storage, 'imagen');
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          console.log(item)
          this.url = await getDownloadURL(item);
        }
      })
      .catch((error) => console.log(error));
  }

generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }  
  return result;
}


}
