import Component from '@ember/component';

export default Component.extend({
  headlines: ['Name', 'Value', 'Records', 'Impact'],
  actions: {
    export () {
      const csvContent = this.get('tags').map((tag) => [
        tag.get('tagName'), 
        tag.get('tagValue'),
        tag.get('records'),
        tag.get('impactForCSV')])
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
