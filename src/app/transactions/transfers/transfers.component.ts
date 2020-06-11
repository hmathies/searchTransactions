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
  @Output() merchants;
  @Output() transfer: Transfer;
  

  constructor(private accountService: AccountService) {
    this.accountService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
      
    });

    this.accountService.getMerchants().subscribe((merchants) => {
      this.merchants = merchants;
    })
  }

  ngOnInit() {
    this.transfer = {
      from: "",
      to: "",
      amount: ""
    };
  }

  onDecrement(event: Event){
    /// handle event here
    console.log("ignore me")
  }
}
