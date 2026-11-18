import React from 'react';
// import { Camera, Home, User } from 'lucide-react';
import Counter from './components/counter';


const App = () => {
  return (
    <div className="bg-amber-300 p-5">
      <h1 className='py-4'>Belajar Tailwind & Lucide</h1>
      <button className='btn btn-primary'>Button Example</button>
      {/* <Camera size={32} color="blue" />
      <Home size={32} color="green" />
      <User size={32} color="red" /> */}
      <Counter/>
    </div>
  );
};

export default App;