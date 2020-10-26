import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import createPersistedState from "vuex-persistedstate"
import SecureLS from "secure-ls";

const ls = new SecureLS({
	isCompression: false,
	encodingType: 'aes',
	encryptionSecret: '586145de417089b58879b96f847a6625'
});

import config from './config'
import user from './user'

const pluginState = createPersistedState({
	storage: {
		getItem: key => ls.get(key),
		setItem: (key, value) => ls.set(key, value),
		removeItem: key => ls.remove(key)
	},
	path: [
		'user',
		'config'
	]
})

export default new Vuex.Store({
	state: {
		drawer: null,
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		user: user,
		config: config
	},
	plugins: [pluginState],
})
