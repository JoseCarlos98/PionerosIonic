import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./modules/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./modules/shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'scoreboard',
    loadChildren: () => import('./modules/scoreboard/scoreboard.module').then( m => m.ScoreboardPageModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('./modules/tickets/tickets.module').then( m => m.TicketsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./modules/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'last-movements',
    loadChildren: () => import('./modules/last-movements/last-movements.module').then( m => m.LastMovementsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then( m => m.RegisterPageModule)
  }

 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
