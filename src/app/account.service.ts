import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AccountResponse } from "../app/transactions/AccountResponse";
import { Transfer } from "./transactions/transfer";
import { History } from "./transactions/history";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getAccounts() {
    return this.http.get<AccountResponse[]>(`${this.url}/api/accounts`);
  }
  getHistory(): Observable<History[]> {
    return this.http.get<History[]>(`${this.url}/api/transactions`);
  }

  sendTransfer(transfer: Transfer) {
    return this.http.post<Transfer>(`${this.url}/api/transfer`, transfer);
  }
  public search(term: string) {
    return this.http.get(`${this.url}/api/transfer`);
  }
}
