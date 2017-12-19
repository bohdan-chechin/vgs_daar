import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['my-class', 'my-other-class'],
  headlines: ['Name', 'Value', 'Records', 'Impact'],
  actions: {
    export () {
      const csvContent = this.get('tags').map((tag) => [
        tag.get('tagName'), 
        tag.get('tagValue'),
        tag.get('records'),
        tag.get('impact')])
      .map((row) => row.join(','))
      .join('\n');
      
      var blob = new Blob(
        [this.headlines.join(',') + '\n' + csvContent],{
          type: "text/csv;charset=utf-8;"
      });
      window.location.href = window.URL.createObjectURL(blob)
    }
  }
});
