import { SignUpPropertiesTypes } from "src/types/user.types";
import { baseUrl } from "../index";

type loginFunctionTypes = {
  email: string;
  password: string;
};

export async function loginPost(data: loginFunctionTypes) {
  try {
    const res = await fetch(baseUrl + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.status !== 201) {
      const result = await res.json();
      throw new Error(result.message);
    }
    return res.json();
  } catch (error) {
    throw error;
  }
}

export async function signup(data: SignUpPropertiesTypes) {
  try {
    const res = await fetch(baseUrl + "/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status !== 201) {
      const result = await res.json();
      throw new Error(result.message);
    }
  } catch (error) {
    throw error;
  }
}
