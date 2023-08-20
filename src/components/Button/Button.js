import { ButtonMore } from './Button.styled';

export const Button = ({ moreCards }) => {
  return (
    <div>
      <ButtonMore onClick={moreCards}>Load more</ButtonMore>
    </div>
  );
};
