import { Component, OnInit, Input, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AccountService } from '../../account.service';
import { AccountResponse } from '../AccountResponse';

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"]
})
export class HistoryComponent implements OnInit {
  @Output() transactions$: History[];
  @Input() merchants: AccountResponse[];
  @Output() newTransfer: Object;
  constructor(private http: HttpClient, private accountService: AccountService) {
    this.accountService.getRecentTransactionsList().subscribe(recentTransactions => {
      this.transactions$ = recentTransactions;
    });
    this.accountService.getTransfer(this.newTransfer).subscribe((newTransfer) => {
      this.newTransfer = newTransfer;
    })
  }
  ngOnChanges(){
    console.log("On changes", this.newTransfer);
    console.log("I am in history component class ", this.transactions$)
  }

  ngOnInit() {

    
  }


}
