import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AccountResponse } from "../app/transactions/AccountResponse";
import { Transfer } from "./transactions/transfer";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getAccounts() {
    return this.http.get<AccountResponse[]>(`${this.url}/api/accounts`);
  }
  getMerchants() {
    return this.http.get<AccountResponse[]>(`${this.url}/api/transactions`);
  }
  postTransfer(transfer: any) {
    return this.http.post<any>(`${this.url}/api/transactions`, transfer)
  }
  getTransfer(postedTransfer: any){
    return this.http.get<any>(`${this.url}/api/transactions`)
  }

}
