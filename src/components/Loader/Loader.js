import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <Bars
        height="80"
        width="80"
        color="orange"
        ariaLabel="bars-loading"
        wrapperStyle={{
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '2',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          background: 'rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
