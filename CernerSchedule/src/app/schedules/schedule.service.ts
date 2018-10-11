import {Injectable} from '@angular/core';
import {ISchedule} from './schedule';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  constructor(private http: HttpClient) {}
  /*10/9/2018 SMIAN8 Work on a webservice that returns ISchedule data, for now use json file. We may need to have a few webservices, but this is the main one*/
  private scheduleUrl = 'api/schedules/schedules.json';
  getSchedules(): Observable<ISchedule[]> {
    return this.http.get<ISchedule[]>(this.scheduleUrl).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
