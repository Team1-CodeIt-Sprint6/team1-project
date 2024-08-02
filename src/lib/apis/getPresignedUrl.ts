import axios from 'axios';

interface UrlProps {
  profileImageUrl: string;
}

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzIwLCJ0ZWFtSWQiOiI2LTEiLCJpYXQiOjE3MjI2MjY4MzMsImV4cCI6MTcyMjYyODYzMywiaXNzIjoic3AtZ2xvYmFsbm9tYWQifQ.ven9YdSBpi-yV4JTV54Zt3vQc1pBy2PUJ4sjv2y1vPs';

export const createPresignedUrl = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);

  const res = await axios.post<UrlProps>(
    'https://sp-globalnomad-api.vercel.app/6-1/users/me/image',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const presignedUrl = res.data.profileImageUrl;

  if (!presignedUrl) {
    throw new Error('Presigned URL is not available in the response');
  }

  return presignedUrl;
};

export const uploadUrlToS3 = async (presignedUrl: string, file: File) => {
  await axios.put(presignedUrl, file, {
    headers: {
      'Content-Type': file.type,
    },
  });
};
