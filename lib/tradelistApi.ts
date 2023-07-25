const BaseUrl = "http://localhost:3000/api/tradelist";

export async function getTrades(code: number) {
  const res = await fetch(`${BaseUrl}/${code}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}
