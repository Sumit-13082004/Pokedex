import { toast, ToastContainer } from "react-toastify";

const App = () => {
  const notify = () => toast("Hello, this is a toast!");

  return (
    <div className="bg-red-500">
      <button onClick={notify}>Show Toast</button>
      <ToastContainer />
    </div>
  );
}

export default App
