import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TransactionsRoutingModule } from "./transactions-routing.module";
import { TransfersComponent } from "./transfers/transfers.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { HistoryComponent } from './history/history.component';
import { FilterPipe } from "../filter.pipe";

@NgModule({
  declarations: [
    TransfersComponent, 
    HomeComponent, 
    TransferFormComponent, 
    HistoryComponent, 
    FilterPipe],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ]
})
export class TransactionsModule {}
