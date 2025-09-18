import { Quill } from 'react-quill';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Controller } from 'react-hook-form';
import { FormHelperText, Typography } from '@mui/material';

const RichText = ({ controller, required = true, label }) => {
  const Font = Quill.import('formats/font');
  Font.whitelist = ['Arial', 'times', 'Calibiri', 'serif', 'monospace', 'san', 'Calligraffitti'];
  Quill.register(Font, true);
  const modules = {
    toolbar: {
      container: [
        [{ header: '1' }, { header: '2' }],
        [{ font: ['Arial', 'times', 'Calibiri', 'serif', 'monospace', 'san', 'Calligraffitti'] }],
        [{ size: [] }],
        [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'code', 'formula'],
        ['clean'],
      ],
      handlers: {},
    },
  };
  const formats = [
    'header',
    'font',
    'size',
    'align',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'color',
    'background',
    'list',
    'bullet',
    'link',
    'code',
    'formula',
  ];
  return (
    <>
      {label && (
        <>
          <Typography variant="caption" fontWeight={800}>
            {label}
          </Typography>
          <br />
        </>
      )}
      {controller && (
        <>
          <Controller
            control={controller.control}
            name={controller.name}
            rules={{ required }}
            render={({ field: { onChange, value, onBlur } }) => (
              <ReactQuill
                value={value}
                onChange={(text) => {
                  onChange(text);
                }}
                modules={modules}
                formats={formats}
                onBlur={onBlur}
              />
            )}
          />
          {controller.errors && (
            <FormHelperText sx={{ color: 'error.main' }}>{controller.errors.message}</FormHelperText>
          )}
        </>
      )}
    </>
  );
};

export default RichText;
