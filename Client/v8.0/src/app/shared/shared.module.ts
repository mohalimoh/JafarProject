import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { SidebarDirective } from './directives/sidebar.directive';
import { SidebarAnchorToggleDirective } from './directives/sidebaranchortoggle.directive';
import { SidebarLinkDirective } from './directives/sidebarlink.directive';
import { SidebarListDirective } from './directives/sidebarlist.directive';
import { SidebarToggleDirective } from './directives/sidebartoggle.directive';
import { ToggleFullscreenDirective } from './directives/toggle-fullscreen.directive';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';
import { FixLengthPipe } from './pipes/fix-length.pipe';
import { PersianDatePipe } from './pipes/persian-date.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { JalaliDatePickerComponent } from './user-control/jalali-date-picker/jalali-date-picker.component';

@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective,
        SidebarDirective,
        NgbModule,
        TranslateModule,
        FixLengthPipe,
        NgSelectModule,
        FormsModule,
        PersianDatePipe,
        JalaliDatePickerComponent,
        JalaliDatePickerComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        TranslateModule,
        PerfectScrollbarModule,
        FormsModule,
        NgSelectModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective,
        SidebarDirective,
        SidebarLinkDirective,
        SidebarListDirective,
        SidebarAnchorToggleDirective,
        SidebarToggleDirective,
        FixLengthPipe,
        PersianDatePipe,
        JalaliDatePickerComponent,
    ]
})
export class SharedModule { }
