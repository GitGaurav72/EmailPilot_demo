import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthInterceptor } from './interceptor/auth.interceptor'; 
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideHttpClient(withInterceptorsFromDi()),  
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true
    }, provideAnimationsAsync()],
  
};
