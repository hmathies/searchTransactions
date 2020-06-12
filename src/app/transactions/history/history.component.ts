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
  @Output() transactions: History[];
  @Input() merchants: AccountResponse[];
  @Input() newTransfer: Object;
  searchTerm: string;

  constructor(private http: HttpClient, private accountService: AccountService) {
    this.accountService.getRecentTransactionsList().subscribe(recentTransactions => {
      this.transactions = recentTransactions;
    });
    // calling the service to try and retrieve the posted transfer to populate to the Recent Transactions List
    this.accountService.getTransfer(this.newTransfer).subscribe((newTransfer) => {
      this.newTransfer = newTransfer;
    })
  }
 

  ngOnInit() {

    
  }


}
