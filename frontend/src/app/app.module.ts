import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarracasModule } from './barracas';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PessoasModule } from './pessoas';
import { HomepageComponent } from './homepage/homepage.component';
import { UmsModule } from './ums';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BarracasModule,
    PessoasModule,
    UmsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
