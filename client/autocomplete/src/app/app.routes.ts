import { Routes } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { ResolverService } from './core/services/resolver.service';

export const routes: Routes = [
  { path: '', component: MainComponent, resolve: { data: ResolverService } },
];
