To complete this application is used Ember.js, Charts.js via ember--cli-chart component and for export functionality i implemented 'Download as CSV'. I chose Chart.js because it covers all requested functionality and very easy to install, also it's a well tested solution that is proven by time and has good test coverage.
The reason to chose CSV as export format is same, it's easy to implement and also this is the most general and flexible format that can be easy converted to PDF or XLS.
All problems that i faced was caused by lack of knowledge about modern Ember. The last version that i worked with was 1.13 or even elder so i had to refresh it in my memory. I solved this problem by reading oficial documentation, looking for some answers in search engines and asking the rest questions in slack.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd vgs`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
