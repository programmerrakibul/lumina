export const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API_KEY}`,
      {
        method: "POST",
        body: formData,
      },
    );

    const { data } = await res.json();

    return data.url;
  } catch (error) {
    throw error;
  }
};
