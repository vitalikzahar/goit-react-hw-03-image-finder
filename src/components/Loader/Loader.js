import { Blocks } from 'react-loader-spinner';

export const Loader = ({ visible }) => {
  return (
    <Blocks
      visible={visible}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    />
  );
};
