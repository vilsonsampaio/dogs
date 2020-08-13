import React from 'react';
import { useNavigate } from 'react-router-dom';

import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';

import Head from '../../../components/Helper/Head';
import Error from '../../../components/Helper/Error';


import Input from '../../../components/Form/Input';
import Button from '../../../components/Form/Button';

import { PHOTO_POST } from '../../../services/api';

import styles from './styles.module.css';

const MyAccountPost = () => {
  const name = useForm();
  const weight = useForm('number');
  const age = useForm('number');
  const [img, setImg] = React.useState({});
  
  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/my-account');
  }, [data, navigate])

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nome', name.value);
    formData.append('peso', weight.value);
    formData.append('idade', age.value);
    formData.append('img', img.raw);

    const token = window.localStorage.getItem('DOGS_token');

    if (token) {
      const { url, options } = PHOTO_POST(formData, token);
      
      await request(url, options);
    }
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />

      <form onSubmit={handleSubmit}>
        <Input 
          label="Nome" 
          name="nome" 
          type="text"
          {...name} 
        />

        <Input 
          label="Peso" 
          name="peso" 
          type="number"
          {...weight} 
        />

        <Input 
          label="Idade" 
          name="idade" 
          type="number" 
          {...age}
        />

        <input 
          type="file"
          name="img"
          id="img"
          className={styles.file}
          onChange={handleImgChange}
        />
        {loading
          ? <Button disabled>Enviando...</Button>
          : <Button>Enviar</Button>
        }
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div 
            className={styles.preview} 
            style={{ 
              backgroundImage: `url('${img.preview}')` 
            }}
          ></div>)}
      </div>
    </section>
  );
}

export default MyAccountPost;
