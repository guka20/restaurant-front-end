import jwtDecode from "jwt-decode";
type DecodedTypes = {
  sub: string;
  username: string;
  role: string;
  iat: number;
};
export function Decoder(accessToken: string): DecodedTypes {
  const data = jwtDecode(accessToken) as DecodedTypes;
  return data;
}
