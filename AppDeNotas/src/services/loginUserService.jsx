const loginUserService = async (loginData) => {
  const { email, password } = loginData;

  try {
    const res = await fetch(`http://localhost:8000/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const body = await res.json();

    if (!res.ok) {
      throw new Error(body.message);
    }
    return body;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export default loginUserService;
