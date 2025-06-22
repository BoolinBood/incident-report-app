import React from 'react'

interface Props {
  children: React.ReactNode
  buttonType: "submit" | "reset" | "button" | undefined
  callbackFn: () => void
}

const GlobalActionButton = ({children, callbackFn, buttonType}: Props) => {
  return (
		<button
			type={buttonType}
			onClick={() => {
				callbackFn()
			}}
			className="bg-gray-100 p-1 rounded-sm cursor-pointer hover:bg-gray-200">
			{children}
		</button>
	);
}

export default GlobalActionButton