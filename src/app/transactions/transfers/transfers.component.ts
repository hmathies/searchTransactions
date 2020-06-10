import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AccountService } from "../../account.service";
import { Transfer } from "../transfer";
import { AccountResponse } from "../AccountResponse";

@Component({
  selector: "app-transfers",
  templateUrl: "./transfers.component.html",
  styleUrls: ["./transfers.component.css"]
})
export class TransfersComponent implements OnInit {
  @Output() accounts;
  //TODO: possible remove the output decorator for transfer
  @Output() transfer: Transfer;
  firstAccount = {};

  constructor(private accountService: AccountService) {
    // this.transfer = {
    //   from: this.firstAccount,
    //   to: this.accounts,
    //   amount: ""
    // };
    this.accountService.getAccounts().subscribe(accounts => {
      this.firstAccount = accounts[0];
      this.accounts = accounts;

      console.log(this.accounts);
      console.log(this.firstAccount);
    });
  }

  ngOnInit() {
    // this.accountService.getAccounts().subscribe(accounts => {
    //   this.firstAccount = accounts[0];
    //   this.accounts = accounts;

    //   console.log(this.accounts);
    //   console.log(this.firstAccount);
    // });
    this.transfer = {
      from: this.firstAccount,
      to: this.accounts,
      amount: ""
    };
  }

  // onSubmit(transfer: Transfer){
  //   this.accountService.
  // }
}
