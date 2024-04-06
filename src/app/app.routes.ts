import { Routes } from '@angular/router';
import { TransactionsComponent } from './features/transactions/transactions.component';
import { CardComponent } from './card/card.component';
import { FinancesComponent } from './features/finances/finances.component';
export const routes: Routes = [

{path: 'transacciones/Ingresos', component: TransactionsComponent},
{path: 'transacciones/Gastos', component: TransactionsComponent},
{path: 'transacciones/accounts/:cuenta', component: TransactionsComponent},
{path: 'reporte', component: CardComponent},
{path: 'Mach', component: CardComponent},
{path: 'home', component: FinancesComponent},
{path: '**', component: FinancesComponent},

];
