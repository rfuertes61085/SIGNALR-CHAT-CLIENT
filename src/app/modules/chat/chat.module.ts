import { NgModule } from '@angular/core';
import { ChatContainerComponent } from './container/chat-container.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatboxComponent } from './component/chat-box.component';

const routes: Routes = [
  {
    path: '',
    component: ChatContainerComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [ChatContainerComponent, ChatboxComponent],
  providers: [],
})
export class ChatModule { }
