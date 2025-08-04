import { useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
}

/**
 * Formulario con react-hook-form
 * @returns Formulario con validación y estado en tiempo real
 */
export const FormsPage = () => {

  const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
    defaultValues: {
      name: 'Rodrigo',
      email: 'rodrigo@gmail.com'
    }
  });

  const onSubmit = (myForm: FormInputs) => {
    console.log(myForm);
  }

  console.log(watch('name'));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Formulario</h3>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <input type="text" placeholder="Nombre" {...register('name', { required: true})} /> 
          <input type="text" placeholder="Email" {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
          <button type="submit">Enviar</button>
        </div>
      </form>

      <pre>
        {JSON.stringify(formState, null, 2)}
      </pre>
    </>
  )
}