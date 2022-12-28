import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MessageOut } from "../domain/common";
import { DuplicateOut, EmailIn, LoginUserIn, SignupUserIn, UsernameIn } from "../domain/user";


@Injectable({
    providedIn: 'root'
})
export class ApiService {
  
    private readonly BACKEND_URL = "https://iq579oh8v4.execute-api.ap-northeast-2.amazonaws.com";
  
    constructor(
      private http: HttpClient
    ) {}

    //=======================================================================
    // API BASIC STRUCTURE
    //=======================================================================
  
    public get<T>(endpoint: string, id?: number, params?: any): Observable<T> {
      let url = `${this.BACKEND_URL}${endpoint}`;
      if (id) {
        url += `/${id}`;
      }
      return this.http.get<T>(url, { 'params': params });
    }

    public post<T>(endpoint: string, body: any): Observable<T> {
        let url = `${this.BACKEND_URL}${endpoint}`;
        return this.http.post<T>(url, body);
    }

    public put<T>(endpoint: string, id: number, body: any): Observable<T> {
        let url = `${this.BACKEND_URL}${endpoint}/${id}`;
        return this.http.put<T>(url, body);
    }

    public delete<T>(endpoint: string, id: number): Observable<T> {
        let url = `${this.BACKEND_URL}${endpoint}/${id}`;
        return this.http.delete<T>(url);
    }

    //=======================================================================
    // USERS API
    //=======================================================================

    public signUp(form: SignupUserIn): Observable<MessageOut> {
        return this.post<MessageOut>('/dev/users/signup', form);
    }

    public signIn(form: LoginUserIn): Observable<MessageOut> {
        return this.post<MessageOut>('/dev/users/login', form);
    }
    
    public checkEmail(form: EmailIn): Observable<DuplicateOut> {
        return this.post<DuplicateOut>('/dev/users/duplicates/email', form);
    }

    public authEmail(form: EmailIn): Observable<MessageOut> {
        return this.post<MessageOut>('/dev/users/authenticates/email', form);
    }

    public checkUsername(form: UsernameIn): Observable<DuplicateOut> {
        return this.post<DuplicateOut>('/dev/users/duplicates/username', form);
    }
}