import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { NotificationService } from '../../shared/services/notification.service';
import * as featureActions from './actions';

@Injectable()
export class AuthStoreEffects {
  constructor(
    private notificationService: NotificationService,
    private actions$: Actions) { }

  sigInEffect$: Observable<Action> = this.actions$
    .pipe(
      ofType<featureActions.SignInAction>(featureActions.ActionTypes.SIGNIN),
      map((action) => {
        return new featureActions.SignInSuccessAction({
          username: action.payload.username,
          givenName: 'John Doe',
          accessToken: 'dhasdasijdoisahdurfhhcoweeo2dhoiasjdlasjlkajeoifhwohaoifhao'
        });
      })
    );
}
