export default function Footer({ CompletedTodos, TotalTodos }) {
  return (
    <div className="bg-violet-500 text-white  shadow-[0_-3px_14px_rgba(177,120,218,1)] text-3xl font-semibold font-serif fixed bottom-0 w-full flex justify-evenly py-5">
      <span>Completed Todos : {CompletedTodos}</span>
      <span>Total Todos : {TotalTodos}</span>
    </div>
  );
}
