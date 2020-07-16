import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire'
import { environment } from './firebase.enviroment'

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FiltersComponent } from './components/pages/filters/filters.component';
import { VideosComponent } from './components/pages/videos/videos.component';
import { VideoComponent } from './components/pages/video/video.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FilterComponent } from './components/pages/filter/filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParamOptionComponent } from './components/pages/filter/param-option/param-option.component';
//import { ModalModule } from 'ngx-bootstrap/modal';
//import { ModalComponent } from './components/shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FiltersComponent,
    VideosComponent,
    NavbarComponent,
    VideoComponent,
    FilterComponent,
    ParamOptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
    //ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
