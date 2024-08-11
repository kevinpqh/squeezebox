import { Component, QueryList, ViewChildren } from '@angular/core';
import { SqueezeBox } from 'projects/squeezebox/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  @ViewChildren(SqueezeBox) squeezeboxes: QueryList<SqueezeBox>;

  public itemsList:Object[] = [
      {
      title: 'Item 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
      },
      {
      title: 'Item 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
      }
  ]

    constructor() {

    }

    itemWasToggled(event) {
        console.log('collapsed:', event);
    }

    refreshClick(event:Event) {
        event.preventDefault();
        this.squeezeboxes.toArray().forEach(function(s) {
            s.refresh();
        });
    }
}
