import { useEffect } from 'react'
import './App.css'
import {useForm} from 'react-hook-form'

function App() {
  const {register, handleSubmit, watch, getValues, setValue, formState: {errors}}  = useForm();
  
  
  function onSubmit(data) {
    console.log(data);
  }
  useEffect(() => {
    console.log(getValues());
  }, [watch(getValues())])

  const onchange = (e) => {
    setValue("Campo3", e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("campo1", {onChange: (e) => onchange(e)} )} /><br></br>
        <input {...register("campo2", {required:true})} /><br></br>
        {errors.campo2 && <span> El Campo2 es obligatorio.</span>}
        <br></br>
        <input {...register("campo3")} /><br></br>
        <input type="submit" />
      </form>
      {JSON.stringify(getValues())}
    </>
  )
}


export default App
