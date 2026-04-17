import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent {
  readonly title = input.required<string>();
  readonly eyebrow = input<string | null>(null);
  readonly className = input<string | null>(null);

  protected readonly panelClasses = computed(() => {
    const customClassName = this.className()?.trim();
    return customClassName ? `panel ${customClassName}` : 'panel';
  });
}