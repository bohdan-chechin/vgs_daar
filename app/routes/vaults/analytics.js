import Route from '@ember/routing/route';

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
    if (!params.range || params.range === 'today') {
      this.listenToSocket()
    } else {
      this.unlistenSocket()
    }
    if (params.range) {
      return this.get('store').query('operation', {range: params.range})
    }
    return this.get('store').findAll('operation')
  },
  listenToSocket () {
    const socket = this.get('websockets').socketFor('ws://localhost:7000/');
    socket.on('open', this.setFilter, this);
    socket.on('message', this.updateModel, this);
    this.set('socketRef', socket);
  },
  setFilter () {
    const socket = this.get('websockets').socketFor('ws://localhost:7000/');
    socket.send('setFilter', {vaultId: 'all'})
  },
  unlistenSocket () {
    const socket = this.get('socketRef');
    if (socket) {
      socket.off('open', this.setFilter, this);
      socket.off('message', this.updateModel, this);
      socket.disconnect();
    }
  },
  updateModel(event) {
    const updates = JSON.parse(event.data);
    if (!updates.map) return
    updates.map((rec) => {
      this.store.push({
        data: {
          id: rec.operation + rec.key,
          type: 'operation',
          attributes: rec          
        }
      });
    });
  }
});
