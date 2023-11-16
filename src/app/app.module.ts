import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { SithListComponent } from './sith-list/sith-list.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterMessageComponent } from './counter-message/counter-message.component';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { MultipleChoicePageComponent } from './multiple-choice-page/multiple-choice-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserInfoDisplayComponent } from './user-info-display/user-info-display.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './button/button.component';
import { DangerButtonComponent } from './danger-button/danger-button.component';
import { SafeButtonComponent } from './safe-button/safe-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TipComponent } from './tip/tip.component'

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    SithListComponent,
    EventHandlingComponent,
    MultipleChoiceComponent,
    CounterButtonComponent,
    CounterMessageComponent,
    CounterPageComponent,
    MultipleChoicePageComponent,
    PageNotFoundComponent,
    UserInfoFormComponent,
    NavBarComponent,
    UserInfoDisplayComponent,
    ButtonComponent,
    DangerButtonComponent,
    SafeButtonComponent,
    TipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
