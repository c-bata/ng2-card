# ng2-card
Card view component for angular2.
**This is an alpha release. Use caution and hope.**

![example](./example/ng2-card.gif)

## Installation

```
$ npm install --save ng2-card
```

## Usage

```typescript
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

## Properties

- **title {string}** : a title text
- **subtitle {string}** : a subtitle text
- **linkUrl {string}** : a link url
- **linkUrl {string}** : a image url
- **tags {string}** : the tags text separated by comma

