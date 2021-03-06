import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AccountService } from "../../account.service";
import { Transfer } from "../transfer";

@Component({
  selector: "app-transfers",
  templateUrl: "./transfers.component.html",
  styleUrls: ["./transfers.component.css"]
})
export class TransfersComponent implements OnInit {
  @Output() accounts;
  @Output() merchants;
  @Output() transfer: Transfer;
  @Output() fromAccountAmt: number = 10000;

  constructor(private accountService: AccountService) {
    this.accountService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
    });

    this.accountService.getMerchants().subscribe(merchants => {
      this.merchants = merchants;
    });
    this.transfer = {
      from: `Now Checking(8979) - ${this.fromAccountAmt}`,
      to: "",
      amount: ""
    };
  }

  ngOnInit() {}
}
