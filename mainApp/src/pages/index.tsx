import { Link, MicroApp  } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <Link to='/microapp1'>我要去子应用</Link>
      <div>
        直接加载
        <MicroApp name='app1' />
      </div>
    </div>
  );
}