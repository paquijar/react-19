export const updateName = async (formData: FormData): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const name = formData.get("name");
      console.log(name);
      // Here we would make a request to the server to update the name
      if (!name) {
        resolve("Name is required");
      }
      resolve("Name updated successfully");
    }, 3000);
  });
};
