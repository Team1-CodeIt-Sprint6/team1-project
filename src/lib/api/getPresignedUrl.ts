import axios from 'axios';

interface UrlProps {
  profileImageUrl: string;
}

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzIwLCJ0ZWFtSWQiOiI2LTEiLCJpYXQiOjE3MjI2MjU0NjEsImV4cCI6MTcyMjYyNzI2MSwiaXNzIjoic3AtZ2xvYmFsbm9tYWQifQ.ipzQTVeQ-GTz_QQIMFsD051OC7DYLLggUyFfR8oIHIs';

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
