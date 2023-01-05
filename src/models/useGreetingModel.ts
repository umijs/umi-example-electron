import { readFileByPath } from '@/services';
import { useRequest } from '@umijs/max';

function useGreetingModel() {
  const {
    data: fileContent,
    loading: loadingFileContent,
    run: readFileContent,
    error,
  } = useRequest(readFileByPath, {
    manual: true,
    throwOnError: true,
  });

  return {
    fileContent,
    loadingFileContent,
    readFileContent,
    error,
  };
}

export default useGreetingModel;
