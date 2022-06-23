import * as C from './styles';

type Props = {
  url: string;
  name: string;
}

export const GalleryItem = ({ url, name }: Props) => {
  return (
    <C.Container>
      <img src={url} alt={name} />
      <C.ImgTitle>{name}</C.ImgTitle>
    </C.Container>
  )
}