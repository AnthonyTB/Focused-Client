export default {
  async fetchAPI(
    endpoint: string,
    headers: { [key: string]: Object }
  ): Promise<Object> {
    try {
      const response = await fetch(endpoint, headers);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      return { error };
    }
  },
};
