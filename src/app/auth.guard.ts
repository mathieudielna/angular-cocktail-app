import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
    providedIn: 'root',
}) 
export class AuthGuard implements CanActivate {
    
    // constructor(private authService) {}
    
    canActivate(): boolean {
        return false;
        // return this.authService.isLoggedIn();
    }

    canActivateChild(): boolean {
        return false;
    }

}