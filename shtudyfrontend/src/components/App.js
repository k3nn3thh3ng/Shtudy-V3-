import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import CreateQuestion from './CreateQuestion';
import NewUser from './NewUser';
import Login from './Login';
import SubjectPage from './SubjectPage';
import NewQuestion from './NewQuestion';
import ShoppingCart from './ShoppingCart';
import CartPDFReview from './CartPDFReview';
import SubjectPageFilter from './SubjectPageFilter';


function App() {
  return (
    <div>
		<BrowserRouter>

			<Switch>
				<Route path='/' exact >
					<HomePage />
				</Route>
				<Route path='/new' exact >
					<CreateQuestion />
				</Route>
				<Route path='/newuser' exact >
					<NewUser />
				</Route>
				<Route path='/login' exact >
					<Login />
				</Route>
				<Route path='/subjectpage' exact >
					<SubjectPage />
				</Route>
				<Route path='/subjectpage/filter' exact>
					<SubjectPageFilter />
				</Route>
				<Route path='/newquestion' exact>
					<NewQuestion />
				</Route>
				<Route path='/cart' exact>
					<ShoppingCart />
				</Route>
				<Route path='/cartreview' exact>
					<CartPDFReview />
				</Route>
			</Switch>
		</BrowserRouter>
    </div>
  );
}

export default App;
