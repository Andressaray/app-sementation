import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { TextI, JwtText } from '../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  headers = new HttpHeaders({'Content-Type':'application/json','Accept':'application/json'});
  readonly API: string = 'http://localhost:8000';
  constructor(private httpClient: HttpClient) {}
  transformText(text: string): Observable <TextI> {
    return this.httpClient.post<TextI>(`${this.API}/text`, {text}, {
      headers: {'Content-Type':'application/json','Accept':'application/json'}
    })
  }
}