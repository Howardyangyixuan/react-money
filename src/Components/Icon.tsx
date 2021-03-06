import React from 'react';

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);

try {importAll(require.context('../icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name: string
  fill?: string
}

function Icon(props: Props) {
  return (
    <svg className='icon' fill={props.fill?props.fill:""}>
      <use xlinkHref={'#' + props.name}/>
    </svg>
  );
}

export default Icon;