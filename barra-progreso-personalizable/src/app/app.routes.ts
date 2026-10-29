import { Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { CustomProgressBarComponent } from './components/custom-progress-bar-component/custom-progress-bar-component';

export const routes: Routes = [
    {path: 'custom-bar', component: CustomProgressBarComponent},
    {path: '', pathMatch: 'full', redirectTo: '/formulario'},
    {path: '**', component: NotFoundPage}
];
