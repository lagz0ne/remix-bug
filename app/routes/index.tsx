import { ActionFunction, Form, LoaderFunction, useLoaderData } from "remix";

const cache = ["1"];

export const loader: LoaderFunction = async () => {
  return cache;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  cache.push(form.get("todo") as string);
  console.log(cache);
  return null;
};

export default function Index() {
  const data = useLoaderData<typeof cache>();

  return (
    <>
      {data.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
      <Form method="post">
        <input name="todo" />
        <button>Submit</button>
      </Form>
    </>
  );
}
