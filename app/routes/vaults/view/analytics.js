import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  queryParams: {
    range: {
      refreshModel: true,
      replace: true,
      as: 'range'
    }
  },
  websockets: Ember.inject.service(),
  socketRef: null,
  model (params) {
    let { vault_id } = this.paramsFor('vaults.view');
    let operations
    if (!params.range || params.range === 'today') {
      this.listenToSocket()
    } else {
      this.unlistenSocket()
    }
    if (params.range) {
      operations = this.get('store').query('operation', {vault_id, range: params.range})
    }
    operations = this.get('store').query('operation', {vault_id})
    //operations = this.get('store').findAll('operation')
    return RSVP.hash({
      operations,
      vault: this.get('store').findRecord('vault', vault_id)
    })
  },
  listenToSocket () {
    const socket = this.get('websockets').socketFor('ws://localhost:7000/');
    socket.on('open', this.setFilter, this);
    socket.on('message', this.updateModel, this);
    this.set('socketRef', socket);
  },
  setFilter () {
    let { vault_id } = this.paramsFor('vaults.view')
    const socket = this.get('socketRef');
    socket.send('setFilter', {vaultId: vault_id})
  },
  deactivate () {
    this.unlistenSocket();
  },
  unlistenSocket () {
    const socket = this.get('socketRef');
    if (socket) {
      socket.off('open', this.setFilter, this);
      socket.off('message', this.updateModel, this);
    }
  },
  updateModel(event) {
    const updates = JSON.parse(event.data);
    if (!updates.map || !this.get('controller')) return;
    updates.map((rec) => {
      // let op = this.get('controller').get('model').operations
      // debugger
      //rec.vaultId = 'vlt-asdf1234'
      this.get('controller').get('model').operations.store.push({
        data: {
          id: rec.operation + rec.key,
          type: 'operation',
          attributes: rec          
        }
      })
    });
  }
});
