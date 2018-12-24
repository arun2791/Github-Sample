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
		const items = action.response;
		const languages = [{label:'Any', value: 0}];
		items.map(data=>{
			const index = languages.findIndex(val=>val.label === data.language)
			if(index<0 && data.language){
				languages.push({label:data.language,value:languages.length});
			}
			return;
		})
		return {
			...state,
			items,
			loading: false,
			languages
		};
	},
	[types.CONTENTS_FAILED](state) {
		return {
			...state,
			items: [],
			loading: false
		};
	},
});
