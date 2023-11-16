import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { ExampleComponent } from './example/example.component';
import { MultipleChoicePageComponent } from './multiple-choice-page/multiple-choice-page.component';
import { SithListComponent } from './sith-list/sith-list.component';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
import { UserInfoDisplayComponent } from './user-info-display/user-info-display.component';

const routes: Routes = [
  {path:"event-handling", component:EventHandlingComponent},
  {path:"example", component:ExampleComponent},
  {path:"multiple-choice", component:MultipleChoicePageComponent},
  {path:"sith-list", component:SithListComponent},
  {path:"counter", component:CounterPageComponent},
  {path:"user-info-form", component: UserInfoFormComponent},
  {path:"user-info-display", component:UserInfoDisplayComponent},
  {path:"", redirectTo:"/counter", pathMatch:'full'}, //will work when path is specified
  {path:"**", component:PageNotFoundComponent} //each star represents an entity to match. - for wrong path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
