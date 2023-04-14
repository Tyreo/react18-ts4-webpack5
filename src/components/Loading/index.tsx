import Styles from './index.less';

export default function Loading({ style = {} }) {
  return (
    <div className={`${Styles.official_loading}`} style={style || {}}>
      asdf
      <div>
        <i className={Styles.icon} />
      </div>
    </div>
  );
}
