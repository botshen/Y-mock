import { globalRouters } from "@/router";
import { RouterProvider } from "react-router-dom"

function App() {
  return (
    <div className='w-[800px] h-[568px] p-6'>
      <RouterProvider router={globalRouters} />
    </div>
  );
}

export default App;
