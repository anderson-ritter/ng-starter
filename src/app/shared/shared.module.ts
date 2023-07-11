import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { TranslateModule } from '@ngx-translate/core';
import { ChevronDown, ChevronsLeft, ChevronsRight, LayoutDashboard, LucideAngularModule, Settings2 } from 'lucide-angular';

import {
  AuthService,
  LocalStorageService,
  MessagesApiService,
  NotificationService,
  SessionStorageService,
  TitleService,
  UiService
} from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

    // 3rd Party
    CdkTableModule,
    LayoutModule,
    OverlayModule,
    TranslateModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    LucideAngularModule.pick({ ChevronDown, ChevronsLeft, ChevronsRight, LayoutDashboard, Settings2 })
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

    // 3rd Party
    CdkTableModule,
    LayoutModule,
    TranslateModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,

    LucideAngularModule
  ],
  providers: [
    AuthService,
    LocalStorageService,
    MessagesApiService,
    NotificationService,
    SessionStorageService,
    TitleService,
    UiService
  ]
})
export class SharedModule { }
