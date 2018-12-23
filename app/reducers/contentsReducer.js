/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';
import * as Utils from 'app/lib/utils';

const initialState = {
	title: '',
	totalItems: 0,
	items: [],
	loading: false
};

export const contentsReducer = createReducer(initialState, {
	[types.CONTENTS_REQUEST](state, action) {
		return {
			...state,
			loading: true,
			items: []
		};
	},
	[types.CONTENTS_RESPONSE](state, action) {
		return {
			...state,
			items: action.response,
			loading: false
		};
	},
	[types.CONTENTS_FAILED](state) {
		return {
			...state,
			items: [],
			loading: false
		};
	},
	[types.SEARCH_REQUEST](state, action) {
		const { items } = state;
		//const searchedItems = items.filter(item => {return item.name.toLowerCase().startsWith(action.keyword)});
		const searchedItems = Utils.searchFunction(action.keyword, items);
		return {
			...state,
			searchedItems
		};
	}
});
