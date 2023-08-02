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

  constructor(private storage: Storage) {}

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    console.log(file);
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
          this.url = await getDownloadURL(item);
          console.log('la url es ' + this.url);
        }
      })
      .catch((error) => console.log(error));
  }
}
