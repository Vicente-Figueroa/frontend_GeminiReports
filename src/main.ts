import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/main_components/header/header.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FinancesComponent } from './app/features/finances/finances.component';
import { CategoriesComponent } from './app/features/categories/categories.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(HeaderComponent);
bootstrapApplication(FinancesComponent);
bootstrapApplication(CategoriesComponent);

