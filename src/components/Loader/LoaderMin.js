import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (

      <Bars
        height="60"
        width="60"
        color="#ff751d"
        ariaLabel="bars-loading"
        visible={true}
      />

  );
};
