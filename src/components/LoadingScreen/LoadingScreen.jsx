import { Spinner } from "@material-tailwind/react";
 
// export function CustomSpinner() {
//   return <Spinner className="h-16 w-16 text-gray-900/50" />;
// }

import React from 'react'

function LoadingScreen() {
  return (
    <>
    <div className="flex justify-center items-center h-[50%]">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
    </div>
    
    </>
  )
}

export default LoadingScreen