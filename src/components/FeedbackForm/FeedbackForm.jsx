import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './FeedbackForm.module.css';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  message: Yup.string()
    .min(3, 'Too short')
    .max(256, 'Too long')
    .required('Required'),
  level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
});

const initialValues = {
  username: '',
  email: '',
  message: '',
  level: 'good',
};

export const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Username</label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={nameFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div>
          <label htmlFor={msgFieldId}>Message</label>
          <Field as="textarea" name="message" rows="5" id={msgFieldId} />
          <ErrorMessage className={css.error} name="message" component="span" />
        </div>
        <div>
          <label htmlFor={levelFieldId}>Service satisfaction level</label>
          <Field as="select" name="level" id={levelFieldId}>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
          <ErrorMessage className={css.error} name="level" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
