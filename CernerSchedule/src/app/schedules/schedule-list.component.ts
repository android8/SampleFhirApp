import {Component, OnInit} from '@angular/core';
import {ISchedule} from './schedule';
import {ScheduleService} from './schedule.service';

@Component({
  selector: 'pm-products',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  headingTitle = 'Schedule for : ';
  ClinicianName = 'Dr. White';
  errorMessage: string;
  schedules: ISchedule[] = [];

  constructor(private scheduleService: ScheduleService) {

  }
  ngOnInit(): void {
    this.scheduleService.getSchedules().subscribe(
      schedules => this.schedules = schedules,
      error => this.errorMessage = <any>error
    );
  }
}
