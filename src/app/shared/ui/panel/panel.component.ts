import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class PanelComponent {
  readonly eyebrow = input<string | null>(null);
  readonly className = input<string | null>(null);
  readonly contentClassName = input<string | null>(null);
  readonly title = input.required<string>();
  readonly titleClassName = input<string | null>(null);

  protected readonly contentClasses = computed(() => {
    const customClassName = this.contentClassName()?.trim();

    return customClassName ? `px-4 pb-4 pt-3 ${customClassName}` : 'px-4 pb-4 pt-3';
  });

  protected readonly panelClasses = computed(() => {
    const customClassName = this.className()?.trim();

    const baseClasses =
      'rounded-[12px] border border-[var(--border2-subtle)] bg-[var(--bg0)] shadow-[var(--shadow-soft)]';

    return customClassName ? `${baseClasses} ${customClassName}` : baseClasses;
  });

  protected readonly titleClasses = computed(() => {
    const customClassName = this.titleClassName()?.trim();

    const baseClasses = 'mt-1 text-[15px] font-bold leading-5 text-[var(--text1-primary)]';

    return customClassName ? `${baseClasses} ${customClassName}` : baseClasses;
  });
}