import { useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
}

/**
 * Componente de formulario usando react-hook-form
 * 
 * @returns Formulario con campos de nombre y email
 * - Valores por defecto: Rodrigo / rodrigo@gmail.com
 * - Usa react-hook-form para gestión de estado
 */
export const FormsPage = () => {

  const { register } = useForm<FormInputs>({
    defaultValues: {
      name: 'Rodrigo',
      email: 'rodrigo@gmail.com'
    }
  });
  return (
    <>
      <form>
        <h3>Formulario</h3>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <input type="text" placeholder="Nombre" {...register('name')} /> 
          <input type="text" placeholder="Email" {...register('email')} />
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  )
}