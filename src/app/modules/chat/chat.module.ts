import { NgModule } from '@angular/core';
import { ChatContainerComponent } from './container/chat-container.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChatboxComponent } from './component/chat-box.component';
import { AuthGuard } from 'src/app/auth.guard';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { UserChatComponent } from './component/user-chat/user-chat.component';
import { ReplyChatComponent } from './component/reply-chat/reply-chat.component';

const routes: Routes = [
  {
    path: '',
    component: ChatContainerComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [ChatContainerComponent, ChatboxComponent, UserChatComponent, ReplyChatComponent],
  providers: [],
})
export class ChatModule { }
