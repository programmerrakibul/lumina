export const sleep = async (ms = 500) => {
  return await new Promise((resolve) => setTimeout(resolve, ms));
};
