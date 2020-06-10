import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TransactionsRoutingModule } from "./transactions-routing.module";
import { TransfersComponent } from "./transfers/transfers.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [TransfersComponent, HomeComponent, TransferFormComponent, HistoryComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TransactionsModule {}
