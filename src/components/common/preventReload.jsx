import usePrompt from 'src/hooks/usePrompt';
import { useFormContext } from 'react-hook-form';

const PreventReload = () => {
  const { formState } = useFormContext();

  usePrompt('You have unsaved changes. Are you sure you want to leave?', formState.isDirty);
};

export default PreventReload;
