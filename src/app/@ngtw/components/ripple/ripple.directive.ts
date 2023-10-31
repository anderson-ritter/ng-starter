import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ngtw-ripple], [ngtwRipple]',
  exportAs: 'ngtwRipple',
  standalone: true
})
export class NgtwRippleDirective {

  constructor(private elementRef: ElementRef<HTMLElement>) { }

  @HostListener('click', ['$event'])
  handleClick(event: any): void {
    const container = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(container.clientWidth, container.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (container.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (container.offsetTop + radius)}px`;

    circle.classList.add('ripple');
    circle.classList.add('absolute');
    circle.classList.add('rounded-[50%]');
    circle.classList.add('animate-ripple');
    circle.classList.add('bg-white');
    circle.classList.add('opacity-70');

    const ripple = container.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    container.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  }

}
