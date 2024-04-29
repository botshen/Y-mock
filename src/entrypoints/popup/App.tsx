import { Button } from '@/components/ui/button';
import { useState } from 'react';
 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='w-[400px] h-[400px]'> 
      <h1>WXT + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        
      </div>
      <p className="bg-rose-500 text-xl text-white">
        Click on the WXT and React logos to learn more
      </p>
    </div>
  );
}

export default App;
