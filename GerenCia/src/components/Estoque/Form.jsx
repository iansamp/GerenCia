import styled from 'styled-components';
import Input from '../form/Input';
import Select from '../form/Select';
import Button from '../form/Button';
import { Link } from 'react-router-dom';

export default function Form(){
    return(
        <>
            <Input/>

            <Link to='/estoque'>voltar</Link>
        </>
    )
}