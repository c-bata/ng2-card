import {Component, Input} from "@angular/core";

@Component({
    selector: "card",
    template: `
    <div class="card">
        <a href="{{linkUrl}}" target="_blank">
            <img src="{{imageUrl}}" />
            <span class="card-description">
                <ul class="card-tags">
                    <li *ngFor="let tag of getTags()">{{tag}}</li>
                </ul>
                <h2 class="card-heading">
                    {{title}}
                    <span>{{subtitle}}</span>
                </h2>
            </span>
        </a>
    </div>
    `,
    styles: [`
        .card {
          overflow: hidden;
          position: relative;
        }
        .card > a {
          padding: 0;
        }
        .card img {
          width: 100%;
          height: auto;
        }
        .card .card-description {
          display: flex;
          display: -webkit-flex;
          flex-direction: column;
          align-content: flex-end;
          padding: 20px;
          position: absolute;
          bottom: 10px;
        }
        
        .card-tags {
          font-size: 10px;
          color: #ffffff;
          padding: 0;
          margin: 0;
        }
        .card-tags  > li {
          list-style-type: none;
          border: 1px solid #ffffff;
          float: left;
          margin: 3px;
          padding: 4px;
        }
        
        .card-heading {
          font-size: 22px;
          font-weight: bold;
          line-height: normal;
          margin: 10px 0 0 0;
          color: #ffffff;
          padding-left: 2px;
        }
        .card-heading > span {
          font-size: 16px;
          font-weight: normal;
        }
        
        .card-description {
          visibility: hidden;
        }
        .card:hover .card-description {
          visibility: visible;
        }
        .card:hover img {
          -webkit-transition: 0.3s ease-in;
          -moz-transition: 0.3s ease-in;
          -o-transition: 0.3s ease-in;
          transition: 0.3s ease-in;
          
          -webkit-filter: brightness(0.3);
          -moz-filter: brightness(0.3);
          -o-filter: brightness(0.3);
          filter: brightness(0.3);
          
          animation-name: scaleImage;
          animation-duration: 0.3s;
          animation-timing-function: ease-in-out;
        }
        
        .card:hover .card-tags {
          animation-name: slideIn;
          animation-duration: 0.3s;
          animation-timing-function: ease-in-out;
        }
        @keyframes scaleImage {
          80% {
            -webkit-transform: scale(1.06);
            -moz-transform: scale(1.06);
            -ms-transform: scale(1.06);
            -o-transform: scale(1.06);
            transform: scale(1.06);
          }
        }
        
        @keyframes slideIn {
          from {
            -webkit-transform: translate(100%,0);
            -moz-transform: translate(100%,0);
            -ms-transform: translate(100%,0);
            -o-transform: translate(100%,0);
            transform: translate(100%,0);
          }
          80% {
            -webkit-transform: translate(-3%,0);
            -moz-transform: translate(-3%,0);
            -ms-transform: translate(-3%,0);
            -o-transform: translate(-3%,0);
            transform: translate(-3%,0);
          }
        }
    `],
})
export class CardComponent {
    @Input() linkUrl: string;
    @Input() imageUrl: string;
    @Input() tags: string;
    @Input() title: string;
    @Input() subtitle: string;

    getTags() {
        return this.tags.split(",");
    }
}
