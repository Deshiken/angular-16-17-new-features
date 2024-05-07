import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-optimized-images',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './optimized-images.component.html',
  styleUrl: './optimized-images.component.scss'
})
export class OptimizedImagesComponent {

}
