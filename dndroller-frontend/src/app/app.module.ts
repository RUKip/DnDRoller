import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CharacterFormComponent } from './character-form/character-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeroesComponent,
    CharacterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HeroesComponent]
})
export class AppModule { }
