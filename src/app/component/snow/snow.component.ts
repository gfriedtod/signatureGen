import {Component, ElementRef, ViewChild} from '@angular/core';

interface SnowFlakeConfig {
  depth: number ;
  left: number ;
  speed: number ;
}

@Component({
  selector: 'app-snow',
  standalone: true,
  imports: [],
  templateUrl: './snow.component.html',
  styleUrl: './snow.component.css'
})
export class SnowComponent {
  public snowFlakes: SnowFlakeConfig[];

  // I initialize the app component.
  constructor() {

    this.snowFlakes = [];

    for ( var i = 1 ; i <= 150 ; i++ ) {

      this.snowFlakes.push({
        depth: this.randRange( 1, 5 ),
        left: this.randRange( 0, 100 ),
        speed: this.randRange( 1, 5 )
      });

    }

  }

  // ---
  // PRIVATE METHODS.
  // ---

  // I generate a random integer between the given range, inclusive.
  private randRange( min: number, max: number ) : number {

    var range = ( max - min );

    return( min + Math.round( Math.random() * range ) );


  }
}
