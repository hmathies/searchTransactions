import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  transactions$ = this.http.get("http://localhost:3000/api/data");

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log("this.transactions from app ", this.transactions$);
  }
}
