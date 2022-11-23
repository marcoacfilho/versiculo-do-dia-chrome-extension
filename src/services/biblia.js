import axios from "axios";

export const getVerse = async () => {
  const verseResp = await axios.get(
    "https://www.abibliadigital.com.br/api/verses/nvi/random",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldlZCBOb3YgMjMgMjAyMiAxNzoxMTo0NyBHTVQrMDAwMC5tYXJjb0BhcmVuYWNvZGUuaW8iLCJpYXQiOjE2NjkyMjM1MDd9.x4WoOWcHtN8WnTVpwwRcYfRPbcmZBFN1dPt2M15nr48`,
      },
    }
  );

  return verseResp.data;
};
