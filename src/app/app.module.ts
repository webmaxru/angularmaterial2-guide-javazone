import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SessionService } from './session.service';

import { MdListModule } from '@angular2-material/list';
import { MdButtonModule } from '@angular2-material/button';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdIconModule } from '@angular2-material/icon';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdRadioModule } from '@angular2-material/radio';
import { MdTooltipModule } from '@angular2-material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    SessionListComponent,
    SessionDetailComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    MdListModule.forRoot(),
    MdButtonModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdTabsModule.forRoot(),
    MdIconModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdCardModule.forRoot(),
    MdInputModule.forRoot(),
    MdCheckboxModule.forRoot(),
    MdRadioModule.forRoot(),
    MdTooltipModule.forRoot()
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
