import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  AccordionComponent,
  AccordionContentComponent,
  AccordionPanelComponent,
  AccordionTitleComponent,
  AlertComponent,
  BadgeComponent,
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  ButtonComponent,
  DarkThemeToggleComponent,
  DropdownComponent,
  DropdownDividerComponent,
  DropdownHeaderComponent,
  DropdownItemComponent,
  FormFieldModule,
  IndicatorComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  NavbarComponent,
  SidebarComponent,
  SidebarItemComponent,
  SidebarItemGroupComponent
} from './components';
import { SanitizeHtmlPipe } from './pipes';
import { SidebarService, ThemeService } from './services';

const COMPONENTS = [
  IndicatorComponent,
  AccordionComponent,
  AccordionContentComponent,
  AccordionPanelComponent,
  AccordionTitleComponent,
  AlertComponent,
  BadgeComponent,
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  ButtonComponent,
  DarkThemeToggleComponent,
  DropdownComponent,
  DropdownItemComponent,
  DropdownDividerComponent,
  DropdownHeaderComponent,
  NavbarComponent,
  ModalComponent,
  ModalHeaderComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  SidebarComponent,
  SidebarItemComponent,
  SidebarItemGroupComponent,
];

const SERVICES = [SidebarService, ThemeService];

const PIPES = [SanitizeHtmlPipe];

@NgModule({
  imports: [CommonModule, RouterModule, FormFieldModule],
  declarations: [...COMPONENTS, ...PIPES],
  exports: [...COMPONENTS, ...PIPES, FormFieldModule],
  providers: [SERVICES, PIPES],
})
export class FlowbiteModule { }
