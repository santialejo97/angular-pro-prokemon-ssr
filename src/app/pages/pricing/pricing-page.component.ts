import { isPlatformServer } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'page-pricing',
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    // if (!isPlatformServer(this.platform)) {
    //   document.title = 'Pricing Page';
    // }
    this.title.setTitle('Pricing Page');
    this.meta.updateTag({
      name: 'description',
      content: 'Este es mi pricing page',
    });
    this.meta.updateTag({ name: 'og:title', content: 'pricing Page' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Hola,Mundo,Curso,Angular,PRO',
    });
  }
}
