const store = require('./app/store');
const cakeSlice = require('./features/cake/cakeSlice').cakeActions;
const icecreamSlice = require('./features/icecream/icecreamSlice').icecreamSlice;
const fetchUsers = require('./features/user/userSlice').fetchUsers;

console.log('Initial state:', store.getState());
const unsubscribe = store.subscribe(() =>
    console.log('Updated state:', store.getState())
);

store.dispatch(fetchUsers())

// store.dispatch(cakeSlice.ordered());
// store.dispatch(cakeSlice.ordered());
// store.dispatch(cakeSlice.ordered());

// store.dispatch(cakeSlice.restocked(3));
// store.dispatch(icecreamSlice.ordered());
// store.dispatch(icecreamSlice.ordered());
// store.dispatch(icecreamSlice.restocked(2));
// unsubscribe();