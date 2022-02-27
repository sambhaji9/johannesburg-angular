import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListModule } from './list/list.module';
import { MyInterceptorService } from './my-interceptor.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ListModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: MyInterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
