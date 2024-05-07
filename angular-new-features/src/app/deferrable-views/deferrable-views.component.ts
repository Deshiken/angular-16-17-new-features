import { Component } from '@angular/core';
import {IMAGE_CONFIG, IMAGE_LOADER, ImageLoaderConfig} from "@angular/common";

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss',
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        breakpoints: [380, 640, 1200, 1920, 2048, 3840],
        placeholderResolution: 25
      }
    },
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://cdn-images-1.medium.com/max/${config.width}/${config.src}`;
      },
    },
  ]
})
export class DeferrableViewsComponent {
  showContent: boolean = false;
}
