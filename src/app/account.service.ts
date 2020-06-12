import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AccountResponse } from "../app/transactions/AccountResponse";
import { Transfer } from "./transactions/transfer";
import { RecentTransactions } from './transactions/recentTransactions';

@Injectable({
  providedIn: "root"
})
export class AccountService {
  url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getAccounts() {
    return this.http.get<AccountResponse[]>(`${this.url}/api/accounts`);
  }
  // Below is a call to get all the transactions
  getMerchants() {
    return this.http.get<AccountResponse[]>(`${this.url}/api/transactions`);
  }
  postTransfer(transfer: any) {
    return this.http.post<any>(`${this.url}/api/transactions`, transfer)
  }
  getTransfer(postedTransfer: any){
    return this.http.get<any>(`${this.url}/api/transactions`)
  }
  getRecentTransactionsList(): any{
    return this.http.get<any>(`${this.url}/api/transactions`)
  }

}
