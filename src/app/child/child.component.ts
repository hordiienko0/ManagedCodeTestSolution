import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { DatePipe } from '@angular/common';
import { getFormattedDate } from '../utils/date.util';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input() data!: { value: string };
  childData: string = 'Initial Child Data';

  constructor(private dataService: DataService) {}

  updateChildData(): void {
    this.childData = `Updated at ${getFormattedDate()}`;
  }

  resetChildData(): void {
    this.childData = 'Initial Child Data';
  }

  getServiceMessage(): string {
    return this.dataService.getMessage();
  }

  updateServiceMessage(): void {
    this.dataService.setNewMessage(`Updated by Child at ${getFormattedDate()}`);
  }

  resetServiceMessage(): void {
    this.dataService.resetMessage();
  }
}