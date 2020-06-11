import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FilterService {
  constructor() {}

  filterHistory(filter?: string): Observable<History[]> {
    return of(history).pipe(
      delay(2000),
      map(h => {
        // if filter is empty return all
        if (!filter) {
          return h;
        }

        // search for specific transaction by merchant
        const filteredHistory: History[] = [];

        h.filter(function(history) {
          if (history.merchant.toLowerCase().includes(filter.toLowerCase())) {
            filteredHistory.push(history);
          }
        });

        return filteredHistory;
      })
    );
  }
}

export interface History {
  amount: string;
  categoryCode: string;
  merchant: string;
  transactionDate: number;
  transactionType: string;
}

export const history: History[] = [
  {
    amount: "82.02",
    categoryCode: "#12a580",
    merchant: "7 Eleven",
    transactionDate: 1476933842000,
    transactionType: "Card Payment"
  },
  {
    amount: "82.02",
    categoryCode: "#12a580",
    merchant: "Yard Stop",
    transactionDate: 1476933842000,
    transactionType: "Card Payment"
  },
  {
    amount: "82.02",
    categoryCode: "#12a580",
    merchant: "Amazon",
    transactionDate: 1476933842000,
    transactionType: "Card Payment"
  },
  {
    amount: "82.02",
    categoryCode: "#12a580",
    merchant: "Amazon",
    transactionDate: 1476933842000,
    transactionType: "Card Payment"
  },
  {
    amount: "82.02",
    categoryCode: "#12a580",
    merchant: "Yard Stop",
    transactionDate: 1476933842000,
    transactionType: "Card Payment"
  },
  {
    amount: "82.02",
    categoryCode: "#12a580",
    merchant: "7 eleven",
    transactionDate: 1476933842000,
    transactionType: "Card Payment"
  }
];
