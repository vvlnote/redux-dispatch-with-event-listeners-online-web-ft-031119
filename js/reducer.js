// add code snippets from README
//let state = {count: 0};

function changeCount(state ={count: 0}, action) {
	switch (action.type) {
		case 'INCREASE_COUNT':
			return{count: state.count + 1};
		default:
			return state;
	}
}



function render(){
	let container = document.getElementById('container');
	container.textContent = store.getState().count;
}

function createStore(reducer) {
	let state;

	function dispatch(action) {
		state = reducer(state, action);
		render();
	}

	function getState(){
		return state;
	}

	return {
		dispatch,
		getState
	};
};

let store = createStore(changeCount);
store.dispatch({type:'@@INIT'});


let button = document.getElementById('button');
button.addEventListener('click', function() {
	store.dispatch({type:'INCREASE_COUNT'});
})



