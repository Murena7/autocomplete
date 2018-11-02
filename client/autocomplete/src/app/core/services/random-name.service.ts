import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL = 'https://raw.githubusercontent.com/dominictarr/random-name/master/names.json';

@Injectable()
export class RandomNameService {

  constructor(private http: HttpClient) { }

  getNames() {
    return this.http.get<string[]>(URL);
  }
}
