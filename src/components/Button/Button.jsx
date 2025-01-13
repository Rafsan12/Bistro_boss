/* eslint-disable react/prop-types */
export default function Button({ name }) {
  return (
    <>
      <button className="btn btn-outline border-0 border-b-4 mt-4 mb-4">
        {name}
      </button>
    </>
  );
}
