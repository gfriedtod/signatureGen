import {computed, Directive, Input, input, signal} from '@angular/core';
import {hlm} from '@spartan-ng/ui-core';
import {cva, type VariantProps} from 'class-variance-authority';
import type {ClassValue} from 'clsx';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
export type ButtonVariants = VariantProps<typeof buttonVariants>;

@Directive({
  selector: '[hlmBtn]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmButtonDirective {
  public readonly userClass = input<ClassValue>('', {alias: 'class'});
  private readonly _settableClass = signal<ClassValue>('');
  private readonly _variant = signal<ButtonVariants['variant']>('default');
  private readonly _size = signal<ButtonVariants['size']>('default');
  protected _computedClass = computed(() =>
    hlm(buttonVariants({variant: this._variant(), size: this._size()}), this._settableClass(), this.userClass()),
  );

  @Input()
  set variant(variant: ButtonVariants['variant']) {
    this._variant.set(variant);
  }

  @Input()
  set size(size: ButtonVariants['size']) {
    this._size.set(size);
  }

  setClass(value: ClassValue) {
    this._settableClass.set(value);
  }
}
