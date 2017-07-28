import _ from 'lodash';
import { FETCH_POSTS } from '../actions';
import { FETCH_POST } from '../actions';
import { DELETE_POST } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            const post = action.payload.data;
            const newState = { ...state };
            newState[post.id] = post;
            return newState;
        case DELETE_POST:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}