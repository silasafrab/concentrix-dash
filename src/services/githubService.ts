// services/githubService.ts
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

interface GitHubUser {
  avatar_url: string;
  name: string;
}

export const checkGitHubUsername = async (
  username: string
): Promise<boolean> => {
  try {
    const response = await axios.get<GitHubUser>(
      `https://api.github.com/users/${username}`
    );
    const { avatar_url, name } = response.data;

    Cookies.set("githubUser", JSON.stringify({ avatar_url, name }), {
      expires: 7,
      path: "/",
    });

    return true;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      return false;
    }
    throw new Error("Erro na conexão com a API.");
  }
};
