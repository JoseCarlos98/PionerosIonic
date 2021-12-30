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
  }
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
