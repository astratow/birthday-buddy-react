import {useState } from 'react';
import data from "./data";
import List from './list';
import Person from './Person';

const App = () => {
	const [people, setPeople] = useState(data);
	console.log(people);
  return <main>
		<section className='container'>
			<h3>{people.length} birthdays today</h3>
			<List people={people} />
			<button 
				type='button'
				className='btn btn-block'
				onClick={() => setPeople([])}
			>clear all</button>
		</section>
	  {/* <h2>Birthday Reminder - Starter</h2>; */}
  </main>
};
export default App;
