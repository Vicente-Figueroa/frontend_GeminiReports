import { Routes } from '@angular/router';
import { TransactionsComponent } from './features/transactions/transactions.component';
import { CardComponent } from './features/ia_message/card.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { AccountsComponent } from './features/accounts/accounts.component';
import { OnboardingComponent } from './features/onboarding/onboarding.component';

export const routes: Routes = [

// Reglas, siempre con minusculas y separado por ->"_" underscore 
{path: 'transacciones/ingresos', component: TransactionsComponent},
{path: 'transacciones/gastos', component: TransactionsComponent},
{path: 'transacciones', component: TransactionsComponent},
{path: 'cuentas', component: AccountsComponent},
{path: 'transacciones/cuentas/:cuenta', component: TransactionsComponent},
{path: 'transacciones/categorias/:categoria', component: TransactionsComponent},
{path: 'reporte', component: CardComponent},
{path: 'home', component: OnboardingComponent},
{path: 'categorias', component: CategoriesComponent},
{ path: 'categorias/:IdCateforia', component: CategoriesComponent },
{path: '**', component: OnboardingComponent},

];
