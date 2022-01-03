import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { RegisterPageModule } from '../register/register.module';
import { LastMovementsPageModule } from '../last-movements/last-movements.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('../shop/shop.module').then(m => m.ShopPageModule)
      },
      {
        path: 'scoreboard',
        loadChildren: () => import('../scoreboard/scoreboard.module').then(m => m.ScoreboardPageModule)
      },
      {
        path: 'tickets',
        loadChildren: () => import('../tickets/tickets.module').then(m => m.TicketsPageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('../menu/menu.module').then(m => m.MenuPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../register/register.module').then( m => m.RegisterPageModule)
      },
      {
        path: 'standing',
        loadChildren: () => import('../standing/standing.module').then( m => m.StandingPageModule)
      },
      {
        path: 'last-movements',
        loadChildren: () => import('../last-movements/last-movements.module').then( m => m.LastMovementsPageModule)
      },
      {
        path: 'roster',
        loadChildren: () => import('../roster/roster.module').then( m => m.RosterPageModule)
      },
      {
        path: 'gastronomy',
        loadChildren: () => import('../gastronomy/gastronomy.module').then( m => m.GastronomyPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../cart-header/cart-header.module').then( m => m.CartHeaderPageModule)
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
