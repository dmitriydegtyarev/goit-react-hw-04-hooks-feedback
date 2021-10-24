import css from 'Component/Container/Container.module.css';

export const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
