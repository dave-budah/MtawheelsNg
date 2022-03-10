import { Component } from '@angular/core';

declare var jQuery: any;

// Hide topbar
function scrollUp(this: any) {
  const scrollUp = document.getElementById('topbar');
//    When the scroll is higher than 50 viewport, add the hide-topbar class to the topbar div.
  if(this.scrollY >= 50) { // @ts-ignore
    scrollUp.classList.add('hide-topbar');
  }
  else { // @ts-ignore
    scrollUp.classList.remove('hide-topbar')
  }
}
window.addEventListener('scroll', scrollUp)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MtawheelsNg';

  ngOnInit(): void {
    scrollUp()
  }

}
