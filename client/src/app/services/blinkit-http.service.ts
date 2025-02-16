import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlinkitHttpService {

  constructor(
    private http: HttpClient
  ) {
  }

  get(url: string): any {
    const getUrl = environment.apiUrl + url;
    return this.http.get(getUrl);
  }

  delete(url: string): any {
    const deleteUrl = environment.apiUrl + url;
    return this.http.delete(deleteUrl);
  }

  post(url: string, data: any): any {
    const postUrl = environment.apiUrl + url;
    return this.http.post(postUrl, data);
  }

  put(url: string, data: any): any {
    const postUrl = environment.apiUrl + url;
    return this.http.put(postUrl, data);
  }

  patch(url: string, data: any): any {
    const postUrl = environment.apiUrl + url;
    return this.http.patch(postUrl, data);
  }

}
