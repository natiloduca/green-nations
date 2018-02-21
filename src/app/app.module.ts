import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FwModule} from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { CountrydetailComponent } from './countrydetail/countrydetail.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { CountrymaintComponent } from './countrymaint/countrymaint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user.service';
import { UserApi} from '../fw/users/user-api';
import { AuthGuard} from './services/auth-guard.service';
import { CountryPanelComponent } from './panels/country-panel/country-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountrydetailComponent,
    CountrylistComponent,
    CountrymaintComponent,
    AuthenticatedUserComponent,
    CountryPanelComponent,
    ImagePanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService},
    AuthGuard
  ],
  exports: [
    CountryPanelComponent,
    ImagePanelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
