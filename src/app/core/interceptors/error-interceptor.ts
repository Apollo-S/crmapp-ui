import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {catchError, throwError} from 'rxjs';
import {AuthService} from '../auth/auth.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);

    return next(req).pipe(
        catchError((err: HttpErrorResponse) => {
            if ([401, 403].includes(err.status)) {
                authService.logoutPostAction();
            }

            const errorMessage = err.error?.message || err.statusText;
            console.error(errorMessage);

            return throwError(() => new Error(errorMessage));
        })
    );
};
