import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  features = [
    {
      title: 'Manage your school in one platform',
      description:
        'Streamline administration tasks with intuitive tools that simplify school operations.',
      image: 'https://www.littlelives.com/_next/image?url=https%3A%2F%2Fll-cms-prod.s3.ap-southeast-1.amazonaws.com%2FImage_2x_5_4acb5b8433.png&w=1200&q=75'
    },
    {
      title: 'Track, plan, monitor',
      description:
        'Teachers and school leaders can plan curriculum, monitor student progress, and analyze performance.',
      image: '/assets/laptop.png'
    },
    {
      title: 'Keep everyone on the same platform',
      description:
        'One-stop communication between parents, teachers, and school leaders to stay in sync.',
      image: '/assets/tools.png'
    },
    {
      title: 'Engage with children digitally',
      description:
        'Capture daily moments and create digital portfolios that enhance learning experiences.',
      image: '/assets/Generic-Herowebp.webp'
    }
  ];

}
