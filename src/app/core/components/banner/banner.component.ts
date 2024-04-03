import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input({ required: true }) bannerTitle: string = '';
  @Input() bannerOverview = '';
  @Input() key = 'r_pUE7OcN8w';
  private sanitizer = inject(DomSanitizer);
  videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`
  );

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['key']) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`
      );
    }
  }
}
