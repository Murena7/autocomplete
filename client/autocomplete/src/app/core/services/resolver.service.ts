import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { RandomNameService } from './random-name.service';

@Injectable()
export class ResolverService implements Resolve<Observable<string[]>> {

  constructor(private randomName: RandomNameService) { }

  resolve() {
    return this.randomName.getNames();
  }
}
