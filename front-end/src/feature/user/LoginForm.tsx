import React, { useContext } from "react";
import { Form as FinalForm, Field } from "react-final-form";
import TextInput from "../../app/common/form/TextInput";
import { Form, Button, Header } from "semantic-ui-react";
import { RootStoreContext } from "../../app/stores/rootStore";
import { IUserFormValues } from "../../app/models/user";
import { FORM_ERROR } from "final-form";
import { combineValidators, isRequired } from "revalidate";
import ErrorMessage from "../../app/common/form/ErrorMessage";
import { Link } from "react-router-dom";

const validate = combineValidators({
  email: isRequired("email"),
  password: isRequired("password"),
});
const LoginForm = () => {
  const rootStore = useContext(RootStoreContext);
  const { login } = rootStore.userStore;

  return (
    <FinalForm
      onSubmit={(values: IUserFormValues) =>
        login(values).catch((error) => ({
          [FORM_ERROR]: error,
        }))
      }
      validate={validate}
      render={({
        handleSubmit,
        submitting,
        submitError,
        invalid,
        pristine,
        dirtySinceLastSubmit,
      }) => (
          <Form style={{  width: 700, margin: '5% auto auto auto' }} onSubmit={handleSubmit} error>
            <Header
              as="h2"
              content="Login"
              color="blue"
              textAlign="center"
            />
            <Field
              name="email"
              type="email"
              component={TextInput}
              placeholder="Email..."
            />
            <Field
              type="password"
              name="password"
              component={TextInput}
              placeholder="Password..."
            />
            {submitError && !dirtySinceLastSubmit && (
              <div style={{ marginTop: 0, marginBottom: 10 }}>
                <ErrorMessage error={submitError} text='Invalid email or password' />
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'center', padding: '0px 30%' }}>
              <div style={{ display: 'flex', paddingRight: 10 }}>
                <Button
                  disabled={(invalid && !dirtySinceLastSubmit) || pristine}
                  loading={submitting}
                  color='blue'
                  content="Đăng nhập"
                  fluid
                />
              </div>
              <div style={{ display: 'flex', flex: 1 }}>
                <Button
                  loading={false}
                  color='teal'
                  content="Trang chủ"
                  value='location'
                  as={Link}
                  to='/dashboard'
                />
              </div>
            </div>


            {/* <pre>{JSON.stringify(form.getState(), null, 2)}</pre> */}
          </Form>
        )}
    />
  );
};

export default LoginForm;
