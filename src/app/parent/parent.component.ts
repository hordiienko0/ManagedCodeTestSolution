import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ChildComponent } from '../child/child.component';
import { getFormattedDate } from '../utils/date.util';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  imports: [ChildComponent],
  providers: [DatePipe],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ParentComponent {
  primitiveData: number = 0;
  nonPrimitiveData: { value: string } = { value: 'Initial' };

  constructor(private dataService: DataService) {}

  updatePrimitiveData(): void {
    this.primitiveData++;
  }

  updateNonPrimitiveData(): void {
    this.nonPrimitiveData = { value: `Updated at ${getFormattedDate()}` };
  }

  resetPrimitiveData(): void {
    this.primitiveData = 0;
  }

  resetNonPrimitiveData(): void {
    this.nonPrimitiveData = { value: 'Initial' };
  }

  getServiceMessage(): string {
    return this.dataService.getMessage();
  }

  updateServiceMessage(): void {
    this.dataService.setNewMessage('Message updated by Parent.');
  }

  resetServiceMessage(): void {
    this.dataService.resetMessage();
  }
}