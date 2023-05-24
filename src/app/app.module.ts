import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {AppHttpInterceptorInterceptor} from "./interceptor/app-http-interceptor.interceptor";
import { ModalSucessoComponent } from './modal/modal-sucesso/modal-sucesso.component';
import { GraficoResultadoComponent } from './grafico/grafico-resultado.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    ModalSucessoComponent,
    GraficoResultadoComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    FlexModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    NgxChartsModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
