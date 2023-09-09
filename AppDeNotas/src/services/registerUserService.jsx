const registerUserService = async (registerData) => {
  const { username, email, password } = registerData;

  try {
    console.log(" aqui ", import.meta.env);
    const res = await fetch(`http://localhost:8000/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const body = await res.json();

    if (!res.ok) {
      throw new Error(body.message);
    }
    return "¡Te has registrado ! ";
  } catch (error) {
    console.error(error);
    return error;
  }
};
export default registerUserService;
