import { useModel } from '@umijs/max';
import { useSize } from 'ahooks';
import { Alert, Input } from 'antd';
import { useMemo } from 'react';
import styles from './index.less';

const TITLE_HEIGHT = 82;
const INPUT_HEIGHT = 32;

const Greeting: React.FC = () => {
  const size = useSize(document.body);
  const { fileContent, readFileContent, loadingFileContent, error } =
    useModel('useGreetingModel');
  const contentHeight = useMemo(
    () => (size?.height ? size.height - TITLE_HEIGHT - INPUT_HEIGHT : 0),
    [size],
  );

  return (
    <div className={styles.container}>
      <h1>Welcome to the Example!!</h1>
      <Input.Search
        loading={loadingFileContent}
        placeholder="Enter a local file path"
        onSearch={readFileContent}
      />
      {error && <Alert message={error.message} type="error" />}
      {fileContent && (
        <Input.TextArea value={fileContent} style={{ height: contentHeight }} />
      )}
    </div>
  );
};

export default Greeting;
