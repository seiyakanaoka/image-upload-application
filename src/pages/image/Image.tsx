import { FC, ChangeEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import style from './Image.module.scss';

import { PAGES_ROUTE } from '@/constants/common/route';

const Image: FC = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState<string | undefined>();

  const { setValue } = useForm<{ prefix: string; image: Blob }>({
    mode: 'onChange',
  });

  const handleChangeImage: ChangeEventHandler<HTMLInputElement> = (e) => {
    const uploadImage = e.target.files?.[0];
    if (!uploadImage) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result !== 'string') return;
      setImage(result);
    };
    reader.readAsDataURL(uploadImage);
    setValue('image', uploadImage);
  };

  const handleClick = () => {
    navigate(PAGES_ROUTE.USER);
  };

  return (
    <div className={style['image-page']}>
      <label className={`${style['field']} ${image && style['-set']}`}>
        <img src={image} alt="" className={style['image']} />
        <input
          type="file"
          onChange={handleChangeImage}
          className={style['upload']}
        />
      </label>
      <button
        onClick={handleClick}
        disabled={!image}
        className={style['action']}
      >
        アップロード
      </button>
    </div>
  );
};

export default Image;
