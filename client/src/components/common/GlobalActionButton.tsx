import React from 'react'

interface Props {
  children: React.ReactNode
  callbackFn: () => void
}

const GlobalActionButton = ({children, callbackFn}: Props) => {
  return (
		<button
			onClick={() => callbackFn}
			className="bg-gray-100 p-1 rounded-sm cursor-pointer hover:bg-gray-200">
			{children}
		</button>
	);
}

export default GlobalActionButton