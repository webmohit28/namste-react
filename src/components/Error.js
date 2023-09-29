import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <section className="not-found">
      <h2>Note Found</h2>
      <h4>{err.status}-{err.statusText}</h4>
    </section>
  )
}
export default Error;