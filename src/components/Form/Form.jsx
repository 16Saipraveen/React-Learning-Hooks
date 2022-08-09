import React from "react";
import { useForm } from "react-hook-form";
import { Header } from "./Headers";
import { Input } from "./Input";

let renderCount = 0;

const Controller = ({ register, rules, render, control, name }) => {
  const props = register(name);
  return render({
    onChange: (e) => props.onChange({
        target: {
            name,
            value: e.target.value
        }
    }),
    onBlur: props.onBlur,
    name: props.name,
  });
};

const Form = () => {
  const { handleSubmit, register, errors, control } = useForm();
  const onSubmitForm = (data) => {
    // e.preventDefault();
    console.log(data);
  };
  const onErrorForm = (error) => {
    // e.preventDefault();
    console.log(error);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitForm, onErrorForm)}>
      <Header
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      <label htmlFor="firstName">First Name:</label>
      <input
        {...register("firstName", { required: "This is mandatory" })}
        id="firstname"
        placeholder="First Name"
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <Controller
        {...{
          control,
          name: "lName",
          register,
          rules: {},
          render: (props) => <Input {...props} />,
        }}
      />
    </form>
  );
};

export default Form;
