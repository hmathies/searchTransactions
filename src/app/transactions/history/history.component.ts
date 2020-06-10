import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"]
})
export class HistoryComponent implements OnInit {
  transactions$ = this.http.get("http://localhost:3000/api/data");

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log("this.transactions from app ", this.transactions$);
    console.log(typeof this.transactions$);
  }
}
