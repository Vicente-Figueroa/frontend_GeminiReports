import { Routes } from '@angular/router';
import { TransactionsComponent } from './features/transactions/transactions.component';
import { CardComponent } from './card/card.component';
import { FinancesComponent } from './features/finances/finances.component';
export const routes: Routes = [

{path: 'transacciones', component: TransactionsComponent},
{path: 'reporte', component: CardComponent},
{path: 'home', component: FinancesComponent},
{path: '**', component: FinancesComponent},

];
