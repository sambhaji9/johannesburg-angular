import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MyInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const updateRequest = req.clone({
            headers: req.headers.set("Authorization", 'Some-Dummy-Code')
        });

        console.log('Before making the API calls: ', updateRequest);

        return next.handle(req).pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
                        console.log("API call success: ", event);
                    }
                },
                error => {
                    if (event instanceof HttpResponse) {
                        console.log("API call error: ", event);
                    }
                }
            )
        );
    }
}
