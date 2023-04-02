export interface ImageResponse {
  imageUrl: string;
}

export interface ImagesResponse {
  images: ImageResponse[];
}

export interface ImageForm {
  image: Blob;
}
