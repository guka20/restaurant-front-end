import { baseUrl } from "../index";

type loginFunctionTypes = {
  email: string;
  password: string;
};

export async function loginPost(data: loginFunctionTypes) {
  const res = await fetch(baseUrl + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
