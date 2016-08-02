# ng2-card
Card view component for angular2

## Installation

```
$ npm install --save ng2-card
```

## Usage

![example](./example/ng2-card.gif)

```
import {Component} from "@angular/core";
import {CARD_DIRECTIVES} from "ng2-card";

@Component({
    selector: "my-app",
    template: `
    <card title="Portfolio"
          subtitle="This is my portfolio website."
          linkUrl="https://github.com/c-bata/c-bata.github.io"
          imageUrl="/img/works/portfolio.png"
          tags="HTML5,Sass,Compass,Angular2"></card>
`,
    directives: [CARD_DIRECTIVES]
})
export class App {}
```

