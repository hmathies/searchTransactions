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
  //TODO: possible remove the output decorator for transfer
  @Output() transfer: Transfer;
  
  

  constructor(private accountService: AccountService) {
    // this.transfer = {
    //   from: this.firstAccount,
    //   to: this.accounts,
    //   amount: ""
    // };

    this.accountService.getAccounts().subscribe(accounts => {
    
      this.accounts = accounts;
      
    });

    this.accountService.getMerchants().subscribe((merchants) => {
      this.merchants = merchants;
    })
  }

  ngOnInit() {
    // this.accountService.getAccounts().subscribe(accounts => {
    //   this.firstAccount = accounts[0];
    //   this.accounts = accounts;

    //   console.log(this.accounts);
    //   console.log(this.firstAccount);
    // });
    this.transfer = {
      from: "",
      to: "",
      amount: ""
    };
  }

  onDecrement(event: Event){
    /// handle event here
    console.log("event")
  }
}
