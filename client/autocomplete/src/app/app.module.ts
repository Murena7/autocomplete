import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RandomNameService } from './core/services/random-name.service';
import { MainModule } from './core/main/main.module';
import { routes } from './app.routes';
import { ResolverService } from './core/services/resolver.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, MainModule, RouterModule.forRoot(routes),
  ],
  providers: [RandomNameService, ResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
