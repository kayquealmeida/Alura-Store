import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import style from "./Form.module.scss";

export default function Form() {
  return (

    <form className={style.adicionarProduto}>
      <h2>Adicionar novo produto</h2>
      <Input 
        labelTittle="Nome" 
        inputName="nome" 
        inputId="nome" 
        placeholderText="Digite o nome do produto" 
        requiredBoolean={true}
      />
      <Input 
        labelTittle="Preço" 
        inputName="preco" 
        inputId="preco" 
        placeholderText="Digite o preço do produto" 
        requiredBoolean={true}
      />
      <Input 
        labelTittle="Imagem" 
        inputName="imagem" 
        inputId="imagem" 
        placeholderText="Digite o endereço da imagem" 
        requiredBoolean={true}
      />
      <Select 
        labelTittle="Departamento"
        selectId="departamento"
        selectName="departamento"
      />
      <Button 
        tittle="Adicionar" 
      />
    </form>
  )
}