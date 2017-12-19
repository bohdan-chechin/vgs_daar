import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('vaults', function() {
    this.route('view', {path: '/:vault_id'}, function() {
      this.route('analytics');
    });
    this.route('analytics', {path: 'analytics'});
  });
});

export default Router;
