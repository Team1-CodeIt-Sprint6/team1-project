import axios from 'axios';

interface UrlProps {
  profileImageUrl: string;
}

export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzIwLCJ0ZWFtSWQiOiI2LTEiLCJpYXQiOjE3MjI2MzQ5MzIsImV4cCI6MTcyMjYzNjczMiwiaXNzIjoic3AtZ2xvYmFsbm9tYWQifQ.k6SD7uriKxewR1jNJQyztS-e-or9h0hzCJM3bAoFsxY';

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
  return res.data.profileImageUrl;
};

export const uploadUrlToS3 = async (presignedUrl: string, file: File) => {
  await axios.put(presignedUrl, file, {
    headers: {
      'Content-Type': file.type,
    },
    withCredentials: true,
  });
};
