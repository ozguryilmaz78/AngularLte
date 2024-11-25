import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
@Input() sectionTitle: string ="";
@Input() sectionFooter: string ="";
}
